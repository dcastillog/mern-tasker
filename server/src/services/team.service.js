const httpStatus = require('http-status');
const { Team } = require('../models');
const ApiError = require('../utils/ApiError');

const getAll = async () => {
  const teams = await Team.find();
  return teams;
};

const getAllByUserId = async (userId) => {
  const teams = await Team.where({ owner: userId });
  return teams;
};

const getById = async (id) => {
  const team = await Team.findById(id);
  return team;
};

/**
 * Create a user
 * @param {Object} userBody
 * @returns {Promise<User>}
 */
const create = async (teamBody) => {
  const team = await Team.create(teamBody);
  return team;
};

const updateById = async (id, updateBody) => {
  const team = await Team.findById(id);
  if (!team) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Team not found');
  }
  Object.assign(team, updateBody);
  await team.save();
  return team;
};

const removeById = async (id) => {
  const team = await getById(id);
  await Team.remove(team);
};

module.exports = {
  getAll,
  getAllByUserId,
  getById,
  create,
  updateById,
  removeById,
};
