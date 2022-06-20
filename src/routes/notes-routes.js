const router = require("express").Router();

router.get("/", (request, response) => {
  response.send("notas xd");
});

module.exports = router;
