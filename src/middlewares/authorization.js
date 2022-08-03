const jwt = require("jsonwebtoken");
const { jwtSecretKey, jwtIsActive } = require("../config/config");

module.exports = async (request, response, next) => {
  if (!jwtIsActive) return next();
  const { auth_token: authToken } = request.headers;
  try {
    if (!authToken)
      return response
        .status(401)
        .json({ success: false, message: "authToken don't exist" });

    const payload = jwt.verify(authToken, jwtSecretKey);

    if (!payload)
      return response
        .status(401)
        .json({ success: false, message: "authToken invalid" });
    next();
  } catch (error) {
    next(error);
  }
};
