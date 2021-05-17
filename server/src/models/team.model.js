const mongoose = require('mongoose');
const logger = require('../config/logger');

const teamSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    code: {
      type: Number,
      required: true,
      trim: true,
    },
    members: {
      type: Array,
      ref: 'User',
    },
    owner: {
      type: mongoose.Types.ObjectId,
      ref: 'User',
    },
  },
  {
    timestamps: true,
  }
);

teamSchema.pre('save', async function (next) {
  const team = this;
  team.code = Math.floor(Math.random() * 1000) + 1000;
  next();
});

const Team = mongoose.model('Team', teamSchema);

module.exports = Team;
