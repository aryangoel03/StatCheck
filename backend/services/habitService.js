const User = require('../models/userModel');
const Habit = require('../models/habitModel');
const HabitItem = require('../models/habitItemModel');
const DateModel = require('../models/dateModel');

async function addHabit(title, description, type, userId) {
    const user = await User.findOne(({ userId }))
}