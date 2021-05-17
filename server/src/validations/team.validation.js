const Joi = require('joi');
const { objectId } = require('./custom.validation');

const getTeams = {};

const getTeam = {
  params: Joi.object().keys({
    teamId: Joi.string().custom(objectId),
  }),
};

const createTeam = {
  body: Joi.object().keys({
    name: Joi.string().required(),
    code: Joi.string().default(1),
    owner: Joi.string().custom(objectId),
  }),
};

const updateTeam = {
  params: Joi.object().keys({
    teamId: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      name: Joi.string(),
    })
    .min(1),
};

const removeTeam = {
  params: Joi.object().keys({
    teamId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  getTeams,
  getTeam,
  createTeam,
  updateTeam,
  removeTeam,
};
