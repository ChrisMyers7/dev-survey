angular.module('dev-survey')
  .service('surveyService', function($http, $q) {

    this.getSurveys = function() {
      return $http({
        method: 'GET',
        url: 'http://104.131.80.131:80/api/surveys'
      })
    }

    this.getOneSurvey = function(surveyId) {
      return $http({
        method: 'GET',
        url: 'http://104.131.80.131:80/api/surveys/' + surveyId
      })
    }

    this.addSurvey = function(surveyName, yesOrNo, multipleChoice, ranking, textField) {
        var deffered = $q.defer();

        console.log(surveyName)

        var name = {
          survey_name: surveyName
        }

        $http({
        method: 'POST',
        url: 'http://104.131.80.131:80/api/surveys',
        data: name
      }).then(function(response) {
          objectId = response.data._id;
          for (var i = 0; i < yesOrNo.length; i++) {
            if (yesOrNo[i]) {
              var body = {
                id: yesOrNo[i]
              }
              $http({
                method: 'PUT',
                url: 'http://104.131.80.131:80/api/surveys/' + objectId + '?type=yesorno',
                data: body
              }).then(function(response) {
                console.log(response.data);
              })
            }
          }
          for (var i = 0; i < multipleChoice.length; i++) {
            if (multipleChoice[i]) {
              var body = {
                id: multipleChoice[i]
              }
              $http({
                method: 'PUT',
                url: 'http://104.131.80.131:80/api/surveys/' + objectId + '?type=multiplechoice',
                data: body
              }).then(function(response) {

              })
            }
          }
          for (var i = 0; i < ranking.length; i++) {
            if (ranking[i]) {
              var body = {
                id: ranking[i]
              }
              $http({
                method: 'PUT',
                url: 'http://104.131.80.131:80/api/surveys/' + objectId + '?type=ranking',
                data: body
              }).then(function(response) {

              })
            }
          }
          for (var i = 0; i < textField.length; i++) {
            if (textField[i]) {
              var body = {
                id: textField[i]
              }
              $http({
                method: 'PUT',
                url: 'http://104.131.80.131:80/api/surveys/' + objectId + '?type=textfield',
                data: body
              }).then(function(response) {

              })
            }
          }


        deffered.resolve(response._id)
      })

      return deffered.promise
    }
  })
