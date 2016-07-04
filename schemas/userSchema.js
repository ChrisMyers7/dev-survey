var mongoose = require('mongoose');

var Schema = mongoose.Schema
ObjectId = Schema.ObjectId

var userSchema = new Schema({
  first_name: {type: String, required: true},
  last_name: {type: String, required: true},
  company_name: {type: String},
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {type: String, required: true, minlength: 6},
  surveys: [{type: String, ref: 'Surveys'}]
})

module.exports =  userSchema;
