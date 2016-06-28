var mongoose = require('mongoose');

var yesOrNoSchema = new mongoose.Schema({
  question: {type: String, required: true},
  mustAnswer: {type: String, required: true}
})

module.exports = yesOrNoSchema;
