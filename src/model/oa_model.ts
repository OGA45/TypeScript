require('express');
export{};
const mongoose = require('mongoose');
const oa_model = new mongoose.Schema({
    oa_datetime: { type: Date, require: true},
    class_name: { type: String, require: true },
    reason: { type: String, require: true },

});
module.exports = mongoose.model('Oa', oa_model);
