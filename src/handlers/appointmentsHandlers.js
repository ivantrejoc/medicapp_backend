import {
  createAppointment,
  getAppointmentsById,
  editAppointment,
  deleteAppointment
} from "../controllers/appointmentsControllers.js";

export const createAppointmentHandler = async (req, res) => {
  try {
    const appointmentData = req.body;
    const appointment = await createAppointment(appointmentData);
    if (appointment.error) {
      throw new Error(appointment.error);
    }
    res
      .status(201)
      .json({ message: "Appointment successfully created", appointment });
  } catch (error) {
    console.error(error);
    if (
      (error.message =
        "Date and hour unavailable for this medic, please choose another date and hour")
    ) {
      return res.status(400).json({ message: error.message });
    }
    return res.status(500).json({ message: error.message });
  }
};

export const getAppointmentsByIdHandler = async (req, res) => {
  try {
    const { id } = req.params;    
    const patientId = Number(id);
    
    const appointmentsById = await getAppointmentsById(patientId);
    if (appointmentsById.error) {
      return res.status(404).json(appointmentsById.error);
    }

    res.status(200).json(appointmentsById);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error.message });
  }
};

export const editAppointmentHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const newData = req.body;
    const appointmentId = Number(id);
    const updatedAppointment = await editAppointment(appointmentId, newData);
    if (updatedAppointment.error) {
      return res.status(400).json(updatedAppointment.error);
    }
    return res.status(200).json({
      message: "Appointment successfully updated",
      updatedAppointment
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error.message });
  }
};

export const deleteAppointmentHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const { patientId } = req.body;
    const appointmentId = Number(id);
    const deletedAppointment = await deleteAppointment(
      appointmentId,
      patientId
    );
    if (deletedAppointment.error) {
      return res.status(404).json(deletedAppointment.error);
    }
    return res.status(200).json({ message: deletedAppointment.message });
  } catch (error) {
    console.error;
    return res.status(500).json({ message: error.message });
  }
};
