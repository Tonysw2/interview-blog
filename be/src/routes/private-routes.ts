import { FastifyInstance } from "fastify";
import { jwtVerify } from "../middlewares/jwt-verify";
import { db } from "../database";
import { z } from "zod";

export async function privateRoutes(app: FastifyInstance) {
  app.addHook("onRequest", jwtVerify);

  app.get("/posts", async (request, reply) => {
    const querySchema = z.object({
      orderBy: z.enum(["desc", "asc"]).default("desc"),
    });

    const { orderBy } = querySchema.parse(request.query);

    const posts = await db("POSTS").select("*").orderBy("CREATED_AT", orderBy);

    return reply.code(200).send({ posts });
  });

  app.get("/posts/me", async (request, reply) => {
    const querySchema = z.object({
      orderBy: z.enum(["desc", "asc"]).default("desc"),
    });

    const { orderBy } = querySchema.parse(request.query);

    const userId = request.user.sub;

    const posts = await db("POSTS")
      .select("*")
      .where({ AUTHOR_ID: userId })
      .orderBy("CREATED_AT", orderBy);

    return reply.code(200).send({ posts });
  });

  app.post("/posts", async (request, reply) => {
    const bodySchema = z.object({
      title: z.string().min(1).max(100),
      content: z.string().min(1).max(1000),
    });

    const { title, content } = bodySchema.parse(request.body);

    const userId = request.user.sub;

    await db("POSTS").insert({
      TITLE: title,
      CONTENT: content,
      AUTHOR_ID: userId,
    });

    return reply.code(201).send();
  });

  app.put("/posts/:id", async (request, reply) => {
    const paramsSchema = z.object({
      id: z.string(),
    });

    const bodySchema = z.object({
      title: z.string().min(1).max(100).optional(),
      content: z.string().min(1).max(1000).optional(),
    });

    const { id } = paramsSchema.parse(request.params);

    const { title, content } = bodySchema.parse(request.body);

    const userId = request.user.sub;

    await db("POSTS")
      .update({ TITLE: title, CONTENT: content })
      .where({ AUTHOR_ID: userId, ID: id });

    return reply.code(204).send();
  });

  app.delete("/posts/:id", async (request, reply) => {
    const paramsSchema = z.object({
      id: z.string(),
    });

    const { id } = paramsSchema.parse(request.params);

    const userId = request.user.sub;

    await db("POSTS").delete().where({ ID: id, AUTHOR_ID: userId });

    return reply.code(204).send();
  });
}
