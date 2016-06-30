var mongoose = require('mongoose');

var multipleChoiceSchema = new mongoose.Schema({
  question: {type: String, required: true},
  mustAnswer: {type: String, required: true},
  text: {type: String}
})

module.exports = multipleChoiceSchema;
