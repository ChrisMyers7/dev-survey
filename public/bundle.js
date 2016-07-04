angular.module('dev-survey', ['ui.router'])
  .config(["$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider) {

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

  }])

angular.module('dev-survey')
  .controller('adminDisplaySurveyCtrl', ["$scope", function($scope) {

    $scope.test = 'adminDisplaySurveyCtrl'

  }])

angular.module('dev-survey')
  .controller('adminHomeCtrl', ["$scope", "surveyService", "userService", function($scope, surveyService, userService) {

    $scope.hideModal = '';

    $scope.users = [];

    $scope.displayModal = function() {
      $scope.hideModal = !$scope.hideModal;
      if ($scope.hideModal) {
        userService.getUsers().then(function(response) {
          $scope.users = response.data;
        })
      }
    }

    $scope.surveys = []

    function getSurveys() {
      surveyService.getSurveys().then(function(response) {
        $scope.surveys = response.data;
      })
    }

    getSurveys()

  }])

angular.module('dev-survey')
  .controller('completeSurveyCtrl', ["$scope", function($scope) {

    $scope.test = 'completeSurveyCtrl'

  }])

angular.module('dev-survey')
  .controller('createSurveyCtrl', ["$scope", "$sce", "questionService", "surveyService", function($scope, $sce, questionService, surveyService) {

    $scope.survey = [];

    $scope.yesOrNo_questions = [];

    $scope.multipleChoice_questions = [];

    $scope.ranking_questions = [];

    $scope.textField_questions = [];

    $scope.savedSurvey = function() {
      surveyService.addSurvey($scope.surveyName, $scope.yesOrNo_questions, $scope.multipleChoice_questions, $scope.ranking_questions, $scope.textField_questions)
    }

    $scope.saveSurvey = function() {
      surveyService.addSurvey($scope.savedSurvey).then(function(response) {
        console.log(response);
      })
    }

    $scope.yesOrNo = function() {
      $scope.survey.push({
        template: $sce.trustAsHtml('<input ng-model="yesOrNoQuestion.question" placeholder="question">' +
                                    '<input ng-model="yesOrNoQuestion.requireAnswer" placeholder="Require an Answer">' +
                                    '<button ng-click="save(yesOrNoQuestion)">save</button>'
                                  )
      })
    }

    $scope.multipleChoice = function() {
        $scope.survey.push({
          template: $sce.trustAsHtml('<input placeholder="question" ng-model="multipleChoiceQuestion.question">' +
                                      '<input type="text" placeholder="Require Answer?" ng-model="multipleChoiceQuestion.requireAnswer">' +
                                      '<input type="text" placeholder="Option 1" ng-model="multipleChoiceQuestion.option1">' +
                                      '<input type="text" placeholder="Option 2" ng-model="multipleChoiceQuestion.option2">' +
                                      '<input type="text" placeholder="Option 3" ng-model="multipleChoiceQuestion.option3">' +
                                      '<input type="text" placeholder="Option 4" ng-model="multipleChoiceQuestion.option4">' +
                                      '<button ng-click="save(multipleChoiceQuestion)">save</button>'
                                    )
        })
    }

    $scope.ranking = function() {
        $scope.survey.push({
          template: $sce.trustAsHtml('<input placeholder="question" ng-model="rankingQuestion.question">' +
                                      '<input type="text" placeholder="Require Answer?" ng-model="rankingQuestion.requireAnswer">' +
                                      '<input type="text" placeholder="Rank 1" ng-model="rankingQuestion.ranking1">' +
                                      '<input type="text" placeholder="Rank 2" ng-model="rankingQuestion.ranking2">' +
                                      '<input type="text" placeholder="Rank 3" ng-model="rankingQuestion.ranking3">' +
                                      '<input type="text" placeholder="Rank 4" ng-model="rankingQuestion.ranking4">' +
                                      '<button ng-click="save(rankingQuestion)">save</button>'
                                    )
        })
    }

    $scope.textField = function() {
        $scope.survey.push({
          template: $sce.trustAsHtml('<input placeholder="question" ng-model="textFieldQuestion.textQuestion">' +
                                      '<input type="text" placeholder="Require Answer?" ng-model="textFieldQuestion.requireAnswer">' +
                                      '<button ng-click="save(textFieldQuestion)">save</button>'
                                    )
        })
    }

    $scope.save = function(question) {
      if (question.option1) {
        questionService.multipleChoice(question).then(function(response) {
          $scope.multipleChoice_questions.push(response.data._id);
        })
      } else if (question.ranking1) {
        questionService.ranking(question).then(function(response) {
          $scope.ranking_questions.push(response.data._id);
        })
      } else if (question.textQuestion) {
        question.text = ''
        questionService.textField(question).then(function(response) {
          $scope.textField_questions.push(response.data._id);
        })
      } else if (question) {
        questionService.yesOrNo(question).then(function(response) {
          $scope.yesOrNo_questions.push(response.data._id);
        })
      }

    }

  }])

