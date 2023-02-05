const express = require("express");
const { register, login, auth } = require("../controllers/user.controllers");
const authenticate = require("../middleware/auth/authenticate");
const userRouter = express.Router();

userRouter.get("/auth", authenticate, auth);
userRouter.post("/register", register);
userRouter.post("/login", login);

module.exports = { userRouter };
