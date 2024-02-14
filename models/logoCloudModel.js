import mongoose from "mongoose";

const LogoCloudSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: false,
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
    mainImageUrl: {
      type: String,
      required: true,
    },
    active: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);
const LogoCloudModel =
  mongoose.models.LogoCloud || mongoose.model("LogoCloud", LogoCloudSchema);
export default LogoCloudModel;
