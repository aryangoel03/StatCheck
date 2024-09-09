const User = require('../models/userModel');
const Habit = require('../models/habitModel');
const DateModel = require('../models/dateModel');
const HabitItem = require('../models/habitItemModel');

async function addHabitToDate(habitItem) {
    try {
        const newHabit = new Habit({
            title: habitItem.title,
            description: habitItem.description,
            type: habitItem.type,
            habitId: habitItem._id
        });

        const targetDate = new Date(new Date().setHours(0, 0, 0, 0));

        const user = await User.findOneAndUpdate(
            {
                _id: habitItem.userId,
                "dates.date": targetDate, // Find the user and the specific date
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

async function completeHabit(habitId, completed) {
    try {
        const user = await User.updateOne(
            { "dates.habits._id": habitId },
            {
                $set: {
                    "dates.$[outer].habits.$[inner].completed": !completed
                }
            },
            {
                arrayFilters: [
                    { "outer.habits._id": habitId }, // Filter for the outer array
                    { "inner._id": habitId }                    // Filter for the inner array
                ]
            }
        );
        console.log("Habit completion status changed");
        return user;
    } catch(err) {
        console.error("Failed to change completion status", err);
    }
}

async function deleteHabit(userId, habitId) {
    try {
        const habitItem = await HabitItem.findOneAndUpdate(
            { "_id": habitId },
            {
                $set: { "isActive": false }
            }
        );
        const targetDate = new Date(new Date().setHours(0, 0, 0, 0));
        const user = await User.findOneAndUpdate(
            {
                _id: userId,
                "dates.date": targetDate
            },
            {
                $pull: { "dates.$.habits": { habitId: habitId } }
            },
            { new: true }
        );
        console.log("Removed habit and updated user:", user);
        return habitItem;
    } catch(error) {
        console.error('Error removing habit:', error);
    }
}

module.exports = { addHabit, addHabitToDate, getHabits, completeHabit, deleteHabit };