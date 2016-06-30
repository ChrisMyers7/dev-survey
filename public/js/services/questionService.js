angular.module('dev-survey')
  .service('questionService', function($http) {

    this.addYesOrNo = function() {
      return $http({
        method: 'POST',
        url: 'http://localhost:3000/api/yesOrNoQuestions',
        data: {
          question: 'is school good?',
          mustAnswer: 'yes'
        }
      })
    }

    this.multipleChoice = function() {
      return $http({
        method: 'POST',
        url: 'http://localhost:3000/api/multipleChoiceQuestions',
        data: {
          question: 'is school good?',
          mustAnswer: 'no',
          options: ['dasdfadsfsd', 'dasdfasdfafasd', 'asdfasdfdd']
        }
      })
    }

    this.ranking = function() {
      return $http({
        method: 'POST',
        url: 'http://localhost:3000/api/rankingQuestions',
        data: {
          question: 'is school good?',
          mustAnswer: 'no',
          rankings: ['dasdfadsfsd', 'dasdfasdfafasd', 'asdfasdfdd']
        }
      })
    }

    this.textField = function() {
      return $http({
        method: 'POST',
        url: 'http://localhost:3000/api/textFieldQuestions',
        data: {
          question: 'is school good?',
          mustAnswer: 'no',
          text: 'Hello i am chris'
        }
      })
    }

  })
