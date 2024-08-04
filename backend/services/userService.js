const User = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require('../config');

function validatePassword(password) {
    const passRegex = /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])/
    return passRegex.test(password) && password.length >= 8;
}

async function registerUser(username, email, password) {
    const existingUser = await User.findOne({ username});
    if (existingUser) {
        throw new Error(`Username already exists`);
    }

    if (!validatePassword(password)) {
        throw new Error(`Password must be at least 8 characters and contain at least one 
            lowercase character, uppercase character, special symbol, and number`);
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ username, email, password: hashedPassword });
    await user.save()

    return user;
}

async function authenticateUser(username, password) {
    const user = await User.findOne({ username }).select('+password');

    if (!user || !(await bcrypt.compare(password, user.password))) {
        throw new Error(`Incorrect username or password`);
    }

    const token = jwt.sign({ userId: user._id }, config.JWT_SECRET, { expiresIn: `7d` });
    return token;
}

module.exports = { registerUser, authenticateUser };