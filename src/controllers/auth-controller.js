const { Login } = require("../application/use-cases/users");

const login = async (request, response, next) => {
  const { body: userData } = request;
  try {
    const token = await Login({ userData });

    response.status(200).json({
      success: true,
      message: "token created",
      data: token,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  login,
};
