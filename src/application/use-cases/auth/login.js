const jwt = require("jsonwebtoken");
const { jwtSecretKey } = require("../../../config/config");

module.exports = async ({ userData }) => {
  const payload = {
    sub: userData.id,
    name: `${userData.name} ${userData.lastName}`,
    isAdmin: userData.isAdmin,
  };

  const token = jwt.sign(payload, jwtSecretKey);

  return token;
};
