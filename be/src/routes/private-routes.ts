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
}
