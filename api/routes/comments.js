const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');

const Post = require('../../models/Post');
const User = require('../../models/User');
const Profile = require('../../models/Profile');

router.post(':/postID', auth, async (req, res) => {
  const post = await Post.findById(req.params.postID);

  if (!post) {
    return res.status(404).json({ msg: 'Post not found' });
  }
  const profile = await Profile.findOne({ user: req.user.id });
  if (!profile) {
    return res.status(400).json({ msg: 'Profile required' });
  }
  const comment = { text: req.body.text, profile: profile.id };

  postcomments.push(comment);
  post.save();
  res.json(post.comments);
});
