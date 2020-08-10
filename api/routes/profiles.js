const auth = require('../middleware/auth');
const { Profile, validate } = require('../models/Profile');
const _ = require('lodash');
const express = require('express');
const router = express.Router();

router.get('/me', auth, async (req, res) => {
  const profile = await Profile.findById(req.params.id);
  if (!profile) {
    return res.status(404).json({ msg: 'Profile Not Found' });
  }
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

router.post('/', auth, async (req, res) => {
  User.findOne({ username: req.body.username }, function (err, user) {
    user.followers.push(req.user._id);
    var followedUser = user._id;
    user.save(function (err) {
      if (err) {
        //Handle error
        //send error response
      } else {
        // Secondly, find the user account for the logged in user
        User.findOne({ username: req.user.username }, function (err, user) {
          user.following.push(followedUser);
          user.save;
        });
      }
    });
  });
});

router.put('/:id', auth, async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const profile = await Profile.findByIdAndUpdate(
    req.params.id,
    {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      status: req.body.status,
      bio: req.body.bio,
      avatar: req.body.avatar,
      streaming: req.body.streaming,
    },
    { new: true }
  );
  if (!profile) return res.status(400).json({ msg: 'Profile does not exist' });
  res.json(profile);
});

router.delete('/:id', auth, async (req, res) => {
  await Profile.findOneAndRemove({ user: req.user.id });
  if (!profile) return res.status(400).json({ msg: 'Profile does not exist' });
  res.json({ msg: 'Profile has been deleted !' });

  res.send(genre);
});

module.exports = router;
