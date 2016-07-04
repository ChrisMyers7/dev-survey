angular.module('dev-survey')
  .controller('adminHomeCtrl', function($scope, surveyService, userService) {

    $scope.hideModal = '';

    $scope.users = [];

    $scope.displayModal = function() {
      $scope.hideModal = !$scope.hideModal;
      if ($scope.hideModal) {
        userService.getUsers().then(function(response) {
          $scope.users = response.data;
        })
      }
    }

    $scope.surveys = []

    function getSurveys() {
      surveyService.getSurveys().then(function(response) {
        $scope.surveys = response.data;
      })
    }

    getSurveys()

  })
