import Knex from "knex";
import knex from "knex";

const { DB_HOST, DB_USER, DB_PASS, DB_SCHEMA } = process.env;
export class BaseDatabase {
  protected static connection: Knex = knex({
    client: "mysql",
    connection: {
      host: DB_HOST,
      port: 3306,
      user: DB_USER,
      password: DB_PASS,
      database: DB_SCHEMA,
    },
  });
}
