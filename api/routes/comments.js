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

router.delete('/:postID/:commentID', auth, async (req, res) => {
  const post = await Post.findById(req.params.postID);
  if (!post) {
    return res.status(404).json({ msg: 'Post not found' });
  }
  const comment = post.comments.find(
    (comment) => comment.id === req.params.commentID
  );

  if (!comment) {
    return res.status(404).json({ msg: 'Comment not found' });
  }

  const profile = await Profile.findOne({ user: req.user.id });

  if (profile.id !== post.comments[index].profile) {
    return res.status(401).json({ msg: 'Unauthorized' });
  }
  const updatedPost = await Post.findByIdAndUpdate(req.params.postID, {
    $pull: { comments: { id: req.params.id, profile: profile.id } },
  });
});
