angular.module('dev-survey')
  .controller('createSurveyCtrl', function($scope, $sce, questionService) {

    $scope.survey = [];

    $scope.savedSurvey = {
      survey_name: $scope.survey_name,
      yesOrNo_questions: [],
      multipleChoice_questions: [],
      ranking_questions: [],
      textField_questions: []
    }

    $scope.yesOrNo = function() {
      $scope.survey.push({
        template: $sce.trustAsHtml('<input ng-model="question.question" placeholder="question"> <button ng-click="save(survey)">save</button>')
      })
    }

    $scope.save = function(e) {
      console.log(e);
      questionService.addYesOrNo($scope.question).then(function(response) {
        $scope.savedSurvey.yesOrNo_questions.push(response.data._id);
        console.log(response);
      })

    }

    $scope.multipleChoice = function() {
      questionService.multipleChoice().then(function(response) {
        console.log(response);
        $scope.survey.push({
          template: $sce.trustAsHtml('<input placeholder="question"> <input type="text" placeholder="Option 1"> <input type="text" placeholder="Option 2"> <input type="text" placeholder="Option 3"><input type="text" placeholder="Option 4">'),
          _id: response.data._id
        })
        console.log($scope.survey);
      })

    }

    $scope.ranking = function() {
      questionService.ranking().then(function(response) {
        console.log(response);
        $scope.survey.push({
          template: $sce.trustAsHtml('<input placeholder="question"> <input type="text" placeholder="Input 1"> <input type="text" placeholder="Input 2"> <input type="text" placeholder="Input 3"><input type="text" placeholder="Input 4">'),
          _id: response.data._id
        })
        console.log($scope.survey);
      })

    }

    $scope.textField = function() {
      questionService.textField().then(function(response) {
        console.log(response);
        $scope.survey.push({
          template: $sce.trustAsHtml('<input placeholder="question"> '),
          _id: response.data._id
        })
        console.log($scope.survey);
      })
    }



  })
