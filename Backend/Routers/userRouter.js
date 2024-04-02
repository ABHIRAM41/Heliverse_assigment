import express from "express";
import {
  getUsers,
  getUsersById,
  postUsers,
  putUsersById,
  deleteUserById,
} from "../Controllers/userController.js";
const router = express.Router();

router.route("/").get(getUsers).post(postUsers);
router.route("/:id").get(getUsersById).put(putUsersById).delete(deleteUserById);

export default router;
