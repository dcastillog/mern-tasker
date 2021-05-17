const catchAsync = require('../utils/catchAsync');
const { teamService } = require('../services');
const httpStatus = require('http-status');

const getTeams = catchAsync(async (req, res) => {
  const teams = await teamService.getAllByUserId(req.user.id);
  res.send(teams);
});

const getTeam = catchAsync(async (req, res) => {
  const team = await teamService.getById(req.params.teamId);
  res.send(team);
});

const createTeam = catchAsync(async (req, res) => {
  const team = await teamService.create(req.body);
  res.status(httpStatus.CREATED).send(team);
});

const updateTeam = catchAsync(async (req, res) => {
  const team = await teamService.updateById(req.params.teamId, req.body);
  res.send(team);
});

const removeTeam = catchAsync(async (req, res) => {
  await teamService.removeById(req.params.teamId);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  getTeams,
  getTeam,
  createTeam,
  updateTeam,
  removeTeam,
};
