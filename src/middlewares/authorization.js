const jwt = require("jsonwebtoken");
const { jwtSecretKey, jwtIsActive } = require("../config/config");

module.exports = async (request, response, next) => {
  console.log(jwtIsActive);
  if (!jwtIsActive) return next();
  const { auth_token: authToken } = request.cookies;
  try {
    if (!authToken)
      return response
        .status(200)
        .json({ success: false, message: "authToken don't exist" });

    const payload = jwt.verify(authToken, jwtSecretKey);

    if (!payload)
      return response
        .status(200)
        .json({ success: false, message: "authToken invalid" });
    next();
  } catch (error) {
    next(error);
  }
};
