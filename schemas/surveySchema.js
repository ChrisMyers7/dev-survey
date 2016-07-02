var mongoose = require('mongoose');

var Schema = mongoose.Schema
ObjectId = Schema.ObjectId

var surveySchema = new Schema({
  survey_name: {type: String},
  yesOrNo_questions: [{type: String, ref: 'yesOrNo'}],
  multipleChoice_questions: [{type: String, ref: 'multipleChoice'}],
  ranking_questions: [{type: String, ref: 'ranking'}],
  textField_questions: [{type: String, ref: 'textField'}],
})

module.exports = surveySchema;
