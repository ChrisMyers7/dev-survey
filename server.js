var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var mongoose = require('mongoose');


var app = express();
mongoose.connect('mongodb://localhost/dev-survey');

var corsOptions = {
  origin: 'http://localhost:3000'
}

app.use(bodyParser.json());
app.use(cors(corsOptions));
app.use(express.static(__dirname + '/public'))






var port = 3000
app.listen(port, function() {
  console.log('Hey!! Listening... port: ' + port)
})
