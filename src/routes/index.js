import { Router } from "express";
import patientsRouter from "./patientsRouter.js";
import specialtiesRouter from "./specialtiesRouter.js";
import medicsRouter from "./medicsRouter.js";

const mainRouter = Router();

mainRouter.use("/patients", patientsRouter);
mainRouter.use("/medics", medicsRouter);
mainRouter.use("/specialties", specialtiesRouter);
// mainRouter.use("/appointments");
// mainRouter.use("/medical-stories");

export default mainRouter;