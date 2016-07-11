angular.module('dev-survey')
  .service('userService', function($http) {

    this.currentUser = ''

    this.registerUser = function(user) {
      return $http({
        method: 'POST',
        url: 'http://104.131.80.131:80/api/users',
        data: user
      })
    }

    this.loginUser = function(loginUser) {
      console.log(loginUser);
      return $http({
        method: 'GET',
        url: 'http://104.131.80.131:80/api/users/' + loginUser.email + "?password=" + loginUser.password
      })
    }

    this.getUsers = function() {
      return $http({
        method: 'GET',
        url: 'http://104.131.80.131:80/api/users'
      })
    }

    this.sendSurvey = function(userIds, surveyId) {
      console.log(userIds, surveyId);
      return $http({
        method: 'PUT',
        url: 'http://104.131.80.131:80/api/users?surveyid=' + surveyId,
        data: userIds
      })
    }

    this.getUserSurveys = function(userId) {
      return $http({
        method: 'GET',
        url: 'http://104.131.80.131:80/api/users/' + userId
      })
    }

  })
