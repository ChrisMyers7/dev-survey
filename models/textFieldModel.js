var mongoose = require('mongoose');
var textFieldSchema = require('../schemas/textFieldSchema');

module.exports = mongoose.model('TextField', textFieldSchema)
