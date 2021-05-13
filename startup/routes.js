const express = require('express');

const users = require('../routes/api/users');
const posts = require('../routes/api/posts');
const auth = require('../routes/api/auth');
const profiles = require('../routes/api/profiles');
const register = require('../routes/api/register');

module.exports = function (app) {
  app.use(express.json());
  app.use('/api/users', users);
  app.use('/api/posts', posts);
  app.use('/api/auth', auth);
  app.use('/api/profiles', profiles);
  app.use('/api/posts', posts);
  app.use('/api/register', register);
};
