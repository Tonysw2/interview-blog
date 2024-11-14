import cors from "@fastify/cors";
import jwt from "@fastify/jwt";
import fastify from "fastify";
import { env } from "./env";
import { appRoutes } from "./routes";

const app = fastify();

app.register(cors);

app.register(jwt, {
  secret: env.JWT_SECRET,
  sign: {
    expiresIn: "10m",
  },
});

app.register(appRoutes);

app.listen(
  {
    port: env.PORT,
  },
  (err) => {
    if (err) {
      console.log(err);
    }

    console.log(`Server running on port ${env.PORT}`);
  }
);
