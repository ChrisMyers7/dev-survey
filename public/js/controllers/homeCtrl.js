angular.module('dev-survey')
  .controller('homeCtrl', function($scope, $state, userService) {

        // these toggle the login and register modals
    $scope.loginClick = '';

    $scope.registerClick = '';

    $scope.toggleLogin = function() {
      $scope.loginClick = !$scope.loginClick;
    }

    $scope.toggleRegister = function() {
      $scope.registerClick = !$scope.registerClick;
    }

    // login function including api call and staging user
    $scope.login = function(email, password) {
      var loginUser = {
        email: email,
        password: password
      }
      userService.loginUser(loginUser).then(function(response) {
        var user = response.data;
        if (user[0].password === loginUser.password) {
          userService.currentUser = user[0];
          $state.go('userHome')
        } else {
          prompt('Incorrect Password');
        }

      })
    }

    // saving the user in the data base and sending them to the appropriate page
    $scope.saveUser = function(user) {
      userService.registerUser(user).then(function(response) {
        $state.go('userHome')
      })


    }


  })
