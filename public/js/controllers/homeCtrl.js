angular.module('dev-survey')
  .controller('homeCtrl', function($scope, $state, userService) {

    $scope.loginClick = '';

    $scope.registerClick = '';

    $scope.toggleLogin = function() {
      if ($scope.registerClick) {
        $scope.registerClick = '';
      }
      $scope.loginClick = !$scope.loginClick;
    }

    $scope.toggleRegister = function() {
      if ($scope.loginClick) {
        $scope.loginClick = '';
      }
      $scope.registerClick = !$scope.registerClick;
    }

    // $scope.login() {
    //
    // }

    $scope.saveUser = function(user) {
      userService.registerUser(user).then(function(response) {
        console.log(response);
      })

      $state.go('userHome')
    }


  })
