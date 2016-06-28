angular.module('dev-survey', ['ui.router'])
  .config(["$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: '../views/home.html',
        controller: 'homeCtrl'
      })
      .state('login', {
        url: '/login',
        templateUrl: '../views/login.html',
        controller: 'loginCtrl'
      })
      .state('register', {
        url: '/register',
        templateUrl: '../views/register.html',
        controller: 'registerCtrl'
      })
      .state('adminHome', {
        url: '/adminhome',
        templateUrl: '../views/admin-home.html',
        controller: 'adminHomeCtrl'
      })
      .state('createSurvey', {
        url: '/createsurvey',
        templateUrl: '../views/create-survey.html',
        controller: 'createSurveyCtrl'
      })
      .state('adminDisplaySurvey', {
        url: '/admindisplaysurvey',
        templateUrl: '../views/admin-display-survey.html',
        controller: 'adminDisplaySurveyCtrl'
      })
      .state('userHome', {
        url: '/userhome',
        templateUrl: '../views/user-home.html',
        controller: 'userHomeCtrl'
      })
      .state('completeSurvey', {
        url: '/completesurvey',
        templateUrl: '../views/complete-survey.html',
        controller: 'completeSurveyCtrl'
      })


      $urlRouterProvider.otherwise('/')

  }])

angular.module('dev-survey')
  .controller('adminDisplaySurveyCtrl', ["$scope", function($scope) {

    $scope.test = 'adminDisplaySurveyCtrl'

  }])

angular.module('dev-survey')
  .controller('adminHomeCtrl', ["$scope", function($scope) {

    $scope.test = 'adminHomesCtrl'

  }])

angular.module('dev-survey')
  .controller('completeSurveyCtrl', ["$scope", function($scope) {

    $scope.test = 'completeSurveyCtrl'

  }])

angular.module('dev-survey')
  .controller('createSurveyCtrl', ["$scope", "$sce", function($scope, $sce) {

    $scope.survey = [];

    $scope.yesOrNo = function() {
      $scope.survey.push({
        template: $sce.trustAsHtml('<input placeholder="question"> <input type="checkbox">Yes<br> <input type="checkbox">no<br>')
      })
    }

    $scope.multipleChoice = function() {
      $scope.survey.push({
        template: $sce.trustAsHtml('<input placeholder="question"> <input type="text" placeholder="Option 1"> <input type="text" placeholder="Option 2"> <input type="text" placeholder="Option 3"><input type="text" placeholder="Option 4">')
      })
    }

    $scope.dropdown = function() {
      $scope.survey.push({

      })
    }

    $scope.ranking = function() {
      $scope.survey.push({
        template: $sce.trustAsHtml('<input placeholder="question"> <input type="text" placeholder="Option 1"> <input type="text" placeholder="Option 2"> <input type="text" placeholder="Option 3"><input type="text" placeholder="Option 4">')
      })
    }

    $scope.textField = function() {
      $scope.survey.push({

      })
    }



  }])

angular.module('dev-survey')
  .controller('homeCtrl', ["$scope", function($scope) {

    $scope.test = 'homeCtrl'

  }])

angular.module('dev-survey')
  .controller('loginCtrl', ["$scope", function($scope) {

    $scope.test = 'loginCtrl'

  }])

angular.module('dev-survey')
  .controller('registerCtrl', ["$scope", function($scope) {

    $scope.test = 'registerCtrl'

  }])

angular.module('dev-survey')
  .controller('userHomeCtrl', ["$scope", function($scope) {

    $scope.test = 'userHomeCtrl'

  }])
