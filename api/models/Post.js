const mongoose = require('mongoose');
const Joi = require('joi');
const { userSchema } = require('../models/User');

const postSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  comments: {
    type: String,
  },
  likes: {
    type: Number,
    default: 0,
  },
  views: {
    type: Number,
    default: 0,
  },
});

const Post = mongoose.model('Post', postSchema);

function validatePost(post) {
  const schema = {
    title: Joi.string().min(3).max(50).required(),
    comments: Joi.string().min(5).max(50).required(),
  };

  return Joi.validate(post, schema);
}

module.exports.postSchema = postSchema;
module.exports.Post = Post;
module.exports.validate = validatePost;
