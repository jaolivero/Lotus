const auth = require('../middleware/auth');
const { User, validate } = require('../models/User');
const _ = require('lodash');
const bcrypt = require('bcrypt');
const express = require('express');
const router = express.Router();

router.get('/me', auth, async (req, res) => {
  const user = await User.findById(req.user._id).select('-password');
  res.send(user);
});

router.post('/', async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let user = await User.findOne({ email: req.body.email });
  if (user) return res.status(400).json({ email: 'User already registered.' });

  user = _.pick(req.body, ['username', 'email', 'password']);
  console.log(user);
  const salt = await bcrypt.genSalt(10);
  console.log(user.password, salt);
  user.password = await bcrypt.hash(user.password, 10);

  user = await User.create(user);

  const token = user.generateAuthToken();
  res
    .header('x-auth-token', token)
    .send(_.pick(user, ['_id', 'username', 'email']));
});

module.exports = router;
