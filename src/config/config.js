require("dotenv").config();
const environment = {
  serverSettings: {
    port: process.env.PORT,
  },
  db: {
    host: process.env.MONGODB_HOST,
  },
  jwtSecretKey: process.env.JWT_SECRET_KEY,
};

module.exports = environment;
