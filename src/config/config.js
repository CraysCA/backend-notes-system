require("dotenv").config();
const environment = {
  serverSettings: {
    port: process.env.PORT,
  },
  db: {
    host: process.env.MONGODB_HOST,
  },
};

module.exports = environment;
