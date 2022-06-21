const express = require("express");
const app = express();
const cors = require("cors");
const routes = require("./routes");
const { serverSettings } = require("./config/config.js");
require("./db/connection.js");

app.listen(serverSettings.port, () => {
  console.info(`server up on port: ${serverSettings.port}`);
});

//parser body to json
app.use(express.json());

app.use(routes);
app.use(cors);
