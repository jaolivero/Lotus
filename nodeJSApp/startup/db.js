const mongoose = require('mongoose');
const config = require('config');
const winston = require('winston');

module.exports = function () {
  mongoose
    .connect('mongodb://localhost/Main', {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log('connected to MongoDB...'));
};
