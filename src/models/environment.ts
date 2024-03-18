import { Options } from "sequelize";

export interface Environments {
  production: Options;
  development: Options;
  test: Options;
}
