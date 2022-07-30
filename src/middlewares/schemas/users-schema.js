const Joi = require("@hapi/joi");

const create = {
  body: Joi.object().keys({
    name: Joi.string().required(),
    lastname: Joi.string().required(),
    img: Joi.string().optional(),
    email: Joi.string().required(),
    password: Joi.string().optional(),
    isAdmin: Joi.boolean().optional(),
    course: Joi.string().required(),
    dni: Joi.string().required(),
  }),
};

const update = {
  params: Joi.object().keys({
    id: Joi.string().required(),
  }),
  body: Joi.object().keys({
    name: Joi.string().optional(),
    lastname: Joi.string().optional(),
    img: Joi.string().optional(),
    email: Joi.string().optional(),
    password: Joi.string().optional(),
    isAdmin: Joi.boolean().optional(),
    course: Joi.string().optional(),
    course: Joi.string().optional(),
    dni: Joi.string().optional(),
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
