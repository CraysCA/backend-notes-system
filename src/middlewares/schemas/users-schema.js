const Joi = require("joi");

const create = Joi.object({
  name: Joi.string().required(),
  lastName: Joi.string().required(),
  email: Joi.string().required(),
  password: Joi.string().required(),
  isAdmin: Joi.boolean().required(),
});

const update = Joi.object({
  name: Joi.string().optional(),
  lastName: Joi.string().optional(),
  email: Joi.string().optional(),
  password: Joi.string().optional(),
  isAdmin: Joi.boolean().optional(),
});

module.exports = { create, update };
