const express = require("express");
const router = express.Router();
const gravtar = require("gravatar");
const { check, valiadationResult } = require("express-valiadator/check");
const bcrypt = require("bcryptjs");
const User = require("../../models/User");
//@Route POST api/users
// desc Register user
//@access Public
router.post(
  "/",
  [
    check('name, "Name is require"').not().Empty(),
    check(
      "email",
      "Please enter a password with 6 or more characters"
    ).isLength({ min: 6 }),
  ],
  async (req, res) => {
    const errors = valiationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, password } = req.body;

    try {
      let user = await User.findOne({ email });

      if (user) {
        res.status(400).json({ errors: [{ msg: "User already exists" }] });
      }
      res.send("User route");
    } catch {
      console.error(err.message);
      res.statur(500).send("Server error");
    }

    const avatar = gravtar.url(email, {
      s: "200",
      r: "pg",
      d: "mm",
    });

    user = new User({
      name,
      email,
      avatar,
      passwword,
    });

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);

    await user.save();
    // See if user exists
    // Get user gravatar
    // encrypt password
    //return jsonwebtoken
    res.send("User route");
  }
);

module.exports = router;
