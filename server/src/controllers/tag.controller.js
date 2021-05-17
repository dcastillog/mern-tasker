const catchAsync = require('../utils/catchAsync');
const { tagService } = require('../services');
const httpStatus = require('http-status');
const pick = require('../utils/pick');

const getTags = catchAsync(async (req, res) => {
  const tags = await tagService.getAllByUserId(req.user.id);
  res.send(tags);
});

const getTag = catchAsync(async (req, res) => {
  const tag = await tagService.getById(req.params.tagId);
  res.send(tag);
});

const createTag = catchAsync(async (req, res) => {
  const tag = await tagService.create(req.body);
  res.status(httpStatus.CREATED).send(tag);
});

const updateTag = catchAsync(async (req, res) => {
  const tag = await tagService.updateById(req.params.tagId, req.body);
  res.send(tag);
});

const removeTag = catchAsync(async (req, res) => {
  await tagService.removeById(req.params.tagId);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  getTags,
  getTag,
  createTag,
  updateTag,
  removeTag,
};
