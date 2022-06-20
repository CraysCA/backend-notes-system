const router = require("express").Router();
const notes = require("./notes-routes");
const users = require("./users-routes");

// router.get("/", (request, response) => {
//   response.send("holi");
// });

router.use("/notes", notes);
router.use("/users", users);

module.exports = router;
