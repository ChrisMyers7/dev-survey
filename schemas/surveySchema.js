var mongoose = require('mongoose');
// var yesOrNoSchema = require('./yesOrNoSchema')
// var multipleChoiceSchema = require('./multipleChoiceSchema')
// var rankingSchema = require('./rankingSchema')
// var textFieldSchema = require('./textFieldSchema')

var Schema = mongoose.Schema
ObjectId = Schema.ObjectId

var surveySchema = new Schema({
  survey_name: {type: String, required: true},
  yesOrNo_questions: [{type: ObjectId, ref: 'yesOrNo'}],
  multipleChoice_questions: [{type: ObjectId, ref: 'multipleChoice'}],
  ranking_questions: [{type: ObjectId, ref: 'ranking'}],
  textField_questions: [{type: ObjectId, ref: 'textField'}],
})

module.exports = surveySchema;
