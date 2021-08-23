import knex from "knex";
import dotenv from "dotenv";

dotenv.config();

const {DB_HOST, DB_USER, DB_PASSWORD, DB_SCHEMA} = process.env

class BaseDatabase {
  constructor(){}

  protected static connection = knex({
    client: "mysql",
    connection: {
      host: DB_HOST,
      port: 3306,
      user: DB_USER,
      password: DB_PASSWORD,
      database: DB_SCHEMA,
      multipleStatements: true,
    },
  });
}

export default BaseDatabase;
