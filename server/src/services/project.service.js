const httpStatus = require('http-status');
const { Project, Team } = require('../models');
const ApiError = require('../utils/ApiError');

/**
 * Get projects by auth user
 * @param {ObjectId} id
 * @returns {Promise<Project>}
 */
const getProjectsByUserId = async (userId) => {
  const projects = await Project.where({ createdBy: userId });
  console.log(userId);
  return projects;
};

/**
 * Get project by id
 * @param {ObjectId} id
 * @returns {Promise<Project>}
 */
const getProjectById = async (id) => {
  const project = await Project.findById(id);
  if (!project) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Project not found');
  }
  return project;
};

/**
 * Create a user
 * @param {Object} userBody
 * @returns {Promise<User>}
 */
const createProject = async (projectBody) => {
  const project = await Project.create(projectBody);
  return project;
};

const updateProjectById = async (projectId, projectBody) => {
  const project = await getProjectById(projectId);
  if (!project) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Project not found');
  }
  Object.assign(project, projectBody);
  await project.save();
  return project;
};

const deleteProjectById = async (projectId) => {
  const project = await getProjectById(projectId);
  if (!project) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Project not found');
  }
  await project.remove();
};

const joinTeam = async (projectId, teamId) => {
  const team = Team.findById(teamId);
  const project = await getProjectById(projectId);
  if (!team) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Team not found');
  }
  if (!project) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Project not found');
  }
  project.team = team.id;
  await project.save();
  return project;
};

module.exports = {
  getProjectById,
  getProjectsByUserId,
  createProject,
  updateProjectById,
  deleteProjectById,
  joinTeam,
};
