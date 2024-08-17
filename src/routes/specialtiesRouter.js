import { Router } from "express";
import { createSpecialismHandler, createSpecialtiesBatchHandler, getSpecialtiesHandler } from "../handlers/specialtiesHandlers.js";

const specialtiesRouter = Router();
specialtiesRouter.post("/create", createSpecialismHandler);
specialtiesRouter.post("/create/batch", createSpecialtiesBatchHandler);
specialtiesRouter.get("/", getSpecialtiesHandler);
export default specialtiesRouter;
