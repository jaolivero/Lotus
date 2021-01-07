const express = require('express');
const app = express();

require('express-async-errors');
require('./routes')(app);
require('./db')();
require('./config')();
require('./validation')();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
