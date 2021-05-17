const mongoose = require('mongoose');

const tagSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  createdBy: {
    type: mongoose.Types.ObjectId,
    ref: 'Tag',
  },
});

const Tag = mongoose.model('Tag', tagSchema);

module.exports = Tag;
