import { Knex } from "knex";

declare module "knex/types/tables" {
  interface Tables {
    USERS: {
      ID: string;
      NAME: string;
      EMAIL: string;
      PASSWORD_HASH: string;
    };
  }
}
