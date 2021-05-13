const { response } = require('express');
const {userSchema} = require('../../models/User');
const router = express.Router();

router.get('/register', async(req, res) => {
    const email = await userSchema.findById(req.params.id);
    if (email) return res.status(404).json({msg: 'Profile already exist'});
});

module.exports = router;