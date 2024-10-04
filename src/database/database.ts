import { Sequelize } from "sequelize";
import dotenv from 'dotenv';

dotenv.config();

const database = new Sequelize(process.env.DB_NAME as string, process.env.DB_USERNAME as string, process.env.DB_PASSWORD as string,{
    dialect:  'mysql',
    host : 'localhost'
});

export {database};