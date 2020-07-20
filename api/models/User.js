const mongoose = require('mongoose');
const Joi = require('joi');

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});

function validateCustomer(customer) {
  const schema = {
    name: Joi.string().min(3).max(50).required(),
    phone: Joi.string().min(5).max(50).required(),
    isGold: Joi.boolean(),
  };
  return Joi.validate(customer, schema);
}

module.exports = User;
