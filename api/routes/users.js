const { User, validate } = require('..');
const mongoose = require('../models/User');
const router = express.Router();

router.get('/me', async (req, res) => {
  const user = await user.findById(req.user._id).select('-password');
  res.send(user);
});

router.post("/", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let user = await. User.findOne({email: req.body.email});
  if(user) return res.status(400).send("User already registered.");
})

module.exports = router;