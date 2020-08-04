const config = require('config');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const Joi = require('joi');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 50,
  },
  email: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 255,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    maxlength: 1024,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
  isAdmin: Boolean,
});

userSchema.methods.generateAuthToken = function () {
  const token = jwt.sign(
    { _id: this._id, isAdmin: this.isAdmin },
    config.jwtPrivateKey
  );
  return token;
};

const User = mongoose.model('User', userSchema);

function validateUser(req) {
  const schema = Joi.object({
    username: Joi.string().min(2).max(50).required(),
    email: Joi.string().min(3).max(255).required().email(),
    password: Joi.string().min(3).max(255).required(),
    isAdmin: Joi.boolean(),
  });

  return schema.validate(req);
}

exports.User = User;
exports.validate = validateUser;
