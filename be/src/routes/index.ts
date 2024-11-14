import { FastifyInstance } from "fastify";
import { publicRoutes } from "./public-routes";
import { privateRoutes } from "./private-routes";

export async function appRoutes(app: FastifyInstance) {
  app.register(publicRoutes);
  app.register(privateRoutes);
}
