import { Patient } from "../dbConnection.js";
import { Op } from "sequelize";
import bcrypt from "bcrypt";

export const createPatient = async (patientData) => {
  try {
    const { name, lastName, email, phone, role, password } = patientData;
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
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hashSync(password, saltRounds);
    const patient = {
      name,
      lastName,
      email,
      phone,
      role,
      password: hashedPassword
    };
    const newPatient = await Patient.create(patient);
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
