import { MedicalStory } from "../dbConnection.js";

export const createMedicalStory = async (storyData) => {
  try {
    const { patientId } = storyData;
    const validateStory = await MedicalStory.findOne({
      where: {
        patientId
      }
    });
    if (validateStory) {
      throw new Error("Patient already has a medical story");
    }
    const newStory = await MedicalStory.create(storyData);
    return newStory;
  } catch (error) {
    console.error;
    throw new Error(error.message);
  }
};

export const editMedicalStory = async (storyId, newData) => {
  try {
    const validateStory = await MedicalStory.findOne({
      where: {
        storyId
      }
    });
    if (!validateStory) {
      throw new Error("Medical story not found");
    }
    const updatedStory = await MedicalStory.update(newData, {
      where: {
        storyId
      }
    });
    return updatedStory;
  } catch (error) {
    console.error;
    throw new Error(error.message);
  }
};

export const deleteMedicalStory = async (patientId) => {
  try {
    const validateStory = await MedicalStory.findOne({
      where: {
        patientId
      }
    });
    if (!validateStory) {
      throw new Error("Medical story not found");
    }
    await MedicalStory.destroy({
      where: {
        patientId
      }
    });
    return { message: "Medical story deleted" };
  } catch (error) {
    console.error;
    throw new Error(error.message);
  }
};
