const express = require("express");
const router = express.Router();
const { check, valiadationResult } = requre {'express-valiadator/check'}

const User = require('../../models/User');
//@Route POST api/users
// desc Register user
//@access Public
router.post("/", [
  check('name, "Name is require"').not().Empty(),
  check('email', 'Please enter a password with 6 or more characters').isLength({ min:6 })
], 
async (req, res) => {
  const errors= valiationResult(req);
  if(!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() })
  }

  const { name, email, password } = req.body;

  try {


    res.send('User route')
  } catch {
    console.error(err.message);
    res.statur(500).send('Server error')
  }



  // See if user exists
  // Get user gravatar
  // encrypt password
  //return jsonwebtoken
  res.send("User route");
});

module.exports = router;
