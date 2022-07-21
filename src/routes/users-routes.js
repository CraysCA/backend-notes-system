const router = require("express").Router();
const { authorization, validationHandler } = require("../middlewares");
const { usersSchema } = require("../middlewares/schemas");
const { usersController } = require("../controllers");

router.get(
  "/",
  authorization,
  validationHandler(usersSchema.onGet),
  usersController.findUser
);

router.post(
  "/",
  authorization,
  validationHandler(usersSchema.create),
  usersController.createUser
);

router.put(
  "/:id",
  authorization,
  validationHandler(usersSchema.update),
  usersController.updateUser
);

router.delete(
  "/:id",
  authorization,
  validationHandler(usersSchema.onDelete),
  usersController.destroyUser
);

module.exports = router;
