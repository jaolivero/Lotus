const auth = require('../middleware/auth');
const { Profile, validate } = require('../models/Profile');
const _ = require('lodash');
const express = require('express');
const router = express.Router();

router.get('/me', auth, async (req, res) => {
  const profile = await User.findById(req.profile._id).select('-password');
  res.send(user);
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

router.delete('/:id', auth, async (req, res) => {
  const post = await Post.findByIdAndRemove(req.params.id);

  if (!genre)
    return res.status(404).send('The genre with the given ID was not found');

  res.send(genre);
});

module.exports = router;
