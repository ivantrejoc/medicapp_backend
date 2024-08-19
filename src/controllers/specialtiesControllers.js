import { Specialism } from "../dbConnection.js";
import { Op } from "sequelize";

export const createSpecialism = async (name) => {
  try {
    const validateSpecialism = await Specialism.findOne({
      where: {
        name: name
      }
    });
    if (validateSpecialism) {
      if (validateSpecialism.name === name) {
        throw new Error("Specialism already exists");
      }
    }
    const newSpecialism = await Specialism.create({ name });
    return newSpecialism;
  } catch (error) {
    console.error;
    throw new Error(error.message);
  }
};

export const createSpecialtiesBatch = async (specialties) => {
  try {
    const names = specialties.map((specialism) => specialism.name);
    const validateSpecialism = await Specialism.findAll({
      where: {
        name: {
          [Op.in]: names
        }
      }
    });
    if (validateSpecialism.length > 0) {
      throw new Error("Specialism(s) already exists");
    }
    const newSpecialties = await Specialism.bulkCreate(specialties);
    return newSpecialties;
  } catch (error) {
    console.error;
    throw new Error(error.message);
  }
};

export const getSpecialties = async () => {
    try {
        const specialties = await Specialism.findAll()
        if(!specialties) throw new Error("Specialties not founded");
        return specialties;
    } catch (error) {
        console.error;
        throw new Error(error.message);
    }
}
