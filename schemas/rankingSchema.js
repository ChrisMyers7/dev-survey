var mongoose = require('mongoose');

var rankingChoiceSchema = new mongoose.Schema({
  question: {type: String, required: true},
  // requireAnswer: {type: String, required: true},
  ranking1: {type: String},
  ranking2: {type: String},
  ranking3: {type: String},
  ranking4: {type: String}
})

module.exports = rankingChoiceSchema;
