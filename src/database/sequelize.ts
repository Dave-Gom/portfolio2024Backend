import { Sequelize } from "sequelize";
import { Environments } from "../models/environment";
import { config } from "./databaseConfig";

const environment: keyof Environments =
  (process.env.environment as keyof Environments) || "development";

export const sequelize = new Sequelize(config[environment]);
