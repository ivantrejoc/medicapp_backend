import { Router } from "express";
import {
  createMedicHandler,
  createMedicsBatchHandler, getMedicsHandler
} from "../handlers/medicsHandlers.js";
import routeAuthorization from "../middlewares/routeAuthorization.js";

const medicsRouter = Router();
medicsRouter.post("/create", routeAuthorization, createMedicHandler);
medicsRouter.post("/create/batch", routeAuthorization, createMedicsBatchHandler);
medicsRouter.get("/", routeAuthorization, getMedicsHandler);

export default medicsRouter;
