angular.module('dev-survey')
  .service('questionService', function($http) {

    this.yesOrNo = function(question) {
      return $http({
        method: 'POST',
        url: '/api/yesOrNoQuestions',
        data: question
      })
    }

    this.multipleChoice = function(question) {
      return $http({
        method: 'POST',
        url: '/api/multipleChoiceQuestions',
        data: question
      })
    }

    this.ranking = function(question) {
      return $http({
        method: 'POST',
        url: '/api/rankingQuestions',
        data: question
      })
    }

    this.textField = function(question) {
      return $http({
        method: 'POST',
        url: '/api/textFieldQuestions',
        data: question
      })
    }

  })
