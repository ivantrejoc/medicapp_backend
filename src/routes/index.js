import { Router } from "express";
import patientsRouter from "./patientsRouter.js";

const mainRouter = Router();

mainRouter.use("/patients", patientsRouter);
// mainRouter.use("/medics");
// mainRouter.use("/specialties");
// mainRouter.use("/appointments");
// mainRouter.use("/medical-stories");

export default mainRouter;