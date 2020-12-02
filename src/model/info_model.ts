require('express');
export{};
const mongoose = require('mongoose');
const info_model = new mongoose.Schema({

});
module.exports = mongoose.model('Info', info_model);
