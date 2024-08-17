import { Router } from "express";
import patientsRouter from "./patientsRouter.js";
import specialtiesRouter from "./specialtiesRouter.js";

const mainRouter = Router();

mainRouter.use("/patients", patientsRouter);
// mainRouter.use("/medics");
mainRouter.use("/specialties", specialtiesRouter);
// mainRouter.use("/appointments");
// mainRouter.use("/medical-stories");

export default mainRouter;