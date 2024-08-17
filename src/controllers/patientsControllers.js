import { Patient } from "../dbConnection.js";
import { Op } from "sequelize";

export const createPatient = async (patientData) => {
  try {
    const { email, phone } = patientData;
    const validatePatient = await Patient.findOne({
      where: {
        [Op.or]: [{ email: email }, { phone: phone }]
      }
    });
    if (validatePatient) {
      if (validatePatient.email === patientData.email) {
        throw new Error("Email already exists");
      }
      if (validatePatient.phone === patientData.phone) {
        throw new Error("Phone number already exists");
      }
    }

    const newPatient = await Patient.create(patientData);
    const newPatientCreated = {
      id: newPatient.userId,
      name: newPatient.name,
      lastName: newPatient.lastName,
      email: newPatient.email,
      phone: newPatient.phone,
      role: newPatient.role
    };
    return newPatientCreated;
  } catch (error) {
    console.error;
    throw new Error(error.message);
  }
};
