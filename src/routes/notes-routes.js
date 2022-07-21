const router = require("express").Router();
const { authorization, validationHandler } = require("../middlewares/");
const { notesSchema } = require("../middlewares/schemas");
const { notesController } = require("../controllers/index.js");

router.get("/", validationHandler(notesSchema.onGet), notesController.findNote);

router.post(
  "/",
  authorization,
  validationHandler(notesSchema.create),
  notesController.createNote
);

router.put(
  "/:courseName",
  authorization,
  validationHandler(notesSchema.update),
  notesController.updateNote
);

router.delete(
  "/:courseName",
  authorization,
  validationHandler(notesSchema.onDelete),
  notesController.destroyNote
);

module.exports = router;
