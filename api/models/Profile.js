const mongoose = require('mongoose');
const Joi = require('joi');
const user = require('./User');

const ProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
  },
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  status: {
    type: String,
  },
  followers: [{ type: Schema.ObjectId, ref: 'user' }],

  following: [{ type: Schema.ObjectId, ref: 'user' }],
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
