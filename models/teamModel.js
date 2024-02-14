import mongoose from "mongoose";

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

const companySchema = new mongoose.Schema({
  department: {
    type: String,
    required: false,
  },
  role: {
    type: String,
    required: false,
  },
  position: {
    type: String,
    required: false,
  },
});

const teamSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: false,
    },
    password: {
      type: String,
      required: false,
    },
    description: {
      type: String,
      default: "",
    },
    mainImage: {
      type: mainImageSchema,
      required: true,
    },
    socialLinks: [{ type: Object }],
    company: {
      type: companySchema,
      required: false,
    },
    // phone: {
    //   countryCode: {
    //     type: Number,
    //     default: "+44",
    //   }, // Default is India
    //   number: {
    //     type: String,
    //     required: true,
    //   },
    // },
    // members: [
    //   {
    //     userId: {
    //       type: mongoose.Types.ObjectId,
    //       ref: "User",
    //     },
    //     role: {
    //       type: String,
    //       enum: ["admin", "member"],
    //       default: "member",
    //     },
    //   },
    // ],
    isActive: {
      type: Boolean,
      default: true,
    },

    user_agent: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

const TeamSection =
  mongoose.models.TeamMember || mongoose.model("TeamMember", teamSchema);
// module.exports=TeamSection;
export default TeamSection;
