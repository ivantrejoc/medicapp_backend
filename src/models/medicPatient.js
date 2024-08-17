import { DataTypes } from "sequelize";

const MedicPatient = (sequelize) => {
  return sequelize.define(
    "MedicPatient",
    {
      id: {
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
      }
    },
    { timestamps: true }
  );
};

export default MedicPatient;
