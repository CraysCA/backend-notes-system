const router = require("express").Router();
const passport = require("passport");
const { usersController } = require("../controllers");

router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  usersController.findUser
);

router.post("/", usersController.createUser);

router.put("/:id", usersController.updateUser);

router.delete("/:id", usersController.destroyUser);

module.exports = router;
