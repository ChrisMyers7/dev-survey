angular.module('dev-survey')
  .controller('userHomeCtrl', function($scope, userService, surveyService) {

    $scope.modalToggle = '';

    function getUserSurveys() {
      // var id = userService.currentUser._id;
      var id = "577d2254d29d1c34157c1b13";
      userService.getUserSurveys(id).then(function(response) {
        $scope.surveys = response.data.surveys
      })
    }

    getUserSurveys()

    $scope.takeSurvey = function(index) {
      $scope.modalToggle = !$scope.modalToggle;
      if ($scope.modalToggle) {
        surveyService.getOneSurvey($scope.surveys[index]._id).then(function(response) {
          $scope.yesOrNoQuestions = response.data.yesOrNo_questions;
          $scope.multipleChoiceQuestions = response.data.multipleChoice_questions;
          $scope.rankingQuestions = response.data.ranking_questions;
          $scope.textFieldQuestions = response.data.textField_questions;
        })
      }
    }

  })
