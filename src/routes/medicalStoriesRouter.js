import { Router } from "express";
import { createMedicalStoryHandler, editMedicalStoryHandler, deleteMedicalStoryHandler } from "../handlers/medicalStoriesHandlers.js";

const medicalStoriesRouter = Router();

medicalStoriesRouter.post("/create", createMedicalStoryHandler);
medicalStoriesRouter.put("/edit/:id", editMedicalStoryHandler);
medicalStoriesRouter.delete("/delete/:patientId", deleteMedicalStoryHandler);

export default medicalStoriesRouter;