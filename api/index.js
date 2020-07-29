const express = require('express');
const app = express();
require('express-async-errors');

require('./startup/routes')(app);
require('./startup/db')();
require('./startup/validation')();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
