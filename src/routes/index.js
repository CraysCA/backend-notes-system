const router = require("express").Router();
const notes = require("./notes-routes");
const users = require("./users-routes");
const auth = require("./auth-routes");

router.use("/notes", notes);
router.use("/users", users);
router.use("/", auth);

module.exports = router;
