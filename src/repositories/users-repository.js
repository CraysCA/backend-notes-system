const { User } = require("../db/models");

const find = async ({ id }) => {
  if (id) {
    return User.find({ id })
      .then((item) => {
        return item;
      })
      .catch((error) => {
        console.error(error);
      });
  } else {
    return User.find()
      .then((item) => {
        return item;
      })
      .catch((error) => {
        console.error(error);
      });
  }
};

const create = async ({ data }) => {
  const newUser = new User({
    name: data.name,
    lastname: data.lastname,
    img: data.img,
    email: data.email,
    password: data.password,
    isAdmin: data.isAdmin,
    course: data.course,
    dni: data.dni,
  });

  return newUser
    .save()
    .then((item) => {
      return item;
    })
    .catch((error) => {
      console.error(error);
    });
};

const update = async ({ id, data }) => {
  return User.updateOne(
    { _id: id },
    {
      $set: {
        name: data.name,
        lastname: data.lastname,
        img: data.img,
        email: data.email,
        password: data.password,
        isAdmin: data.isAdmin,
        course: data.course,
        dni: data.dni,
      },
    }
  )
    .then((item) => {
      return User.find({ id }).then((item) => {
        return item;
      });
    })
    .catch((error) => {
      console.error(error);
    });
};

const destroy = async ({ id }) => {
  return User.deleteOne({ _id: id })
    .then((item) => {
      return item;
    })
    .catch((error) => {
      console.error(error);
    });
};

const findByEmail = async ({ email }) => {
  return User.findOne({ email })
    .then((item) => {
      return item;
    })
    .catch((error) => {
      console.error(error);
    });
};

module.exports = { find, create, destroy, update, findByEmail };
