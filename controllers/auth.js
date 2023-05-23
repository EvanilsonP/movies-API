const User = require('../model/user');
const bcrypt = require('bcrypt');

const authenticate = async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if(!user) {
        return res.status(400).send({ error: 'User not found' });
    }

    if(!await bcrypt.compare(password, user.password)) {
        return res.status(400).send({ error: 'Invalid password'});
    }
    res.send({ user });
};

module.exports = { authenticate };