const express = require("express");
const {
  register,
  login,
  auth,
  getDetailUser,
} = require("../controllers/user.controllers");
const authenticate = require("../middleware/auth/authenticate");
const userRouter = express.Router();

userRouter.get("/auth", authenticate, auth);
userRouter.post("/register", register);
userRouter.post("/login", login);
userRouter.get("/:id", getDetailUser);

module.exports = { userRouter };
