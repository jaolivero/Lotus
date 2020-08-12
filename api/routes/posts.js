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

router.delete('/:id', auth, async (req, res) => {
  async (req, res) => {
    const profile = await User.findOne({ user: req.user.id });

    const result = await Post.findOneAndDelete({
      _id: req.params.id,
      poster: profile._id,
    });

    if (!result) {
      const post = await Post.findById(req.params.id);
      if (!post) {
        return res.status(404).json({ msg: 'Post not found' });
      }
      return res.status(401).json({ msg: 'Unauthorized!' });
    }
    return res.status(204), json({ msg: 'Success! ' });
  };
});

module.exports = router;
