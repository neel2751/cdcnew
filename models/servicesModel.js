import mongoose from "mongoose";

const imageSchema = new mongoose.Schema({
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
  imageUrl: {
    type: String,
    required: true,
  },
});

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

const servicesSchema = new mongoose.Schema(
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
    images: {
      type: [imageSchema],
      default: [],
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    isActive: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const ServicesSection =
  mongoose.models.Services || mongoose.model("Services", servicesSchema);

export default ServicesSection;
