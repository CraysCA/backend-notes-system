const jwt = require("jsonwebtoken");
const { jwtSecretKey } = require("../config/config");

module.exports = async (request, response, next) => {
  const { authToken } = request.body;

  const payload = jwt.verify(authToken, jwtSecretKey);
};
