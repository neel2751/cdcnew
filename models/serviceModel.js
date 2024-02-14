import mongoose from "mongoose";

// Define the main image schema
const mainImageSchema = new mongoose.Schema({
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
});
const iconSchema = new mongoose.Schema({
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
});

const serviceSchema = new mongoose.Schema(
  {
    serviceName: {
      type: String,
      required: true,
      trim: true,
    },
    slug: {
      type: String,
      required: true,
    },
    mianImage: {
      type: mainImageSchema,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    editor: {
      type: String,
      required: true,
    },
    icon: {
      type: iconSchema,
      required: true,
    },
    isActive: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const ServiceSection =
  mongoose.models.NewService || mongoose.model("NewService", serviceSchema);

export default ServiceSection;
