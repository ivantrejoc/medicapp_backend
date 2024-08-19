import { Router } from "express";
import patientsRouter from "./patientsRouter.js";
import specialtiesRouter from "./specialtiesRouter.js";
import medicsRouter from "./medicsRouter.js";
import appointmentsRouter from "./appointmentsRouter.js";
import medicalStoriesRouter from "./medicalStoriesRouter.js";
import authRouter from "./authRouter.js";

const mainRouter = Router();

mainRouter.use("/patients", patientsRouter);
mainRouter.use("/medics", medicsRouter);
mainRouter.use("/specialties", specialtiesRouter);
mainRouter.use("/appointments", appointmentsRouter);
mainRouter.use("/medical-stories", medicalStoriesRouter);
mainRouter.use("/auth", authRouter);

export default mainRouter;