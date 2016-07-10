var mongoose = require('mongoose');

var multipleChoiceSchema = new mongoose.Schema({
  textQuestion: {type: String, required: true},
  // requireAnswer: {type: String, required: true},
  text: {type: String}
})

module.exports = multipleChoiceSchema;
