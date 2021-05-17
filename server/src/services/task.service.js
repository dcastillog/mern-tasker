const httpStatus = require('http-status');
const { Task, User } = require('../models');
const { userService } = require('../services');
const ApiError = require('../utils/ApiError');

/**
 * Get tasks by user
 * @param {ObjectId} userId
 */
const getTasksByUserId = async (userId) => {
  const tasks = Task.where({ createdBy: userId });
  return tasks;
};

/**
 * Get tasks by project
 * @param {ObjectId} projectId
 * @returns
 */
const getTasksByProjectId = async (projectId) => {
  const tasks = await Task.where({ project: projectId });
  return tasks;
};

/**
 * Get task by id
 * @param {ObjectId} id
 */
const getTaskById = async (id) => {
  return Task.findById(id);
};

/**
 * Create a task
 * @param {Object} taskBody
 */
const createTask = async (taskBody) => {
  const user = await User.findById(taskBody.createdBy);
  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
  }

  const task = await Task.create(taskBody);

  return task;
};

const createTaskByProjectId = async (taskBody, projectId) => {
  const task = await create(taskBody);
  if (projectId) {
    task.project = projectId;
    await task.save();
  }
  return task;
};

/**
 * Update task by id
 * @param {ObjectId} taskId
 * @param {Object} updateBody
 * @returns {Promise<Task[]>}
 */
const updateTaskById = async (id, updateBody) => {
  const task = await getTaskById(id);
  if (!task) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Task not found');
  }
  Object.assign(task, updateBody);
  await task.save();
  return task;
};

/**
 * Delete task by id
 * @param {ObjectId} id
 */
const removeTaskById = async (id) => {
  const task = await getTaskById(id);
  if (!task) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Task not found');
  }
  await task.remove(task);
  return task;
};

const assignTask = async (taskId, assignBody) => {
  const task = await getTaskById(taskId);
  const assignedUser = await userService.getUserById(assignBody.assignedUser);
  if (!task) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Task not found');
  }
  task.assignTo = assignedUser.id;
  await task.save();
  return task;
};

module.exports = {
  getTasksByUserId,
  getTasksByProjectId,
  getTaskById,
  createTask,
  createTaskByProjectId,
  updateTaskById,
  removeTaskById,
  assignTask,
};
