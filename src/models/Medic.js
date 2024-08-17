import { DataTypes } from "sequelize";

const Medic = (sequelize) => {
  return sequelize.define(
    "Medic",
    {
      userId: {
        type: DataTypes.INTEGER,
        default: true,
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
      specialismId: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      specialism: {
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    { timestamps: true }
  );
};

export default Medic;
