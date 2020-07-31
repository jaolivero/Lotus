const mongoose = require('mongoose');
const Joi = require('joi');
const user = require('./User');

const ProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
  },
  status: {
    type: String,
  },
  followers: [{ type: mongoose.Schema.ObjectId, ref: 'user' }],

  following: [{ type: mongoose.Schema.ObjectId, ref: 'user' }],
  notification: {
    type: number,
  },
  bio: {
    type: String,
  },
  avatar: {
    type: String,
  },
  location: {
    city: {
      type: String,
    },
    state: {
      state: String,
    },
  },
  streaming: {
    youtube: {
      type: String,
    },
    facebook: {
      type: String,
    },
    twitch: {
      type: String,
    },
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Profile = mongoose.model('profile', ProfileSchema);
