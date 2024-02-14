// models/Image.js
import mongoose from "mongoose";

const homeSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      trim: true,
    },
    asset_id: {
      type: String,
      required: true,
    },
    public_id: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
    imgUrl: {
      type: String,
      required: true,
    },
    // filename: {
    //   type: String,
    //   required: true,
    // },
    // filepath: {
    //   type: String,
    //   required: true,
    // },
    tagName: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
const HomeSection =
  mongoose.models.Sections || mongoose.model("Sections", homeSchema);

export default HomeSection;
