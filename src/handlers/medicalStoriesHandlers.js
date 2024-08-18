import {
  createMedicalStory,
  editMedicalStory,
  deleteMedicalStory
} from "../controllers/medicalStoriesControllers.js";

export const createMedicalStoryHandler = async (req, res) => {
  try {
    const storyData = req.body;
    const newStory = await createMedicalStory(storyData);
    if (newStory.error) {
      return res.status(400).json({ message: newStory.error });
    }
    return res
      .status(201)
      .json({ message: "Medical story created successfully", newStory });
  } catch (error) {
    console.error;
    return res.status(500).json({ message: error.message });
  }
};

export const editMedicalStoryHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const storyId = Number(id);
    const newData = req.body;
    const updatedStory = await editMedicalStory(storyId, newData);
    if (updatedStory.error) {
      return res.status(400).json({ message: updatedStory.error });
    }
    return res
      .status(200)
      .json({ message: "Medical story updated successfully", updatedStory });
  } catch (error) {
    console.error;
    return res.status(500).json({ message: error.message });
  }
};

export const deleteMedicalStoryHandler = async (req, res) => {
  try {
    const { patientId } = req.params;
    const parsedPatientId = Number(patientId);
    const deletedStory = await deleteMedicalStory(parsedPatientId);
    if (deletedStory.error) {
      return res.status(400).json({ message: deletedStory.error });
    }
    return res.status(200).json({ message: deletedStory.message });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
