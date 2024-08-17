import { DataTypes } from "sequelize";

const PatientMedic = (sequelize) => {
  return sequelize.define(
    "PatientMedic",
    {
      patientId: {
        type: DataTypes.INTEGER,
        references: {
          model: "Patients",
          key: "userId"
        }
      },
      medicId: {
        type: DataTypes.INTEGER,
        references: {
          model: "Medics",
          key: "medicId"
        }
      }
    },
    { tableName: "PatientMedics",
      timestamps: true }
  );
};

export default PatientMedic;
