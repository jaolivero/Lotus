const express = require('express');
const users = require('../routes/users');
const post = require('../routes/posts');

module.exports = function (app) {
  app.use(express.json());
  app.use('/api/users', users);
  app.user('/api/posts', post);
};
