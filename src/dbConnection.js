import { Sequelize } from "sequelize";
import dotenv from "dotenv";
import PatientModel from "./models/Patient.js";
import SpecialismModel from "./models/Specialism.js";
import MedicModel from "./models/Medic.js";
import MedicalStoryModel from "./models/MedicalStory.js";
import AppointmentModel from "./models/Appointment.js";
import PatientMedicModel from "./models/PatientMedic.js";

dotenv.config();
const { DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_NAME } = process.env;
export const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`
);

PatientModel(sequelize);
SpecialismModel(sequelize);
MedicModel(sequelize);
MedicalStoryModel(sequelize);
AppointmentModel(sequelize);
PatientMedicModel(sequelize);

const { Patient, Specialism, Medic, MedicalStory, Appointment, PatientMedic } =
  sequelize.models;

Medic.belongsTo(Specialism, { foreignKey: "specialismId", targetKey: "id" });
Specialism.hasMany(Medic, { foreignKey: "specialismId" });

MedicalStory.belongsTo(Patient, {
  foreignKey: "patientId",
  targetKey: "userId"
});

Appointment.belongsTo(Patient, {
  foreignKey: "patientId",
  targetKey: "userId"
});
Appointment.belongsTo(Medic, { foreignKey: "medicId", targetKey: "medicId" });
Appointment.belongsTo(Specialism, {
  foreignKey: "specialismId",
  targetKey: "id"
});

// Patient.belongsToMany(Medic, { through: "PatientMedic" });
// Medic.belongsToMany(Patient, { through: "PatientMedic" });
