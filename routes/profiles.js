const auth = require('../middleware/auth');
const { Profile, validate } = require('../models/Profile');
const _ = require('lodash');
const express = require('express');
const router = express.Router();

router.get('/me', auth, async (req, res) => {
  const profile = await Profile.findById(req.params.id);
  if (!profile) return res.status(404).json({ msg: 'Profile Not Found' });
  res.json({ profile });
});

router.post('/', auth, async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let profile = new Profile(
    _.pick(req.body, [
      'user',
      'firstName',
      'lastName',
      'status',
      'bio',
      'location',
      'streaming',
    ])
  );

  profile = await Profile.create(profile);

  res.json(profile);
});

router.put('/:id', auth, async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const profile = await Profile.findOne({ user: req.user.id });
  if (!profile) {
    res.status(403).json({ msg: 'no profile' });
  }
  const postData = { ...req.body };

  const post = await Post.findOneAndUpdate(
    { _id: req.params.id, poster: profile._id },
    postData,
    { new: true }
  );

  if (!post) {
    res.status(403).json({ msg: 'Unable to update' });
    // optional check if post exists. if it does respond with 401 unauthorized. if it doesn't respond with 404 not found.
  }

  res.json(post);
});

router.delete('/', auth, async (req, res) => {
  await Profile.findOneAndRemove({ user: req.user.id });
  if (!profile) return res.status(400).json({ msg: 'Profile does not exist' });
  res.json({ msg: 'Profile has been deleted !' });
});

module.exports = router;
