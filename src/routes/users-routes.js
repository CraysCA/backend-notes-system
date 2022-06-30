const router = require("express").Router();
const { usersController } = require("../controllers");

router.get("/", usersController.findUser);

router.post("/", usersController.createUser);

router.put("/:id", usersController.updateUser);

router.delete("/:id", usersController.destroyUser);

module.exports = router;
