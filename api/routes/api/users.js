const express = require("express");
const router = express.Router();

//@Route POST api/users
// desc Register route
//@access Public
router.post("/", (req, res) => {
  console.log(req.body);
  res.send("User route");
});

module.exports = router;
