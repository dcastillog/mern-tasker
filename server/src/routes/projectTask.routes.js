const { Router } = require('express');
const auth = require('../middlewares/auth');
const validate = require('../middlewares/validate');
const { taskValidation } = require('../validations');
const projectTaskController = require('../controllers/projectTask.controller');

const router = Router();

router
  .route('/:projectId/tasks')
  .post(auth(), validate(taskValidation.createTask), projectTaskController.createTask)
  .get(auth(), validate(taskValidation.getTasks), projectTaskController.getTasks);

module.exports = router;
