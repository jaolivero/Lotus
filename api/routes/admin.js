const express = require('express');
const router = express.Router();

app.get('/admin', (req, res) => {
  res.json({ msg: 'AdminPage' });
});
