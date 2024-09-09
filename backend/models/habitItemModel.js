const mongoose = require('mongoose');

const habitItemSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, default: "" },
    type: { type: String, enum: ['Health', 'Intelligence', 'Wisdom', 'Strength', 'Charisma'], required: true },
    userId: { type: mongoose.Schema.Types.ObjectId, required: true },
    isActive: { type: Boolean, default: true, required: true }
});

const HabitItem = mongoose.model('Habit item', habitItemSchema);
module.exports = HabitItem;