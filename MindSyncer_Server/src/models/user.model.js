import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: [true, "Full name is required"],
    },
    emailAddress: {
      type: String,
      required: [true, "Email address is required"],
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },
    role: {
      type: String,
      enum: [
        "Frontend Developer",
        "Backend Developer",
        "Full Stack Developer",
        "AI Engineer",
        "DevOps Engineer",
        "UI Designer",
        "Data Scientist",
        "Prompt Engineer",
        "Machine Learning Engineer",
        "Data Engineer",
        "Cloud Architect",
        "Automation Strategist",
      ],
      required: [true, "Role is required"],
    },
    skills: {
      type: [String],
      default: [],
    },
    profileImage: {
      type: String,
      default: "",
    },
    journey: {
      type: String,
      default: "",
    },
    education: {
      type: [String],
      default: [],
    },
    achievements: {
      type: [String],
      default: [],
    },
    socials: {
      github: { type: String, default: "" },
      linkedin: { type: String, default: "" },
      twitter: { type: String, default: "" },
      instagram: { type: String, default: "" },
      website: { type: String, default: "" },
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model('User', userSchema);

export default User;