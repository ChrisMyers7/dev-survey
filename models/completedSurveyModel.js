var mongoose = require('mongoose');
var completedSurveySchema = require('../schemas/completedSurveySchema');

module.exports = mongoose.model('CompletedSurvey', completedSurveySchema)
