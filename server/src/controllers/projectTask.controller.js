const httpStatus = require('http-status');
const { taskService } = require('../services');
const catchAsync = require('../utils/catchAsync');

const getTasks = catchAsync(async (req, res) => {
  const tasks = await taskService.getAllByProjectId(req.params.projectId);
  res.send(tasks);
});

const createTask = catchAsync(async (req, res) => {
  const task = await taskService.createByProjectId(req.body, req.params.projectId);
  res.status(httpStatus.CREATED).send(task);
});

module.exports = {
  getTasks,
  createTask,
};
