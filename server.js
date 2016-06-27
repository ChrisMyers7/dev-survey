// node packages
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var mongoose = require('mongoose');

// controllers
var completedSurveyCtrl = require('./controllers/completedSurveyCtrl')
var surveyCtrl = require('./controllers/surveyCtrl');
var userCtrl = require('./controllers/userCtrl')

// models/collections
var CompletedSurveyModel = require('./models/completedSurveyModel')
var SurveyModel = require('./models/surveyModel')
var UserModel = require('./models/userModel')

// initialization of express app
var app = express();
mongoose.connect('mongodb://localhost/dev-survey');

// enabaling cross origin requests
var corsOptions = {
  origin: 'http://localhost:3000'
}

app.use(bodyParser.json());
app.use(cors(corsOptions));
app.use(express.static(__dirname + '/public'))

// users endpoints
app.get('/users', userCtrl.index);
app.post('/users', userCtrl.create);
app.put('/users', userCtrl.update);

// surveys endpoints
app.get('/surveys', surveyCtrl.index);
app.get('/surveys/:id', surveyCtrl.show);
app.post('/surveys', surveyCtrl.create);
app.put('/surveys/:id', surveyCtrl.update);
app.delete('/surveys/:id', surveyCtrl.delete);

// completedSurvey endpoints
app.get('/completedSurvey', completedSurveyCtrl.index);
app.put('/completedSurvey', completedSurveyCtrl.update);

var port = 3000
app.listen(port, function() {
  console.log('Hey!! Listening... port: ' + port)
})
