import { Sequelize } from "sequelize";
import dotenv from "dotenv";
import Patient from "./models/Patient.js";

dotenv.config();
const { DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_NAME } = process.env;

export const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`
);

export const patientModel = Patient(sequelize);


