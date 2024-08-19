import { Medic } from "../dbConnection.js";
import { Op } from "sequelize";

export const createMedic = async (medicData) => {
  try {
    const { email, phone } = medicData;
    const validateMedic = await Medic.findOne({
      where: {
        [Op.or]: [{ email: email }, { phone: phone }]
      }
    });
    if (validateMedic) {
      if (validateMedic.email === medicData.email) {
        throw new Error("Email already exists");
      }
      if (validateMedic.phone === medicData.phone) {
        throw new Error("Phone number already exists");
      }
    }
    const newMedic = await Medic.create(medicData);
    const medicCreated = {
      id: newMedic.medicId,
      name: newMedic.name,
      lastName: newMedic.lastName,
      email: newMedic.email,
      phone: newMedic.phone,
      role: newMedic.role,
      SpecialismId: newMedic.specialismId,
      specialism: newMedic.specialism
    };
    return medicCreated;
  } catch (error) {
    console.error;
    throw new Error(error.message);
  }
};

export const createMedicsBatch = async (medicsData) => {
  try {
    const names = await medicsData.map((medic) => medic.name);
    const validateMedic = await Medic.findAll({
      where: {
        name: { [Op.in]: names }
      }
    });
    if (validateMedic.length > 0) throw new Error("Medic(s) already exist");
    const newMedics = await Medic.bulkCreate(medicsData);
    return newMedics;
  } catch (error) {
    console.error;
    throw new Error(error.message);
  }
};

export const getMedics = async () => {
    try {
        const medics = await Medic.findAll();
        if(!medics) throw new Error("Medics not founded");
        return medics;
    } catch (error) {
        console.error;
        throw new Error(error.message);
    }
}
