angular.module('dev-survey', ['ui.router'])
  .config(function($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: '../views/home.html',
        controller: 'homeCtrl'
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

  })
