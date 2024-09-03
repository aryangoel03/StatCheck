const mongoose = require('mongoose');
const habitSchema = require('./habitModel').schema;

const dateSchema = new mongoose.Schema({
    date: { type: Date, required: true },
    habits: [habitSchema]
});

const DateModel = mongoose.model('Date', dateSchema);
module.exports = DateModel;