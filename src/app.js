const express = require("express");
const app = express();
const cors = require("cors");
require("./middlewares/auth");
const routes = require("./routes");
const { errorHandler } = require("./middlewares");
const { serverSettings } = require("./config/config.js");
require("./db/connection.js");

app.listen(serverSettings.port, () => {
  console.info(`server up on port: ${serverSettings.port}`);
});

//parser body to json
app.use(express.json());

app.use(routes);
app.use(errorHandler);

app.use(cors);
