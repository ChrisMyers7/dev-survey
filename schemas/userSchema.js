var mongoose = require('mongoose');

var Schema = mongoose.Schema
ObjectId = Schema.ObjectId

var userSchema = new Schema({
  first_name: {type: String, required: true},
  last_name: {type: String, required: true},
  company_name: {type: String},
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
