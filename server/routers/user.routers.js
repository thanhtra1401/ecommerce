const express = require("express");
const {
  register,
  login,
  auth,
  getDetailUser,
  uploadAvatar,
} = require("../controllers/user.controllers");
const authenticate = require("../middleware/auth/authenticate");
const { uploadImage } = require("../middleware/upload/uploadImage");
const userRouter = express.Router();

userRouter.get("/auth", authenticate, auth);
userRouter.post("/register", register);
userRouter.post("/login", login);
userRouter.get("/:id", getDetailUser);
userRouter.post(
  "/upload-avatar/:id",
  authenticate,
  uploadImage("avatar"),
  uploadAvatar
);

module.exports = { userRouter };
