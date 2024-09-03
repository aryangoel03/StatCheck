const mongoose = require('mongoose');
const dateSchema = require('./dateModel').schema;

const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true, match: /.+\@.+\..+/},
    password: { type: String,required: true, minlength: 8, select: false },
    createdAt: { type: Date, default: Date.now, immutable: true },
    dates: [dateSchema]
});

const User = mongoose.model('User', userSchema);
module.exports = User;
