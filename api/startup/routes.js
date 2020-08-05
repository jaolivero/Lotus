const express = require('express');
const users = require('../routes/users');
const posts = require('../routes/posts');
const auth = require('../routes/auth');
const profiles = require('../routes/profiles');

module.exports = function (app) {
  app.use(express.json());
  app.use('/api/users', users);
  app.use('/api/posts', posts);
  app.use('/api/auth', auth);
  app.use('/api/profiles', profiles);
  app.use('/api/posts', posts);
};
