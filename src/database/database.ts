import 'dotenv/config';
import { Sequelize } from 'sequelize-typescript';

const DB_USERNAME = process.env.DB_USERNAME || 'dave'; /* no se por que no esta funcionando */
const DB_DATABASE = process.env.DB_DATABASE || 'nombre_sistema';

export const sequelize = new Sequelize(DB_DATABASE, DB_USERNAME, process.env.DB_PASSWORD, {
    host: 'dbservice',
    password: process.env.DB_PASSWORD,
    dialect: 'mysql',
    port: 3306,
});
