angular.module('dev-survey')
  .controller('createSurveyCtrl', function($scope, $sce, questionService, surveyService) {

    $scope.survey = [];

    $scope.yesOrNo_questions = [];

    $scope.multipleChoice_questions = [];

    $scope.ranking_questions = [];

    $scope.textField_questions = [];

    $scope.savedSurvey = function() {
      surveyService.addSurvey($scope.surveyName, $scope.yesOrNo_questions, $scope.multipleChoice_questions, $scope.ranking_questions, $scope.textField_questions)
    }

    $scope.saveSurvey = function() {
      surveyService.addSurvey($scope.savedSurvey).then(function(response) {
        console.log(response);
      })
    }

    $scope.yesOrNo = function() {
      $scope.survey.push({
        template: $sce.trustAsHtml( '<div class="question-type">Yes/No</div>' +
                                    '<input class="yesorno-question" ng-model="yesOrNoQuestion.question" placeholder="question">' +
                                    '<input class="yesorno-answer-require"ng-model="yesOrNoQuestion.requireAnswer" placeholder="Require an Answer">' +
                                    '<button ng-click="save(yesOrNoQuestion)">Save</button>'
                                  )
      })
    }

    $scope.multipleChoice = function() {
        $scope.survey.push({
          template: $sce.trustAsHtml( '<div class="question-type">Multiple Choice</div>' +
                                      '<input placeholder="question" ng-model="multipleChoiceQuestion.question">' +
                                      '<input type="text" placeholder="Require Answer?" ng-model="multipleChoiceQuestion.requireAnswer">' +
                                      '<input type="text" placeholder="Option 1" ng-model="multipleChoiceQuestion.option1">' +
                                      '<input type="text" placeholder="Option 2" ng-model="multipleChoiceQuestion.option2">' +
                                      '<input type="text" placeholder="Option 3" ng-model="multipleChoiceQuestion.option3">' +
                                      '<input type="text" placeholder="Option 4" ng-model="multipleChoiceQuestion.option4">' +
                                      '<button ng-click="save(multipleChoiceQuestion)">save</button>'
                                    )
        })
    }

    $scope.ranking = function() {
        $scope.survey.push({
          template: $sce.trustAsHtml( '<div class="question-type">Ranking</div>' +
                                      '<input placeholder="question" ng-model="rankingQuestion.question">' +
                                      '<input type="text" placeholder="Require Answer?" ng-model="rankingQuestion.requireAnswer">' +
                                      '<input type="text" placeholder="Rank 1" ng-model="rankingQuestion.ranking1">' +
                                      '<input type="text" placeholder="Rank 2" ng-model="rankingQuestion.ranking2">' +
                                      '<input type="text" placeholder="Rank 3" ng-model="rankingQuestion.ranking3">' +
                                      '<input type="text" placeholder="Rank 4" ng-model="rankingQuestion.ranking4">' +
                                      '<button ng-click="save(rankingQuestion)">save</button>'
                                    )
        })
    }

    $scope.textField = function() {
        $scope.survey.push({
          template: $sce.trustAsHtml( '<div class="question-type">Text Field</div>' +
                                      '<input placeholder="question" ng-model="textFieldQuestion.textQuestion">' +
                                      '<input type="text" placeholder="Require Answer?" ng-model="textFieldQuestion.requireAnswer">' +
                                      '<button ng-click="save(textFieldQuestion)">save</button>'
                                    )
        })
    }

    $scope.save = function(question) {
      if (question.option1) {
        questionService.multipleChoice(question).then(function(response) {
          $scope.multipleChoice_questions.push(response.data._id);
        })
      } else if (question.ranking1) {
        questionService.ranking(question).then(function(response) {
          $scope.ranking_questions.push(response.data._id);
        })
      } else if (question.textQuestion) {
        question.text = ''
        questionService.textField(question).then(function(response) {
          $scope.textField_questions.push(response.data._id);
        })
      } else if (question) {
        questionService.yesOrNo(question).then(function(response) {
          $scope.yesOrNo_questions.push(response.data._id);
        })
      }

    }

  })
