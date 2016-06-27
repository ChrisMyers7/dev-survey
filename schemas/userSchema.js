var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
  first_name: {type: String, required: true},
  last_name: {type: String, required: true},
  username: {
    type: String,
    unique: true,
    required: true,
    maxlength: 20
  },
  password: {type: String, required: true},
  surveys: [{type: String, ref: 'Surveys'}]
})

module.exports =  userSchema;
