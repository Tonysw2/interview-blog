import { FastifyInstance } from "fastify";
import { publicRoutes } from "./public-routes";

export async function appRoutes(app: FastifyInstance) {
  app.register(publicRoutes);
}
