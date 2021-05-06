const httpStatus = require('http-status');
const { Task, User } = require('../models');
const ApiError = require('../utils/ApiError');

/**
 * Create a task
 * @param {Object} taskBody
 */
const createTask = async (taskBody) => {
  const user = User.findById(taskBody.createdBy);
  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
  }
  const task = await Task.create(taskBody);

  return task;
};

/**
 * Get tasks by user
 * @param {ObjectId} userId
 */
const getTasksByUserId = async (userId) => {
  const tasks = Task.where({ createdBy: userId });
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
 * Update task by id
 * @param {ObjectId} taskId
 * @param {Object} updateBody
 * @returns {Promise<Task[]>}
 */
const updateTaskById = async (taskId, updateBody) => {
  const task = await getTaskById(taskId);
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
const deleteTaskById = async (taskId) => {
  const task = await getTaskById(taskId);
  if (!task) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Task not found');
  }
  await task.remove(task);
  return task;
};

module.exports = {
  createTask,
  getTasksByUserId,
  getTaskById,
  updateTaskById,
  deleteTaskById,
};
