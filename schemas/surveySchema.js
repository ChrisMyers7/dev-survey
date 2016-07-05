var mongoose = require('mongoose');

var Schema = mongoose.Schema
ObjectId = Schema.ObjectId

var surveySchema = new Schema({
  survey_name: {type: String},
  yesOrNo_questions: [{type: String, ref: 'YesOrNo'}],
  multipleChoice_questions: [{type: String, ref: 'MultipleChoice'}],
  ranking_questions: [{type: String, ref: 'Ranking'}],
  textField_questions: [{type: String, ref: 'TextField'}],
})

module.exports = surveySchema;
