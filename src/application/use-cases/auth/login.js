const jwt = require("jsonwebtoken");
const { jwtSecretKey } = require("../../../config/config");

module.exports = async ({ userData }) => {
  const payload = {
    sub: userData.id,
    name: `${userData.name} ${userData.lastname}`,
    isAdmin: userData.isAdmin,
  };

  const token = jwt.sign(payload, jwtSecretKey, { expiresIn: "1d" });

  return token;
};
