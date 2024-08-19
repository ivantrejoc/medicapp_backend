import {
  createSpecialism,
  createSpecialtiesBatch, getSpecialties
} from "../controllers/specialtiesControllers.js";

export const createSpecialismHandler = async (req, res) => {
  try {
    const { name } = req.body;
    const specialism = await createSpecialism(name);
    if (specialism.error) {
      return res.status(400).json(specialism.error);
    }
    return res
      .status(201)
      .json({ message: "Specialism successfully created", specialism });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error.message });
  }
};

export const createSpecialtiesBatchHandler = async (req, res) => {
  try {
    const specialties = req.body;
    const createdSpecialties = await createSpecialtiesBatch(specialties);
    if (createdSpecialties.error) {
      return res.status(400).json(createdSpecialties.error);
    }
    return res
      .status(201)
      .json({
        message: "Specialties successfully created",
        createdSpecialties
      });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error.message });
  }
};

export const getSpecialtiesHandler = async (req, res) => {
  try {    
    const specialties = await getSpecialties();
    if (specialties.error) {
      return res.status(400).json(specialties.error);
    }
    return res
      .status(200)
      .json({       
        specialties
      });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error.message });
  }
};