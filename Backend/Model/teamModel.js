import mongoose, { Mongoose } from "mongoose";

const teamSchema = new mongoose.Schema({
  teamName: { type: "String", required: true, unique: true },
  teamMembers: [{ type: mongoose.Schema.Types.ObjectId, ref: "users" }],
});

export const team = mongoose.model("team", teamSchema);