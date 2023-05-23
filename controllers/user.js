const jwt = require('jsonwebtoken');

const createToken = (id) => {
    return jwt.sign({id}, 'web developer');
};

const signup = (req, res) => {
    res.send('Sign up')
};

module.exports = {signup};