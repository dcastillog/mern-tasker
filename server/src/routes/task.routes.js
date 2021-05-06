const { Router } = require('express');
const auth = require('../middlewares/auth');
const validate = require('../middlewares/validate');
const { taskValidation } = require('../validations');
const taskController = require('../controllers/task.controller');
const router = Router();

/** Add midleware auth() */
router
  .route('/')
  .get(auth(), validate(taskValidation.getTasks), taskController.getTasks)
  .post(auth(), validate(taskValidation.createTask), taskController.createTask);

router
  .route('/:taskId')
  .get(auth(), validate(taskValidation.getTask), taskController.getTask)
  .patch(auth(), validate(taskValidation.updateTask), taskController.updateTask)
  .delete(auth(), validate(taskValidation.deleteTask), taskController.deleteTask);

// router.get('/', auth, taskController.getAll);
// router.get('/:projectId', taskController.getByProject);
// router.post('/', auth, taskController.create);
// router.put('/:id', auth, taskController.update);
// router.delete('/:id', auth, taskController.remove);

module.exports = router;
