const router = require("express").Router();
const passport = require("passport");
const { authController } = require("../controllers/index.js");

router.post(
  "/login",
  passport.authenticate("basic", { session: false }),
  authController.login
);

module.exports = router;
