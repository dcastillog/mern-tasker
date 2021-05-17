const httpStatus = require('http-status');
const { Tag } = require('../models');
const ApiError = require('../utils/ApiError');

const getAll = async () => {
  const tags = await Tag.find();
  return tags;
};

const getAllByUserId = async (userId) => {
  const tags = await Tag.where({ createdBy: userId });
  return tags;
};

const getById = async (id) => {
  const tag = await Tag.findById(id);
  return tag;
};

/**
 * Create a tag
 * @param {Object} tagBody
 * @returns {Promise<Tag>}
 */
const create = async (tagBody) => {
  const tag = await Tag.create(tagBody);
  return tag;
};

const updateById = async (id, updateBody) => {
  const tag = await Tag.findById(id);
  if (!tag) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Tag not found');
  }
  Object.assign(tag, updateBody);
  await tag.save();
  return tag;
};

const removeById = async (id) => {
  const tag = await getById(id);
  await Tag.remove(tag);
};

module.exports = {
  getAll,
  getAllByUserId,
  getById,
  create,
  updateById,
  removeById,
};
