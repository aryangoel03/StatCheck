const mongoose = require('mongoose');

const habitSchema = new mongoose.Schema({
    title: { type: String, required: true},
    description: { type: String },
    type: { type: String, enum: ['Health', 'Intelligence', 'Wisdom', 'Strength', 'Charisma'], required: true },
    completed: {type: Boolean, default: false }
});

const Habit = mongoose.model('Habit', habitSchema);
module.exports = Habit;