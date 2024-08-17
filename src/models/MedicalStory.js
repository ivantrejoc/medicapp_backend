import { DataTypes } from "sequelize";

const MedicalStory = (sequelize) => {
  return sequelize.define(
    "MedicalStory",
    {
      storyId: {
        type: DataTypes.INTEGER,
        default: true,
        primaryKey: true,
        autoIncrement: true,
        unique: true
      },
      patienId: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      age: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      height: {
        type: DataTypes.STRING,
        allowNull: false        
      },
      weight: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      bmi: {
        type: DataTypes.STRING,
        allowNull: false
      },
      smoking: {
        type: DataTypes.STRING,
        allowNull: false
      },
      drugs: {
        type: DataTypes.STRING,
        allowNull: false
      },
     hypertension: {
        type: DataTypes.STRING,
        allowNull: false
      },
     medication: {
        type: DataTypes.STRING,
        allowNull: false
      },
      alcohol: {
        type: DataTypes.STRING,
        allowNull: false
      },
      comorbilities: {
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    { timestamps: true }
  );
};

export default MedicalStory;
