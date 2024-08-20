import { Appointment } from "../dbConnection.js";

export const createAppointment = async (appointmentData) => {
  try {
    const { medicId, date, hour } = appointmentData;
    const isScheduled = await Appointment.findOne({
      where: {
        medicId,
        date,
        hour
      }
    });
    if (isScheduled)
      throw new Error(
        "Date and hour unavailable for this medic, please choose another date and hour"
      );
    const appointment = await Appointment.create(appointmentData);
    return appointment;
  } catch (error) {
    return { error: error.message };
  }
};

export const getAppointmentsById = async (patientId) => {
  try {
    const appointmentsById = await Appointment.findAll({
      where: {
        patientId
      }
    });
    if (!appointmentsById)
      throw new Error("No appointments founded to this patient");
    return appointmentsById;
  } catch (error) {
    console.error(error);
    throw new Error(error.message);
  }
};

export const editAppointment = async (appointmentId, newData) => {
  try {
    const { patientId } = newData;
    const validateAppointement = await Appointment.findOne({
      where: {
        appointmentId,
        patientId
      }
    });
    if (validateAppointement) {
      const updatedAppointment = await Appointment.update(newData, {
        where: { patientId }
      });
      return updatedAppointment;
    }
    throw new Error(
      "Date and hour unavailable for this medic, please choose another date and hour"
    );
  } catch (error) {
    console.error(error);
    throw new Error(error.message);
  }
};

export const deleteAppointment = async (appointmentId, patientId) => {
  try {
    const deletedAppointment = await Appointment.destroy({
      where: {
        appointmentId,
        patientId
      }
    });
    if (deletedAppointment) {
      return { message: "Appointment deleted" };
    }
    throw new Error("Appointment not found");
  } catch (error) {
    console.error(error);
    throw new Error(error.message);
  }
};
