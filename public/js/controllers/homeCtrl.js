angular.module('dev-survey')
  .controller('homeCtrl', function($scope, $state, userService) {

    $scope.loginClick = '';

    $scope.registerClick = '';

    $scope.toggleLogin = function() {
      $scope.loginClick = !$scope.loginClick;
    }

    $scope.toggleRegister = function() {
      $scope.registerClick = !$scope.registerClick;
    }

    $scope.login = function(email, password) {
      var loginUser = {
        email: email,
        password: password
      }
      userService.loginUser(loginUser).then(function(response) {
        var user = response.data;
        console.log(user[0]);
        if (user[0].password === loginUser.password) {
          userService.currentUser = user[0];
          $state.go('userHome')
        } else {
          prompt('Incorrect Password');
        }

      })
    }

    $scope.saveUser = function(user) {
      userService.registerUser(user).then(function(response) {
        console.log(response);
      })

      $state.go('userHome')
    }


  })
