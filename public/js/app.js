angular.module('dev-survey', ['ui.router'])
  .config(function($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: './views/home.html',
        controller: 'homeCtrl'
      })
      .state('admin', {
        url: '/admin',
        templateUrl: './views/admin.html',
        controller: 'adminCtrl'
      })
      .state('createUser', {
        url: '/createUser',
        templateUrl: './views/new-user.html',
        controller: 'createUserCtrl'
      })
      .state('login', {
        url: '/login',
        templateUrl: './views/login.html',
        controller: 'loginCtrl'
      })


      $urlRouterProvider.otherwise('/')

  })
