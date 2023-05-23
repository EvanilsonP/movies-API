const User = require('../model/user');
const jwtoken = require('./login');

const signup = (req, res) => {
    res.send('Sign up')
};

const signup_post = async (req, res) => {
    const { email, password } = req.body;

    try {
       const user = await User.create({ email, password }); 
       const token = jwtoken.generateToken();
       res.status(201).json({user, token});
    } 
    
    catch (error) {
        console.log(error.message);
        res.status(400).json({error});
    }
};

module.exports = { signup, signup_post };