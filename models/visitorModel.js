import mongoose from "mongoose";

// create a user visit info with the all data
const visitSchema = new mongoose.Schema(
  {
    // unique id for each visitor, generated automatically by MongoDB
    //   _id: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     required: true,
    //     /* , default: () => {
    //             return new mongoose.Types.ObjectId()
    //             } */
    //   },

    // IP address of the client machine
    ip: {
      type: String,
      required: false,
    },
    network: {
      type: String,
      required: false,
    },
    city: {
      type: String,
      required: false,
    },
    region: {
      type: String,
      required: false,
    },
    country_name: {
      type: String,
      uppercase: true,
      required: true,
    },
    country_code: {
      type: String,
      required: true,
    },
    latitude: {
      type: Number,
      required: false,
    },
    longitude: {
      type: Number,
      required: false,
    },
    proxyIP: {
      type: String,
      required: false,
    },
    userIP: {
      type: String,
      required: false,
    },
    // User agent string (browser version etc.)
    userAgent: {
      type: String,
      required: false,
    },
    UserID: { type: String, required: true }, // connect to which
    PageCount: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

const VisitModal =
  mongoose.models.VisitorInfo || mongoose.model("VisitorInfo", visitSchema);

export default VisitModal;
