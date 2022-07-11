const router = require("express").Router();
const { authorization } = require("../middlewares/");
const { notesController } = require("../controllers/index.js");

router.get("/", authorization, notesController.findNote);

router.post("/", notesController.createNote);

router.delete("/:courseName", notesController.destroyNote);

router.put("/:courseName", notesController.updateNote);

module.exports = router;
