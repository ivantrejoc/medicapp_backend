import { Router } from "express";
import { createPatientHandler } from "../handlers/patientsHandlers.js";

const patientsRouter = Router();
patientsRouter.post("/signup", createPatientHandler);

export default patientsRouter;
