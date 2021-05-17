const httpStatus = require('http-status');
const { taskService } = require('../services');
const catchAsync = require('../utils/catchAsync');

const getTasks = catchAsync(async (req, res) => {
  const tasks = await taskService.getTasksByUserId(req.user.id);
  res.send(tasks);
});

const getTask = catchAsync(async (req, res) => {
  const task = await taskService.getTaskById(req.params.taskId);
  res.send(task);
});

const createTask = catchAsync(async (req, res) => {
  const task = await taskService.createTask(req.body);
  res.status(httpStatus.CREATED).send(task);
});

const updateTask = catchAsync(async (req, res) => {
  const task = await taskService.updateTaskById(req.params.taskId, req.body);
  res.send(task);
});

const deleteTask = catchAsync(async (req, res) => {
  await taskService.removeTaskById(req.params.taskId);
  res.status(httpStatus.NO_CONTENT).send();
});

const assignTask = catchAsync(async (req, res) => {
  const task = await taskService.assignTask(req.params.taskId, req.body);
  res.send(task);
});

module.exports = {
  getTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask,
  assignTask,
};
