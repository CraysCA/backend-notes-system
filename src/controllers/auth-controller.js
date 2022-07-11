const { Login } = require("../application/use-cases/auth");

const login = async (request, response, next) => {
  const { user: userData } = request;
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
