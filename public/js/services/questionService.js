angular.module('dev-survey')
  .service('questionService', function($http) {

    this.yesOrNo = function(question) {
      return $http({
        method: 'POST',
        url: 'http://localhost:80/api/yesOrNoQuestions',
        data: question
      })
    }

    this.multipleChoice = function(question) {
      return $http({
        method: 'POST',
        url: 'http://localhost:80/api/multipleChoiceQuestions',
        data: question
      })
    }

    this.ranking = function(question) {
      return $http({
        method: 'POST',
        url: 'http://localhost:80/api/rankingQuestions',
        data: question
      })
    }

    this.textField = function(question) {
      return $http({
        method: 'POST',
        url: 'http://localhost:80/api/textFieldQuestions',
        data: question
      })
    }

  })
