var mongoose = require('mongoose');

var multipleChoiceSchema = new mongoose.Schema({
  question: {type: String, required: true},
  mustAnswer: {type: String, required: true},
  options: [{type: String}]
})

module.exports = multipleChoiceSchema;
