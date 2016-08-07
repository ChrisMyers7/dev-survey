angular.module('dev-survey')
  .service('userService', function($http) {

    this.currentUser = ''

    this.registerUser = function(user) {
      return $http({
        method: 'POST',
        url: '/api/users',
        data: user
      })
    }

    this.loginUser = function(loginUser) {
      console.log(loginUser);
      return $http({
        method: 'GET',
        url: '/api/users/' + loginUser.email + "?password=" + loginUser.password
      })
    }

    this.getUsers = function() {
      return $http({
        method: 'GET',
        url: '/api/users'
      })
    }

    this.sendSurvey = function(userIds, surveyId) {
      console.log(userIds, surveyId);
      return $http({
        method: 'PUT',
        url: '/api/users?surveyid=' + surveyId,
        data: userIds
      })
    }

    this.getUserSurveys = function(userId) {
      return $http({
        method: 'GET',
        url: '/api/users/' + userId
      })
    }

  })
