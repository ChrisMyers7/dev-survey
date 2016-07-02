var mongoose = require('mongoose');

var yesOrNoSchema = new mongoose.Schema({
  question: {type: String, required: true},
  requireAnswer: {type: String, required: true}
})

module.exports = yesOrNoSchema;
