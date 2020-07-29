const express = require('express');
const users = require('../routes/users');
const posts = require('../routes/posts');
const auth = require('../routes/auth');

module.exports = function (app) {
  app.use(express.json());
  app.use('/api/users', users);
  app.use('/api/posts', posts);
  app.use('/api/auth', auth);
};
