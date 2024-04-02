import mongoose from "mongoose";

const usersSchema=new mongoose.Schema({
    id:{type: Number,required: true ,unique: true},
    first_name: { type: "String", required: true },
    last_name: { type: "String", required: true },
    email: { type: "String", required: true ,unique: true},
    gender: {type:"String", required: true},
    avatar: {
      type: "String",

      default:
        "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
    },
    domain: {type:"String", required: true},
    available: {
      type: Boolean,
      required: true,
      default: false,
    },
  
})

export const users = mongoose.model("users", usersSchema);