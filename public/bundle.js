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
  .controller('createSurveyCtrl', ["$scope", "$sce", "questionService", function($scope, $sce, questionService) {

    $scope.survey = [];

    $scope.savedSurvey = {
      survey_name: $scope.survey_name,
      yesOrNo_questions: [],
      multipleChoice_questions: [],
      ranking_questions: [],
      textField_questions: []
    }

    $scope.yesOrNo = function() {
      $scope.survey.push({
        template: $sce.trustAsHtml('<input ng-model="question.question" placeholder="question"> <button ng-click="save(survey)">save</button>')
      })
    }

    $scope.save = function(e) {
      console.log(e);
      questionService.addYesOrNo($scope.question).then(function(response) {
        $scope.savedSurvey.yesOrNo_questions.push(response.data._id);
        console.log(response);
      })

    }

    $scope.multipleChoice = function() {
      questionService.multipleChoice().then(function(response) {
        console.log(response);
        $scope.survey.push({
          template: $sce.trustAsHtml('<input placeholder="question"> <input type="text" placeholder="Option 1"> <input type="text" placeholder="Option 2"> <input type="text" placeholder="Option 3"><input type="text" placeholder="Option 4">'),
          _id: response.data._id
        })
        console.log($scope.survey);
      })

    }

    $scope.ranking = function() {
      questionService.ranking().then(function(response) {
        console.log(response);
        $scope.survey.push({
          template: $sce.trustAsHtml('<input placeholder="question"> <input type="text" placeholder="Input 1"> <input type="text" placeholder="Input 2"> <input type="text" placeholder="Input 3"><input type="text" placeholder="Input 4">'),
          _id: response.data._id
        })
        console.log($scope.survey);
      })

    }

    $scope.textField = function() {
      questionService.textField().then(function(response) {
        console.log(response);
        $scope.survey.push({
          template: $sce.trustAsHtml('<input placeholder="question"> '),
          _id: response.data._id
        })
        console.log($scope.survey);
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

angular.module('dev-survey')
  .directive('yesOrNoDirective', function() {
    return {
      restrict: 'E',
      templateUrl: '../templates/yesOrNoTmpl.html' 
    }
  })

angular.module('dev-survey')
  .service('questionService', ["$http", function($http) {

    this.addYesOrNo = function() {
      return $http({
        method: 'POST',
        url: 'http://localhost:3000/api/yesOrNoQuestions',
        data: {
          question: 'is school good?',
          mustAnswer: 'yes'
        }
      })
    }

    this.multipleChoice = function() {
      return $http({
        method: 'POST',
        url: 'http://localhost:3000/api/multipleChoiceQuestions',
        data: {
          question: 'is school good?',
          mustAnswer: 'no',
          options: ['dasdfadsfsd', 'dasdfasdfafasd', 'asdfasdfdd']
        }
      })
    }

    this.ranking = function() {
      return $http({
        method: 'POST',
        url: 'http://localhost:3000/api/rankingQuestions',
        data: {
          question: 'is school good?',
          mustAnswer: 'no',
          rankings: ['dasdfadsfsd', 'dasdfasdfafasd', 'asdfasdfdd']
        }
      })
    }

    this.textField = function() {
      return $http({
        method: 'POST',
        url: 'http://localhost:3000/api/textFieldQuestions',
        data: {
          question: 'is school good?',
          mustAnswer: 'no',
          text: 'Hello i am chris'
        }
      })
    }

  }])
