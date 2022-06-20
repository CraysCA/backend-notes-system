const router = require("express").Router();

router.get("/", (request, response) => {
  response.send("user");
});

module.exports = router;
