const mongoose = require('mongoose');
const faker = require('faker');
const { Task } = require('../../src/models');

const taskOne = {
  _id: mongoose.Types.ObjectId(),
  text: faker.lorem.lines(1),
  isCompleted: true,
  createdBy: mongoose.Types.ObjectId(),
};

const taskTwo = {
  _id: mongoose.Types.ObjectId(),
  text: faker.lorem.lines(1),
  isCompleted: true,
  createdBy: mongoose.Types.ObjectId(),
};

const insertTasks = async (tasks) => {
  await Task.insertMany(tasks.map((task) => task));
};

module.exports = {
  taskOne,
  taskTwo,
  insertTasks,
};
