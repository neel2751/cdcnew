import mongoose from "mongoose";

const PageCountSchema = new mongoose.Schema(
  {
    pageName: {
      type: String,
      required: true,
    },
    visits: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

const PageCountModel =
  mongoose.models.PageCount || mongoose.model("PageCount", PageCountSchema);
export default PageCountModel;
