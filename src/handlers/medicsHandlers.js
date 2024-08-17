import {
  createMedic,
  createMedicsBatch,
  getMedics
} from "../controllers/medicsControllers.js";

export const createMedicHandler = async (req, res) => {
  try {
    const medicData = req.body;
    const medic = await createMedic(medicData);
    if (medic.error) {
      return res.status(400).json(medic.error);
    }
    return res
      .status(201)
      .json({ message: "Medic successfully created", medic });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error.message });
  }
};

export const createMedicsBatchHandler = async (req, res) => {
  try {
    const medicsData = req.body;
    const medics = await createMedicsBatch(medicsData);
    if (medics.error) {
      return res.status(400).json(medics.error);
    }
    return res
      .status(201)
      .json({ message: "Medics successfully created", medics });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error.message });
  }
};

export const getMedicsHandler = async (req, res) => {
  try {
    const medics = await getMedics();
    if (medics.error) {
      return res.status(400).json(medics.error);
    }
    return res.status(200).json(medics);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error.message });
  }
};
