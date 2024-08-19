import { Router } from "express";
import { createSpecialismHandler, createSpecialtiesBatchHandler, getSpecialtiesHandler } from "../handlers/specialtiesHandlers.js";
import routeAuthorization from "../middlewares/routeAuthorization.js";

const specialtiesRouter = Router();
specialtiesRouter.post("/create", routeAuthorization,  createSpecialismHandler);
specialtiesRouter.post("/create/batch", routeAuthorization, createSpecialtiesBatchHandler);
specialtiesRouter.get("/", routeAuthorization, getSpecialtiesHandler);
export default specialtiesRouter;
