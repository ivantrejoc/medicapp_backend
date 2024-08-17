import { DataTypes } from "sequelize";

const Patient = (sequelize) => {
  return sequelize.define(
    "Patient",
    {
      userId: {
        type: DataTypes.INTEGER,        
        primaryKey: true,
        autoIncrement: true,
        unique: true
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      phone: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      role: {
        type: DataTypes.STRING,
        allowNull: false
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    { tableName: "Patients", timestamps: true }
  );
};

export default Patient;
