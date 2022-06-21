const router = require("express").Router();
const notes = require("./notes-routes");
const users = require("./users-routes");

router.use("/notes", notes);
router.use("/users", users);

module.exports = router;
