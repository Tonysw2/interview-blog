import bcryptjs from "bcryptjs";
import { FastifyInstance } from "fastify";
import { z } from "zod";
import { db } from "../database";

export async function publicRoutes(app: FastifyInstance) {
  app.post("/register", async (request, reply) => {
    const bodySchema = z.object({
      name: z.string().min(1).max(100),
      email: z.string().email().max(100),
      password: z.string().min(8),
    });

    const { name, email, password } = bodySchema.parse(request.body);

    const result = await db.raw("select id from users where email = ?", [
      email,
    ]);

    if (result[0]) {
      return reply.code(409).send({ error: "User already exists" });
    }

    const passwordHash = await bcryptjs.hash(password, 10);

    await db("USERS")
      .insert({
        NAME: name,
        EMAIL: email,
        PASSWORD_HASH: passwordHash,
      })
      .returning("ID");
  });

  app.post("/authenticate", async (request, reply) => {
    const bodySchema = z.object({
      email: z.string().email(),
      password: z.string(),
    });

    const { email, password } = bodySchema.parse(request.body);

    const result = await db("USERS")
      .select("ID", "EMAIL", "PASSWORD_HASH")
      .where({ EMAIL: email });

    if (!result[0]) {
      return reply.code(403).send({ error: "Invalid credentials." });
    }

    const isValidPassword = await bcryptjs.compare(
      password,
      result[0].PASSWORD_HASH
    );

    if (!isValidPassword) {
      return reply.code(403).send({ error: "Invalid credentials." });
    }

    const token = await reply.jwtSign({ sub: result[0].ID });

    return reply.code(200).send({ token });
  });
}
