var mongoose = require('mongoose');
var surveySchema = require('../schemas/surveySchema');

module.exports = mongoose.model('Surverys', surveySchema)
