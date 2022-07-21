const Joi = require("@hapi/joi");

const create = {
  body: Joi.object().keys({
    name: Joi.string().required(),
    lastName: Joi.string().required(),
    email: Joi.string().required(),
    password: Joi.string().required(),
    isAdmin: Joi.boolean().required(),
  }),
};

const update = {
  params: Joi.object().keys({
    id: Joi.string().required(),
  }),
  body: Joi.object().keys({
    name: Joi.string().optional(),
    lastName: Joi.string().optional(),
    email: Joi.string().optional(),
    password: Joi.string().optional(),
    isAdmin: Joi.boolean().optional(),
  }),
};

const onDelete = {
  params: Joi.object().keys({
    id: Joi.string().required(),
  }),
};

const onGet = {
  query: Joi.object().keys({
    id: Joi.string().optional(),
  }),
};

module.exports = { create, update, onDelete, onGet };
