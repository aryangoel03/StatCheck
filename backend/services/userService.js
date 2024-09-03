const User = require('../models/userModel');
const Habit = require('../models/habitModel');
const DateModel = require('../models/dateModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require('../config');

function validatePassword(password) {
    const passRegex = /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])/
    return passRegex.test(password) && password.length >= 8;
}

async function registerUser(username, email, password) {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
        throw new Error(`Email already in use`);
    }

    if (!validatePassword(password)) {
        throw new Error(`Password must be at least 8 characters and contain at least one 
            lowercase character, uppercase character, special symbol, and number`);
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({
        username: username,
        email: email,
        password: hashedPassword,
        dates: [
            {
                date: new Date(new Date().setHours(0,0,0,0)),
                habits: [new Habit({
                    title: 'test habit',
                    description: 'this is a habit i have here just for testing',
                    type: 'Charisma',
                    completed: false
                })]
            }
        ]
    });

    await user.save()
    return user;
}

async function authenticateUser(email, password) {
    const user = await User.findOne({ email }).select('+password');

    if (!user || !(await bcrypt.compare(password, user.password))) {
        throw new Error(`Incorrect email or password`);
    }

    const token = jwt.sign({ userId: user._id }, config.JWT_SECRET, { expiresIn: `7d` });
    return token;
}

module.exports = { registerUser, authenticateUser };