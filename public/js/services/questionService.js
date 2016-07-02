angular.module('dev-survey')
  .service('questionService', function($http) {

    this.yesOrNo = function(question) {
      return $http({
        method: 'POST',
        url: 'http://localhost:3000/api/yesOrNoQuestions',
        data: question
      })
    }

    this.multipleChoice = function(question) {
      return $http({
        method: 'POST',
        url: 'http://localhost:3000/api/multipleChoiceQuestions',
        data: question
      })
    }

    this.ranking = function(question) {
      return $http({
        method: 'POST',
        url: 'http://localhost:3000/api/rankingQuestions',
        data: question
      })
    }

    this.textField = function(question) {
      return $http({
        method: 'POST',
        url: 'http://localhost:3000/api/textFieldQuestions',
        data: question
      })
    }

  })