angular.module('dev-survey')
  .controller('homeCtrl', ["$scope", "userService", function($scope, userService) {

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
    }


  }])

angular.module('dev-survey')
  .controller('userHomeCtrl', ["$scope", function($scope) {

    $scope.test = 'userHomeCtrl'

  }])

angular.module('dev-survey')
.directive('compileTemplate', ["$compile", "$parse", function($compile, $parse){
    return {
        link: function(scope, element, attr){
            var parsed = $parse(attr.ngBindHtml);
            function getStringValue() { return (parsed(scope) || '').toString(); }

            //Recompile if the template changes
            scope.$watch(getStringValue, function() {
                $compile(element, null, -9999)(scope);  //The -9999 makes it skip directives so that we do not recompile ourselves
            });
        }
    }
}]);

angular.module('dev-survey')
  .directive('yesOrNoDirective', function() {
    return {
      restrict: 'E',
      templateUrl: '../js/templates/yesOrNoTmpl.html'
    }
  })
  

angular.module('dev-survey')
  .service('questionService', ["$http", function($http) {

    this.yesOrNo = function(question) {
      return $http({
        method: 'POST',
        url: 'http://localhost:3000/api/yesOrNoQuestions',
        data: question
      })
    }

    this.multipleChoice = function(question) {
      return $http({
        method: 'POST',
        url: 'http://localhost:3000/api/multipleChoiceQuestions',
        data: question
      })
    }

    this.ranking = function(question) {
      return $http({
        method: 'POST',
        url: 'http://localhost:3000/api/rankingQuestions',
        data: question
      })
    }

    this.textField = function(question) {
      return $http({
        method: 'POST',
        url: 'http://localhost:3000/api/textFieldQuestions',
        data: question
      })
    }

  }])

angular.module('dev-survey')
  .service('surveyService', ["$http", "$q", function($http, $q) {

    this.getSurveys = function() {
      return $http({
        method: 'GET',
        url: 'http://localhost:3000/api/surveys'
      })
    }

    this.addSurvey = function(surveyName, yesOrNo, multipleChoice, ranking, textField) {
        var deffered = $q.defer();

        console.log(surveyName)

        var name = {
          survey_name: surveyName
        }

        $http({
        method: 'POST',
        url: 'http://localhost:3000/api/surveys',
        data: name
      }).then(function(response) {
          objectId = response.data._id;
          for (var i = 0; i < yesOrNo.length; i++) {
            if (yesOrNo[i]) {
              var body = {
                id: yesOrNo[i]
              }
              $http({
                method: 'PUT',
                url: 'http://localhost:3000/api/surveys/' + objectId + '?type=yesorno',
                data: body
              }).then(function(response) {
                console.log(response.data);
              })
            }
          }
          for (var i = 0; i < multipleChoice.length; i++) {
            if (multipleChoice[i]) {
              var body = {
                id: multipleChoice[i]
              }
              $http({
                method: 'PUT',
                url: 'http://localhost:3000/api/surveys/' + objectId + '?type=multiplechoice',
                data: body
              }).then(function(response) {

              })
            }
          }
          for (var i = 0; i < ranking.length; i++) {
            if (ranking[i]) {
              var body = {
                id: ranking[i]
              }
              $http({
                method: 'PUT',
                url: 'http://localhost:3000/api/surveys/' + objectId + '?type=ranking',
                data: body
              }).then(function(response) {

              })
            }
          }
          for (var i = 0; i < textField.length; i++) {
            if (textField[i]) {
              var body = {
                id: textField[i]
              }
              $http({
                method: 'PUT',
                url: 'http://localhost:3000/api/surveys/' + objectId + '?type=textfield',
                data: body
              }).then(function(response) {

              })
            }
          }


        deffered.resolve(response._id)
      })

      return deffered.promise
    }
  }])

angular.module('dev-survey')
  .service('userService', ["$http", function($http) {

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

  }])
