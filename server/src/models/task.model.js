const mongoose = require('mongoose');

const taskSchema = mongoose.Schema(
  {
    text: {
      type: String,
      required: true,
    },
    isCompleted: {
      type: Boolean,
      default: false,
    },
    project: {
      type: mongoose.Types.ObjectId,
      ref: 'Project',
      default: null,
    },
    assignTo: {
      type: mongoose.Types.ObjectId,
      ref: 'User',
      default: null,
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: 'User',
    },
  },
  {
    timestamps: true,
  }
);

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
