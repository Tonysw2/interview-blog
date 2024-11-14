import { z } from "zod";

const envSchema = z.object({
  DB_CLIENT: z.string(),
  DB_USER: z.string(),
  DB_PASSWORD: z.string(),
  DB_CONNECTION_STR: z.string(),
  PORT: z.coerce.number().default(3333),
  JWT_SECRET: z.string(),
});

export const env = envSchema.parse(process.env);
