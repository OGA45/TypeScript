require('express');
export{};
const mongoose = require('mongoose');
const password_model = new mongoose.Schema({
    password: { type: String, require: true, unique: true },
    new_password: { type: String, require: true },
});
module.exports = mongoose.model('Pass', password_model);
