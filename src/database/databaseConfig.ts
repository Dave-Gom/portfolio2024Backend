import { Environments } from "../models/environment";

export const config: Environments = {
  development: {
    username: "root",
    password: undefined,
    database: "database_development",
    host: "127.0.0.1",
    dialect: "mysql",
  },
  test: {
    username: "root",
    password: undefined,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "mysql",
  },
  production: {
    username: "root",
    password: undefined,
    database: "database_production",
    host: "127.0.0.1",
    dialect: "mysql",
  },
};
