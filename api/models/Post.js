const mongoose = require('mongoose');
const Joi = require('joi');
const { userSchema } = require('../models/User');
const Schema = mongoose.Schema;

const commentSchema = new Schema(
  {
    profile: {
      type: Schema.Types.ObjectId,
      ref: 'profiles',
    },
    text: String,
    likes: { type: [Schema.Types.ObjectId], default: [] },
  },
  { timestamps: {} }
);

const postSchema = new Schema({
  poster: {
    type: Schema.Types.ObjectId,
    ref: 'Profile',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  game: {
    type: String,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  //comments.length..user.id... gravatar... comments.. updatedAT
  comments: { type: [commentSchema], default: [] },
  likes: { type: [mongoose.Schema.Types.ObjectId], default: [] },
  views: {
    type: Number,
    default: 0,
  },
});

const Post = mongoose.model('Post', postSchema);

function validatePost(req) {
  const schema = Joi.object({
    title: Joi.string(2).min(3).max(50).required(),
    comments: Joi.string(1).min(5).max(50),
    game: Joi.string2().min(3).max(50).required(),
    description: Joi.string(1).min(3).max(50),
  });

  return schema.validate(req);
}

module.exports.postSchema = postSchema;
module.exports.Post = Post;
module.exports.validate = validatePost;
