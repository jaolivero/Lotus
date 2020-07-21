const express = require('express');
const connectDB = require('./config/db');
const app = express();

connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

app.use(express.json({ extended: false }));
app.get('/', (req, res) => res.send('API Running'));

// define routes
require('./startup/routes')(app);
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/posts', require('./routes/api/posts'));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
