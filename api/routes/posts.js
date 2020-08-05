const { Post, validate } = require('../models/Post');
const { Profile } = require('../models/Profile');
const { User } = require('../models/User');
const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
  const posts = await Post.find().sort('-date');
  res.json({ posts });
});

router.post('/', auth, async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status.send(error.details[0].message);

  const profile = await User.findById(req.body.profileId);
  if (!profile) return res.status(400).json({ msg: 'Invalid profile' });

  const user = await User.findById(req.body.userId);
  if (!user) return res.status(400).json({ msg: 'Invalid user' });

  const profile = await User.findById(req.body.userId);
  if (!profile) return res.status(400).json({ msg: 'Invalid user' });

  if (Post.length === 0);
  return res.status(400).json({ msg: 'No post have been created, yet!' });

  let post = new Post({
    post: {
      profile: {
        _id: profile.id,
        avatar: profile.id,
        user: username.id,
      },
      _id: post._id,
      title: post.title,
      comments: post.comments,
      game: post.game,
      description: post.description,
    },
  });
});

router.get('/:id', async (req, res) => {
  const post = await Post.findById(req.params.id);

  if (!post)
    return res.status(404).send('The genre with the given ID was not found');

  res.json(genre);
});

router.delete('/:id'),
  async (req, res) => {
    const Post = await User.findByIdAndRemove(req.params.id);

    if (!customer)
      return res.status(404).send('this user with the given id was not found');

    res.send(customer);
  };

module.exports = router;
