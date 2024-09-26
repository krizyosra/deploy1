const express = require("express");
const appRouter = express.Router();
const usercontroller = require("../Controllers/UserController");
const {
  registerCheck,
  validator,
  loginCheck,
} = require("../middlewares/validator");
const isAuth = require("../middlewares/isAuth");

appRouter.post(
  "/register",
  registerCheck(),
  validator,
  usercontroller.register
);
appRouter.post("/login", loginCheck(), validator, usercontroller.login);
// get current user =>
appRouter.get("/", isAuth(), usercontroller.current);
appRouter.patch("/:id", isAuth(),usercontroller.updateuser )
//appRouter.delete("/:id")

module.exports = appRouter;
