import mongoose, { Schema } from "mongoose";

const ColorSchema = new Schema({
  color: {
    type: String,
    required: true,
    maxLength: 25,
  },
});

const Color = mongoose.model("color", ColorSchema);

export default Color;
