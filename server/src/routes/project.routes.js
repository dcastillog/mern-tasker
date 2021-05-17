const { Router } = require('express');
const auth = require('../middlewares/auth');
const validate = require('../middlewares/validate');
const { projectValidation } = require('../validations');
const projectController = require('../controllers/project.controller');
const router = Router();

router
  .route('/')
  .get(auth(), validate(projectValidation.getProjects), projectController.getProjects)
  .post(auth(), validate(projectValidation.createProject), projectController.createProject);

router
  .route('/:projectId')
  .get(auth(), validate(projectValidation.getProject), projectController.getProject)
  .patch(auth(), validate(projectValidation.updateProject), projectController.updateProject)
  .delete(auth(), validate(projectValidation.deleteProject), projectController.deleteProject);

router.post('/:projectId/join/:teamId', auth(), validate(), projectController.joinProjectToTeam);

// router.get('/', auth, projectController.getByAuthUser);
// router.post(
//   '/',
//   auth,
//   // [check('name', 'Project name is required').not().isEmpty()],
//   projectController.create
// );

// router.put(
//   '/:id',
//   auth,
//   // [check('name', 'Project name is required').not().isEmpty()],
//   projectController.update
// );

// router.delete('/:id', auth, projectController.remove);

module.exports = router;
