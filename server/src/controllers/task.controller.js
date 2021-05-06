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
  await taskService.deleteTaskById(req.params.taskId);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  getTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask,
};

// const Task = require('../models/task');
// const Project = require('../models/project');

// exports.getAll = async (req, res) => {
//   try {
//     const tasks = Task.find();
//     return tasks;
//   } catch (error) {
//     console.error(error);
//   }
// };

// exports.create = async (req, res) => {
//   // const errors = validationResult(req);
//   // if (!errors.isEmpty()) {
//   //   return res.status(400).json({ errors: errors.array() });
//   // }

//   try {
//     const { project } = req.body;

//     const projectFound = await Project.findById(project);
//     if (!projectFound) {
//       return res.status(404).json({ msg: 'Project not found' });
//     }

//     if (projectFound.createdBy.toString() !== req.user.id) {
//       return res.status(401).json({ msg: 'no autorizado' });
//     }

//     const task = new Task(req.body);

//     await task.save();

//     res.status(200).json({ task });
//   } catch (error) {
//     console.log(error);
//     res.status(500).send('Error');
//   }
// };

// exports.getByProject = async (req, res) => {
//   try {
//     const projectFound = await Project.findById(req.params.projectId);
//     if (!projectFound) {
//       return res.status(404).json({ msg: 'Proyecto no encontrado' });
//     }

//     // if (projectFound.createdBy.toString() !== req.user.id) {
//     //   return res.status(401).json({ msg: 'no autorizado' });
//     // }

//     const tasks = await Task.find({ project: projectFound.id });
//     res.json({ tasks });
//   } catch (error) {
//     console.log(error);
//     res.status(500).send('Hubo un error');
//   }
// };

// exports.update = async (req, res) => {
//   try {
//     const { project, name, status } = req.body;

//     const taskFound = await Task.findById(req.params.id);

//     if (!taskFound) {
//       return res.status(404).json({ msg: 'Task not found' });
//     }

//     const projectFound = await Project.findById(project);

//     // Revisar si el proyecto actual pertenece al usuario autenticado
//     if (projectFound.createdBy.toString() !== req.user.id) {
//       return res.status(401).json({ msg: 'no autorizado' });
//     }

//     const newTask = {};
//     newTask.name = name;
//     newTask.status = status;

//     task = await Task.findOneAndUpdate({ _id: req.params.id }, newTask, {
//       new: true,
//     });
//     res.json({ task });
//   } catch (error) {
//     console.log(error);
//     res.status(500).send('error');
//   }
// };

// exports.remove = async (req, res) => {
//   try {
//     const { project } = req.query;

//     const taskFound = await Task.findById(req.params.id);

//     if (!taskFound) {
//       return res.status(404).json({ msg: 'No existe esa tarea' });
//     }

//     const projectFound = await Project.findById(project);

//     if (projectFound.createdBy.toString() !== req.user.id) {
//       return res.status(401).json({ msg: 'no autorizado' });
//     }

//     await Task.findOneAndRemove({ _id: req.params.id });

//     res.json({ msg: 'tarea eliminada' });
//   } catch (error) {
//     console.log(error);
//     res.status(500).send('error');
//   }
// };
