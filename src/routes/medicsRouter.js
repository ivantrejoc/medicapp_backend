import { Router } from "express";
import {
  createMedicHandler,
  createMedicsBatchHandler, getMedicsHandler
} from "../handlers/medicsHandlers.js";

const medicsRouter = Router();
medicsRouter.post("/create", createMedicHandler);
medicsRouter.post("/create/batch", createMedicsBatchHandler);
medicsRouter.get("/", getMedicsHandler);

export default medicsRouter;
