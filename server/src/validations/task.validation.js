const Joi = require('joi');
const { objectId } = require('./custom.validation');

const createTask = {
  body: Joi.object().keys({
    text: Joi.string().required(),
    isCompleted: Joi.boolean().required(),
    createdBy: Joi.string().required().custom(objectId),
  }),
};

const getTasks = {};

const getTask = {
  params: Joi.object().keys({
    taskId: Joi.string().custom(objectId),
  }),
};

const updateTask = {
  params: Joi.object().keys({
    taskId: Joi.string().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      text: Joi.string(),
      isCompleted: Joi.boolean(),
    })
    .min(1),
};

const deleteTask = {
  params: Joi.object().keys({
    taskId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  getTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask,
};
