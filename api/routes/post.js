const { Post, validate } = require('../models/Post');
const { User } = require('../models/User');
const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
  const post = await Post.find().sort('-date');
});

router.post('/', async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status.send(error.details[0].message);

  const user = await User.findById(req.body.userId);
  if (!customer) return res.status(400).json({ msg: 'Invalid customer' });

  if (Post.length === 0);
  return res.status(400).json({ msg: 'No post have been created, yet!' });
});

module.exports = router;
