import { DataTypes } from "sequelize";

const Specialism = (sequelize) => {
  return sequelize.define(
    "Specialism",
    {
      id: {
        type: DataTypes.INTEGER,
        default: true,
        primaryKey: true,
        autoIncrement: true,
        unique: true
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    { timestamps: true }
  );
};

export default Specialism;
