const User = require('../models/userModel');
const Habit = require('../models/habitModel');
const DateModel = require('../models/dateModel');
const HabitItem = require('../models/habitItemModel');

async function addHabitToDate(habitItem) {
    try {
        const newHabit = new Habit({
            title: habitItem.title,
            description: habitItem.description,
            type: habitItem.type
        });

        const targetDate = new Date(new Date().setHours(0, 0, 0, 0));

        const user = await User.findOneAndUpdate(
            {
                _id: habitItem.userId,
                "dates.date": new Date(targetDate).setHours(0, 0, 0, 0), // Find the user and the specific date
            },
            {
                $push: {
                    "dates.$.habits": newHabit, // Add the new habit to the habits array for the specific date
                },
            },
            { new: true }
        );
        console.log("Habit added", user);
        return user;
    } catch(error) {
        console.error("Error adding new habit to today's habits", error);
    }
}

async function addHabit(title, description, type, userId) {
    try {
        const habit = new HabitItem({
            title: title,
            description: description,
            type: type,
            userId: userId
        });
        await habit.save();
        return habit;
    } catch(error) {
        console.error("Error adding habit", error);
    }
}

async function getHabits(userId) {
    try {
        const habits = await HabitItem.find({ userId: userId });
        console.log("All habits for the user:", habits);
        return habits;
    } catch(error) {
        console.error("Error getting habits", error);
    }
}

module.exports = { addHabit, addHabitToDate, getHabits };