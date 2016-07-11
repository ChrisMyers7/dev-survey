angular.module('dev-survey')
  .controller('adminHomeCtrl', function($scope, $state, surveyService, userService) {

    $scope.surveyId = '';

    $scope.surveys = []

    function getSurveys() {
      surveyService.getSurveys().then(function(response) {
        $scope.surveys = response.data;
      })
    }

    getSurveys();

    $scope.hideModal = '';

    $scope.users = [];

    $scope.displayModal = function(survey_id) {
      $scope.hideModal = !$scope.hideModal;
      if ($scope.hideModal) {
        $scope.surveyId = survey_id;
        userService.getUsers().then(function(response) {
          $scope.users = response.data;
          for (var i = 0; i < $scope.users.length; i++) {
            $scope.users[i].checked = '';
          }
        })
      }
    }

    $scope.sendSurvey = function() {
      var userIds = [];
      for (var i = 0; i < $scope.users.length; i++) {
        if ($scope.users[i].checked === true) {
          userIds.push($scope.users[i]._id);
        }
      }
      userService.sendSurvey(userIds, $scope.surveyId).then(function(response) {
        
      })
      $state.go('adminHome');
    }



  })
