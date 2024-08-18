import { DataTypes } from "sequelize";

const Appointment = (sequelize) => {
  return sequelize.define(
    "Appointment",
    {
      appointmentId: {
        type: DataTypes.INTEGER,
        default: true,
        primaryKey: true,
        autoIncrement: true,
        unique: true
      },
      patientId: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      medicId: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      specialismId: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      date: {
        type: DataTypes.DATEONLY,
        allowNull: false
      },
      hour: {
        type: DataTypes.TIME,
        allowNull: false
      },
      comments: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "No comments"
      }
    },
    { timestamps: true }
  );
};

export default Appointment;
