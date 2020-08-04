const mongoose = require('mongoose');
const Joi = require('joi');
const user = require('./User');

const Profile = new mongoose.Schema({
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
  followers: [{ type: mongoose.Schema.ObjectId, ref: 'user' }],

  following: [{ type: mongoose.Schema.ObjectId, ref: 'user' }],

  notification: {
    type: Number,
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

function validateProfile(req) {
  const schema = Joi.object({
    firstName: Joi.string().min(2).max(50).required(),
    lastName: Joi.string().min(2).max(50).required(),
    status: Joi.string().min(3).max(50),
    location: Joi.array().min(3).max(50),
    streaming: Joi.string().min(3).max(200).required(),
  });
  return schema.validate(req);
}

module.exports.Profile = Profile;
module.exports.validate = validateProfile;
