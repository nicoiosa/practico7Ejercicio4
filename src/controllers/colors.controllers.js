import Color from "../database/models/colors.js";

export const listColors = async (req, res) => {
  try {
    const colors = await Color.find();
    res.status(200).json(colors);
  } catch (error) {
    console.error(error);
    res.status(404).json({
      message: "Could not find the list of colors",
    });
  }
};
export const createColor = async (req, res) => {
  try {
    const newColor = new Color(req.body);
    await newColor.save();
    res.status(201).json({
      message: "The color was created",
    });
  } catch (error) {
    console.error(error);
    res.status(400).json({
      message: "The color could not be uploaded",
    });
  }
};
export const deleteColor = async (req, res) => {
  try {
    const searchedColor = await Color.findById(req.params.id);
    if (!searchedColor) {
      return res.status(404).json({
        message: "Could not find the color",
      });
    }
    await Color.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "The color was deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "An error ocurred trying to delete the color",
    });
  }
};
