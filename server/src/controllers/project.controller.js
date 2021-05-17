const catchAsync = require('../utils/catchAsync');
const { projectService } = require('../services');
const httpStatus = require('http-status');
const pick = require('../utils/pick');

const getProjects = catchAsync(async (req, res) => {
  const projects = await projectService.getProjectsByUserId(req.user.id);
  res.send(projects);
});

const getProject = catchAsync(async (req, res) => {
  const project = await projectService.getProjectById(req.params.projectId);
  res.send(project);
});

const createProject = catchAsync(async (req, res) => {
  const project = await projectService.createProject(req.body);
  res.status(httpStatus.CREATED).send(project);
});

const updateProject = catchAsync(async (req, res) => {
  const project = await projectService.updateProjectById(req.params.projectId, req.body);
  res.send(project);
});

const deleteProject = catchAsync(async (req, res) => {
  await projectService.deleteProjectById(req.params.projectId);
  res.status(httpStatus.NO_CONTENT).send();
});

const joinProjectToTeam = catchAsync(async (req, res) => {
  const project = await projectService.joinTeam(req.params.projectId, req.params.teamId);
  res.send(project);
});

module.exports = {
  getProjects,
  getProject,
  updateProject,
  deleteProject,
  createProject,
  joinProjectToTeam,
};

// // const { validationResult } = require('express-validator');

// const Project = require('../models/project');

// /**
//  * GET api/projects
//  *
//  * @param {*} req
//  * @param {*} res
//  */
// exports.getByAuthUser = async (req, res) => {
//   try {
//     const projects = await Project.find({ createdBy: req.user.id });
//     res.json({ projects });
//   } catch (error) {
//     console.log(error);
//     res.status(500).send('Error');
//   }
// };

// /**
//
//  * POST api/projects
//  *
//  * @param {*} req
//  * @param {*} res
//  * @returns
//  */
// exports.create = async (req, res) => {
//   // const errors = validationResult(req);
//   // if (!errors.isEmpty) {
//   //   return res.status(400).json({ errors: errors.array() });
//   // }

//   try {
//     const project = new Project(req.body);
//     project.createdBy = req.user.id;
//     await project.save();
//     res.json(project);
//   } catch (error) {
//     console.log(error);
//     req.status(500).send('Error');
//   }
// };

// exports.update = async (req, res) => {
//   // const errors = validationResult(req);
//   // if (!errors.isEmpty) {
//   //   return res.status(400).json({ errors: errors.array() });
//   // }

//   const { name } = req.body;
//   const newProject = {};

//   if (name) {
//     newProject.name = name;
//   }

//   try {
//     let project = await Project.findById(req.params.id);

//     if (!project) {
//       return res.status(404).json({ msg: 'proyecto no encontrado' });
//     }

//     if (project.createdBy.toString() !== req.user.id) {
//       return res.status(401).json({ msg: 'no autorizado' });
//     }

//     project = await Project.findOneAndUpdate({ _id: req.params.id }, { $set: newProject }, { new: true });
//     res.json(project);
//   } catch (error) {
//     console.log(error);
//     res.status(500).send('Error en el servidor');
//   }
// };

// exports.remove = async (req, res) => {
//   try {
//     const project = await Project.findById(req.params.id);

//     if (!project) {
//       return res.status(404).json({ msg: 'proyecto no encontrado' });
//     }

//     if (project.createdBy.toString() !== req.user.id) {
//       return res.status(401).json({ msg: 'no autorizado' });
//     }

//     await Project.findOneAndRemove({ _id: req.params.id });
//     res.json({ msg: 'Proyecto eliminado' });
//   } catch (error) {
//     console.log(error);
//     res.status(500).send('error en el servidor');
//   }
// };
