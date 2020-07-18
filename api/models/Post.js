const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
  },
  date: {
    type: Date,
    default: Date.now,
  },
  comments: {
    type: String,
  },
  likes: {
    type: Number,
    default: 0,
  },
});

module.exports = Post = mongoose.model('post', PostSchema);
