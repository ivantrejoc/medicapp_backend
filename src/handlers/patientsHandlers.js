import { createPatient } from "../controllers/patientsControllers.js";

export const createPatientHandler = async (req, res) => {
  try {
    const { name, lastName, email, phone, role, password } = req.body;
    const patienData = { name, lastName, email, phone, role, password };

    const patient = await createPatient(patienData);
    if (patient.error) {
      return res.status(400).json(patient.error);
    }
    return res
      .status(201)
      .json({ message: "Patient successfully created", patient });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error.message });
  }
};
