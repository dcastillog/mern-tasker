const Joi = require('joi');
const { objectId } = require('./custom.validation');

const createTag = {
  body: Joi.object().keys({
    name: Joi.string().required(),
    createdBy: Joi.string().custom(objectId),
  }),
};

const getTags = {};

const getTag = {
  params: Joi.object().keys({
    tagId: Joi.string().custom(objectId),
  }),
};

const updateTag = {
  params: Joi.object().keys({
    tagId: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      name: Joi.string(),
      color: Joi.string(),
    })
    .min(1),
};

const removeTag = {
  params: Joi.object().keys({
    tagId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  getTags,
  getTag,
  createTag,
  updateTag,
  removeTag,
};
