const router = require("express").Router();
const { notesController } = require("../controllers/index.js");

router.get("/", (request, response) => {
  response.send("notas xd");
});

router.post("/", notesController.createNote);

module.exports = router;
