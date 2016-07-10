var mongoose = require('mongoose');

var multipleChoiceSchema = new mongoose.Schema({
  question: {type: String, required: true},
  // requireAnswer: {type: String, required: true},
  option1: {type: String},
  option2: {type: String},
  option3: {type: String},
  option4: {type: String}
})

module.exports = multipleChoiceSchema;
