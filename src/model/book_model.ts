require('express');
export{};
const mongoose = require('mongoose');
const book_model = new mongoose.Schema({
    title: { type: String, require: true},
    tags: { type: String, require: true },
});
module.exports = mongoose.model('Book', book_model);
