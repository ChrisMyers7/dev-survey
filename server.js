// node packages
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
mongoose.Promise = require('bluebird')

// controllers
const completedSurveyCtrl = require('./controllers/completedSurveyCtrl')
const surveyCtrl = require('./controllers/surveyCtrl');
const userCtrl = require('./controllers/userCtrl')
const yesOrNoCtrl = require('./controllers/yesOrNoCtrl')
const multipleChoiceCtrl = require('./controllers/multipleChoiceCtrl')
const rankingCtrl = require('./controllers/rankingCtrl')
const textFieldCtrl = require('./controllers/textFieldCtrl')

// initialization of express app and mongoose
const app = express();
mongoose.connect('mongodb://root/dev-survey');

// enabaling cross origin requests
const corsOptions = {
  origin: 'http://104.131.80.131/:80'
}

app.use(bodyParser.json());
app.use(cors(corsOptions));
app.use(express.static(__dirname + '/public'))

// users endpoints
app.get('/api/users', userCtrl.index);
app.get('/api/users/:id', userCtrl.show)
app.post('/api/users', userCtrl.create);
app.put('/api/users', userCtrl.update);

// surveys endpoints
app.get('/api/surveys', surveyCtrl.index);
app.get('/api/surveys/:id', surveyCtrl.show);
app.post('/api/surveys', surveyCtrl.create);
app.put('/api/surveys/:id', surveyCtrl.update);
app.delete('/api/surveys/:id', surveyCtrl.delete);

// completedSurvey endpoints
app.get('/api/completedSurvey', completedSurveyCtrl.index);
app.put('/api/completedSurvey', completedSurveyCtrl.update);

// yes or no Question endpoints
app.get('/api/yesOrNoQuestions', yesOrNoCtrl.index);
app.post('/api/yesOrNoQuestions', yesOrNoCtrl.create)

// multiple choice Question endpoints
app.get('/api/multipleChoiceQuestions', multipleChoiceCtrl.index);
app.post('/api/multipleChoiceQuestions', multipleChoiceCtrl.create)

// ranking Question endpoints
app.get('/api/rankingQuestions', rankingCtrl.index);
app.post('/api/rankingQuestions', rankingCtrl.create)

// Text Field Question endpoints
app.get('/api/textFieldQuestions', textFieldCtrl.index);
app.post('/api/textFieldQuestions', textFieldCtrl.create)

const port = 80;
app.listen(port, function() {
  console.log('Hey!! Listening... port: ' + port)
})
