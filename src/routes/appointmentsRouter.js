import { Router } from "express";
import {
  createAppointmentHandler,
  getAppointmentsByIdHandler,
  editAppointmentHandler,
  deleteAppointmentHandler
} from "../handlers/appointmentsHandlers.js";
import routeAuthorization from "../middlewares/routeAuthorization.js";

const appointmentsRouter = Router();

appointmentsRouter.post(
  "/create",
  routeAuthorization,
  createAppointmentHandler
);
appointmentsRouter.get(
  "/patient/:id",
  routeAuthorization,
  getAppointmentsByIdHandler
);
appointmentsRouter.put("/edit/:id", routeAuthorization, editAppointmentHandler);
appointmentsRouter.delete(
  "/delete/:id",
  routeAuthorization,
  deleteAppointmentHandler
);

export default appointmentsRouter;
