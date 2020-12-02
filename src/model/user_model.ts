require('express');
export{};
const mongoose = require('mongoose');
const user_model = new mongoose.Schema({
    email: { type: String, require: true, unique: true },
    password: { type: String, require: true },
});
module.exports = mongoose.model('User', user_model);
