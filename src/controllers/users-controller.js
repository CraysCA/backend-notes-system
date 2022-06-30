const {
  Create,
  Update,
  Find,
  Destroy,
} = require("../application/use-cases/users");

const findUser = async (request, response, next) => {
  const { id } = request.query;
  try {
    const users = await Find({ id });

    if (users) {
      response.status(200).json({
        success: true,
        message: "users listed",
        data: users,
      });
    } else {
      response.status(404).json({
        success: false,
        message: "not found",
      });
    }
  } catch (error) {
    next(error);
  }
};

const createUser = async (request, response, next) => {
  const { body: data } = request;
  try {
    sdsdsa;
    const users = await Create({ data });

    response.status(201).json({
      success: true,
      message: "user created",
      data: users,
    });
  } catch (error) {
    next(error);
  }
};

const updateUser = async (request, response, next) => {
  const { id } = request.params;
  const { body: data } = request;
  try {
    const oldUserData = await Find({ id });
    const user = await Update({ id, data, oldUserData });

    if (user) {
      response.status(200).json({
        success: true,
        message: "user updated",
        data: user,
      });
    } else {
      response.status(409).json({
        success: false,
        message: "fail to update",
      });
    }
  } catch (error) {
    next(error);
  }
};

const destroyUser = async (request, response, next) => {
  const { id } = request.params;
  try {
    const user = await Destroy({ id });

    if (user) {
      response.status(200).json({
        success: true,
        message: "user deleted",
      });
    }
  } catch (error) {
    next(error);
  }
};

module.exports = {
  findUser,
  createUser,
  updateUser,
  destroyUser,
};
