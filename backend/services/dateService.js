const User = require('../models/userModel');
const Habit = require('../models/habitModel');
const DateModel = require('../models/dateModel');

async function addDate(userId) {
    try {
        const updatedUser = await User.findByIdAndUpdate(
            userId,
            { $push:
                {
                dates:
                    {
                        date: new Date().setHours(0,0,0,0),
                        tasks: []
                    }
                }
            },
            { new: true }
        );
        console.log("User updated", updatedUser);
    } catch (err) {
        console.err("Error in updating user", err);
    }
    return updatedUser;
};

async function getDate(userId, date) {
    try {
        const user = await User.findById(userId);

        if (!user) {
            throw new Error('User not found');
        }
        // Convert the input date string to a Date object
        const inputDate = new Date(date);

        // Find the date object in the user's dates array
        const dateData = user.dates.find(dateObj =>
            new Date(dateObj.date).getTime() === inputDate.getTime()
        );

        if (!dateData) {
            throw new Error('Date not found');
        }

        return dateData; // Return the found date data
    } catch (error) {
        throw new Error(error.message || 'Server error.');
    }
}

module.exports = { addDate, getDate };


module.exports = { addDate, getDate };