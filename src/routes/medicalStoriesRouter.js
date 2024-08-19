import { Router } from "express";
import {
  createMedicalStoryHandler,
  editMedicalStoryHandler,
  deleteMedicalStoryHandler,
  getMedicalStoryByPatientHandler
} from "../handlers/medicalStoriesHandlers.js";
import routeAuthorization from "../middlewares/routeAuthorization.js";

const medicalStoriesRouter = Router();

medicalStoriesRouter.post("/create", createMedicalStoryHandler);
medicalStoriesRouter.put("/edit/:id", editMedicalStoryHandler);
medicalStoriesRouter.get(
  "/story/:patientId",
  routeAuthorization,
  getMedicalStoryByPatientHandler
);
medicalStoriesRouter.delete("/delete/:patientId", deleteMedicalStoryHandler);

export default medicalStoriesRouter;
