var mongoose = require('mongoose');
var yesOrNoSchema = require('./yesOrNoSchema')
var multipleChoiceSchema = require('./multipleChoiceSchema')
var rankingSchema = require('./rankingSchema')
var textFieldSchema = require('./textFieldSchema')

var surveySchema = new mongoose.Schema({
  survey_name: {type: String, required: true},
  yesOrNo_questions: {type: String, ref: 'yesOrNo'},
  multipleChoice_questions: {type: String, ref: 'multipleChoice'},
  ranking_questions: {type: String, ref: 'ranking'},
  textField_questions: {type: String, ref: 'textField'},
})

module.exports = surveySchema;
