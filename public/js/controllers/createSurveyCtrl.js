angular.module('dev-survey')
  .controller('createSurveyCtrl', function($scope, $sce, $state, questionService, surveyService) {

    $scope.survey = [];

    $scope.yesOrNo_questions = [];

    $scope.multipleChoice_questions = [];

    $scope.ranking_questions = [];

    $scope.textField_questions = [];

    $scope.savedSurvey = function() {
      surveyService.addSurvey($scope.surveyName, $scope.yesOrNo_questions, $scope.multipleChoice_questions, $scope.ranking_questions, $scope.textField_questions);
      $state.go('adminHome');
    }

    $scope.saveSurvey = function() {
      surveyService.addSurvey($scope.savedSurvey).then(function(response) {
        console.log(response);
      })
    }

    $scope.yesOrNo = function() {
      $scope.survey.push({
        template: $sce.trustAsHtml( '<div class="question-type yesorno-individual">Yes/No:</div>' +
                                    '<div class="question-wrapper"><input class="yesorno-question" ng-model="yesOrNoQuestion.question" placeholder="What question would you like to ask?"></div>' +
                                    // '<div class="answer-require-wrapper">Would you like to require this answer?<input class="answer-require" type="checkbox" ng-model="yesOrNoQuestion.requireAnswer" ></div>' +
                                    '<div class="save-button-wrapper"><button ng-click="save(yesOrNoQuestion, $index)">Save</button></div>'
                                  )
      })
    }

    $scope.multipleChoice = function() {
        $scope.survey.push({
          template: $sce.trustAsHtml( '<div class="question-type">Multiple Choice:</div>' +
                                      '<div class="question-wrapper"><input class="multipleChoice-question" ng-model="multipleChoiceQuestion.question" placeholder="What question would you like to ask?"></div>' +
                                      // '<input type="text" placeholder="Require Answer?" ng-model="multipleChoiceQuestion.requireAnswer">' +
                                      '<div class="option-header">Options:</div>' +
                                      '<div class="option-wrapper"><input type="text" placeholder="Option 1" ng-model="multipleChoiceQuestion.option1">' +
                                      '<input type="text" placeholder="Option 2" ng-model="multipleChoiceQuestion.option2"></div>' +
                                      '<div class="option-wrapper"><input type="text" placeholder="Option 3" ng-model="multipleChoiceQuestion.option3">' +
                                      '<input type="text" placeholder="Option 4" ng-model="multipleChoiceQuestion.option4"></div>' +
                                      '<div class="save-button-wrapper"><button ng-click="save(multipleChoiceQuestion, $index)">Save</button></div>'
                                    )
        })
    }

    $scope.ranking = function() {
        $scope.survey.push({
          template: $sce.trustAsHtml( '<div class="question-type">Ranking:</div>' +
                                      '<div class="question-wrapper"><input placeholder="What question would you like to ask?" ng-model="rankingQuestion.question"></div>' +
                                      // '<input type="text" placeholder="Require Answer?" ng-model="rankingQuestion.requireAnswer">' +
                                      '<div class="option-header">Rankings:</div>' +
                                      '<div class="option-wrapper"><input type="text" placeholder="Rank 1" ng-model="rankingQuestion.ranking1">' +
                                      '<input type="text" placeholder="Rank 2" ng-model="rankingQuestion.ranking2"></div>' +
                                      '<div class="option-wrapper"><input type="text" placeholder="Rank 3" ng-model="rankingQuestion.ranking3">' +
                                      '<input type="text" placeholder="Rank 4" ng-model="rankingQuestion.ranking4"></div>' +
                                      '<div class="save-button-wrapper"><button ng-click="save(rankingQuestion, $index)">Save</button></div>'
                                    )
        })
    }

    $scope.textField = function() {
        $scope.survey.push({
          template: $sce.trustAsHtml( '<div class="question-type yesorno-individual">Text Field:</div>' +
                                      '<div class="question-wrapper"><input placeholder="What question would you like to ask?" ng-model="textFieldQuestion.textQuestion"></div>' +
                                      // '<input type="text" placeholder="Require Answer?" ng-model="textFieldQuestion.requireAnswer">' +
                                      '<div class="save-button-wrapper"><button ng-click="save(textFieldQuestion, $index)">Save</button></div>'
                                    )
        })
    }

    $scope.save = function(question, e) {
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
      $scope.survey.splice(e, 1)
    }

  })
