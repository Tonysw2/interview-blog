import { Knex } from "knex";

declare module "knex/types/tables" {
  interface Tables {
    USERS: {
      ID: string;
      NAME: string;
      EMAIL: string;
      PASSWORD_HASH: string;
    };

    POSTS: {
      ID: string;
      TITLE: string;
      CONTENT: string;
      AUTHOR_ID: string;
      CREATED_AT: string;
    };
  }
}
