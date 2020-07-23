const express = require('express');
const connectDB = require('./config/db');
const users = require('../routes/users');
const app = express();

require('./startup/routes')(app);
require('./startup/routes')();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
