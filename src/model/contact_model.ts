require('express');
export{};
const mongoose = require('mongoose');
const contact_model = new mongoose.Schema({
    title: { type: String, require: true},
    content: { type: String, require: true },
});
module.exports = mongoose.model('Contact', contact_model);
