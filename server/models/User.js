const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
  },
  image: {
    type: String,
    required: false,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  updatedAt: {
    type: Date,
    default: Date.now(),
  },
  role: {
    type: String,
    default: 'USER',
  },
  google: {
    type: Boolean,
    default: false,
  },
  status: {
    type: Boolean,
    default: true,
  },
});

module.exports = mongoose.model('User', UserSchema);
