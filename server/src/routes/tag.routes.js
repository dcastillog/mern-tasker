const { Router } = require('express');
const auth = require('../middlewares/auth');
const validate = require('../middlewares/validate');
const { tagValidation } = require('../validations');
const tagController = require('../controllers/tag.controller');
const router = Router();

router
  .route('/')
  .get(auth(), validate(tagValidation.getTags), tagController.getTags)
  .post(auth(), validate(tagValidation.createTag), tagController.createTag);

router
  .route('/:tagId')
  .get(auth(), validate(tagValidation.getTag), tagController.getTag)
  .patch(auth(), validate(tagValidation.updateTag), tagController.updateTag)
  .delete(auth(), validate(tagValidation.removeTag), tagController.removeTag);

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
