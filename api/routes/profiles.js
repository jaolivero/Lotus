const express = require('express');
const router = express.Router();

router.get('/me', auth, async (req, res) => {
  const profile = await User.findById(req.profile._id).select('-password');
  res.send(user);
});

router.post('/', async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let user = await User.findOne({ email: req.body.email });
  if (user) return res.status(400).send('User already registered.');
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
