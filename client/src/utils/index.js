import { taskFilter } from './constants';

export const filteredTasksExist = (selectedProject) => !!taskFilter.find((filter) => filter.id === selectedProject);

export const getProjectName = (projects, projectId) => projects.find((project) => project.id === projectId).name;

export const getFilterTitle = (projects, filter) => projects.find((project) => project.id === filter);

export const generatePushId = (() => {})();

export const decodeValue = () => {};

export const encondeValue = () => {};
