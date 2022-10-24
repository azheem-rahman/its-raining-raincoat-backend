const express = require("express");
const userRouter = express.Router();
const { create, login } = require("../controllers/userController");

userRouter.put("/create", create);
userRouter.post("/login", login);

module.exports = userRouter;
