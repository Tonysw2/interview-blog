import knex, { Knex } from "knex";
import { env } from "./env";

export const config: Knex.Config = {
  client: env.DB_CLIENT,
  connection: {
    user: env.DB_USER,
    password: env.DB_PASSWORD,
    connectString: env.DB_CONNECTION_STR,
  },
};

export const db = knex(config);
