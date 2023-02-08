const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: {
        type: String,
        select: false
    },
    avatar: String
})

module.exports = mongoose.model('User', userSchema);