import { Sequelize } from "sequelize";
import dotenv from "dotenv";
import Patient from "./models/Patient.js";
import Specialism from "./models/Specialism.js";
import Medic from "./models/Medic.js";
import MedicalStory from "./models/MedicalStory.js";
import Appointment from "./models/Appointment.js";
import MedicPatient from "./models/medicPatient.js";


dotenv.config();
const { DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_NAME } = process.env;

export const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`
);

export const patientModel = Patient(sequelize);
export const specialismModel = Specialism(sequelize);
export const medicModel = Medic(sequelize);
export const medicalStoryModel = MedicalStory(sequelize);
export const appointmentModel = Appointment(sequelize);
export const medicPatientModel = MedicPatient(sequelize);
