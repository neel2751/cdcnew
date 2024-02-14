// models/Image.js
import mongoose from "mongoose";

const tagSchema = new mongoose.Schema({
  tags: {
    type: [
      {
        tagName: { type: String, required: true },
        isActive: { type: Boolean, default: true },
        createdAt: { type: Date, default: Date.now() },
      },
    ],
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});
const TagSection = mongoose.models.Tag || mongoose.model("Tag", tagSchema);

export default TagSection;
