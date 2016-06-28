var mongoose = require('mongoose');

var rankingChoiceSchema = new mongoose.Schema({
  question: {type: String, required: true},
  mustAnswer: {type: String, required: true},
  rankings: [{type: String}]
})

module.exports = rankingChoiceSchema;
