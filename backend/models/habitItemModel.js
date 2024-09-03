const mongoose = require('mongoose');

const habitItemSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, default: "" },
    type: { type: String, enum: ['Health', 'Intelligence', 'Wisdom', 'Strength', 'Charisma'], required: true },
    username: { type: String, required: true, unique: true}
});

const habitItem = new mongoose.model('Habit item', habitItemSchema);
modules.export = habitItem;