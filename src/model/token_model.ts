require('express');
export{};
const mongoose = require('mongoose');
const token_model = new mongoose.Schema({
    email: { type: String, require: true, unique: true },
    token: { type: String, require: true, unique: true },
});
module.exports = mongoose.model('Token', token_model);
