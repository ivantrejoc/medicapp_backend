import { Router } from "express";
import {
  createAppointmentHandler,
  getAppointmentsByIdHandler,
  editAppointmentHandler,
  deleteAppointmentHandler
} from "../handlers/appointmentsHandlers.js";

const appointmentsRouter = Router();

appointmentsRouter.post("/create", createAppointmentHandler);
appointmentsRouter.get("/patient/:id", getAppointmentsByIdHandler);
appointmentsRouter.put("/edit/:id", editAppointmentHandler);
appointmentsRouter.delete("/delete/:id", deleteAppointmentHandler);

export default appointmentsRouter;
