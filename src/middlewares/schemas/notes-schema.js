const Joi = require("@hapi/joi");

const create = {
  body: Joi.object().keys({
    courseName: Joi.string().required(),
    score: Joi.number().required(),
  }),
};

const update = {
  params: Joi.object().keys({
    courseName: Joi.string().required(),
  }),
  body: Joi.object().keys({
    courseName: Joi.string().optional(),
    score: Joi.number().optional(),
  }),
};

const onDelete = {
  params: Joi.object().keys({
    courseName: Joi.string().required(),
  }),
};

const onGet = {
  query: Joi.object().keys({
    courseName: Joi.string().optional(),
  }),
};

module.exports = { create, update, onDelete, onGet };
