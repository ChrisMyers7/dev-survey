angular.module('dev-survey')
  .service('userService', function($http) {

    this.registerUser = function(user) {
      return $http({
        method: 'POST',
        url: 'http://localhost:3000/api/users',
        data: user
      })
    }

    this.getUsers = function() {
      return $http({
        method: 'GET',
        url: 'http://localhost:3000/api/users'
      })
    }

    this.sendSurvey = function(userIds, surveyId) {
      console.log(userIds, surveyId);
      return $http({
        method: 'PUT',
        url: 'http://localhost:3000/api/users?surveyid=' + surveyId,
        data: userIds
      })
    }

    this.getUserSurveys = function(userId) {
      return $http({
        method: 'GET',
        url: 'http://localhost:3000/api/users/' + userId
      })
    }

  })