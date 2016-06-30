var mongoose = require('mongoose');
var multipleChoiceSchema = require('../schemas/multipleChoiceSchema');

module.exports = mongoose.model('MultipleChoice', multipleChoiceSchema)
