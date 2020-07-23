const mongoose = require('mongoose');

module.exports = function () {
  mongoose.connect('mongodb://localhost/main', {
    useNewUrlParser: true,
    useCreateIndex: true,
  });
};
