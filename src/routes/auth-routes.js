const router = require("express").Router();
const passport = require("passport");
const { authController } = require("../controllers/index.js");

router.post(
  "/login",
  passport.authenticate("Basic", { session: false }),
  authController.login
);
