const mongoose = require('mongoose');

const teamSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    code: {
      type: String,
      required: true,
      trim: true,
    },
    members: {
      type: Array,
      ref: 'User',
    },
  },
  {
    timestamps: true,
  }
);

userSchema.pre('save', async function (next) {
  const team = this;
  // Generate team code
  next();
});

const Team = mongoose.model('Team', teamSchema);

module.exports = Team;
