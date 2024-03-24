import { Sequelize } from "sequelize";

export const sequelize = new Sequelize('biblioteca', 'postgres', 'sapo123', {
    host: 'localhost',
    dialect: 'postgres',
});