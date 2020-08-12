const auth = require('../middleware/auth');
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

  const profile = await Profile.findOne({ user: req.user.id });
  // console.log(req);
  if (!profile) return res.status(400).json({ msg: 'Invalid profile' });

  if (Post.length === 0) {
    return res.status(400).json({ msg: 'No post have been created, yet!' });
  }
  profileId = profile._id;
  console.log(profileId);

  const postData = { ...req.body };
  postData.poster = profileId;

  const post = await Post.create(postData);
  res.json(post);
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
