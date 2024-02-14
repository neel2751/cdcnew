import mongoose from "mongoose";

const uploadSchema = new mongoose.Schema(
  {
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
    mainUrl: {
      type: String, //used to store the original URL of image (if it is not provided
      //then we will use 'url' field)
      require: true,
    },
    isActive: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const UploadModel =
  mongoose.models.EditorImage || mongoose.model("EditorImage", uploadSchema);

export default UploadModel;
