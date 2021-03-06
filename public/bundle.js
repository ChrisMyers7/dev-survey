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
  .controller('adminHomeCtrl', ["$scope", "$state", "surveyService", "userService", function($scope, $state, surveyService, userService) {

    $scope.surveyId = '';

    $scope.surveys = []

    function getSurveys() {
      surveyService.getSurveys().then(function(response) {
        $scope.surveys = response.data;
      })
    }

    getSurveys();

    $scope.hideModal = '';

    $scope.users = [];

    $scope.displayModal = function(survey_id) {
      $scope.hideModal = !$scope.hideModal;
      if ($scope.hideModal) {
        $scope.surveyId = survey_id;
        userService.getUsers().then(function(response) {
          $scope.users = response.data;
          for (var i = 0; i < $scope.users.length; i++) {
            $scope.users[i].checked = '';
          }
        })
      }
    }

    $scope.sendSurvey = function() {
      var userIds = [];
      for (var i = 0; i < $scope.users.length; i++) {
        if ($scope.users[i].checked === true) {
          userIds.push($scope.users[i]._id);
        }
      }
      userService.sendSurvey(userIds, $scope.surveyId).then(function(response) {
        
      })
      $state.go('adminHome');
    }



  }])

angular.module('dev-survey')
  .controller('createSurveyCtrl', ["$scope", "$sce", "$state", "questionService", "surveyService", function($scope, $sce, $state, questionService, surveyService) {

    $scope.survey = [];

    $scope.yesOrNo_questions = [];

    $scope.multipleChoice_questions = [];

    $scope.ranking_questions = [];

    $scope.textField_questions = [];

    $scope.savedSurvey = function() {
      surveyService.addSurvey($scope.surveyName, $scope.yesOrNo_questions, $scope.multipleChoice_questions, $scope.ranking_questions, $scope.textField_questions);
      $state.go('adminHome');
    }

    $scope.saveSurvey = function() {
      surveyService.addSurvey($scope.savedSurvey).then(function(response) {
        console.log(response);
      })
    }

    $scope.yesOrNo = function() {
      $scope.survey.push({
        template: $sce.trustAsHtml( '<div class="question-type yesorno-individual">Yes/No:</div>' +
                                    '<div class="question-wrapper"><input class="yesorno-question" ng-model="yesOrNoQuestion.question" placeholder="What question would you like to ask?"></div>' +
                                    // '<div class="answer-require-wrapper">Would you like to require this answer?<input class="answer-require" type="checkbox" ng-model="yesOrNoQuestion.requireAnswer" ></div>' +
                                    '<div class="save-button-wrapper"><button ng-click="save(yesOrNoQuestion, $index)">Save</button></div>'
                                  )
      })
    }

    $scope.multipleChoice = function() {
        $scope.survey.push({
          template: $sce.trustAsHtml( '<div class="question-type">Multiple Choice:</div>' +
                                      '<div class="question-wrapper"><input class="multipleChoice-question" ng-model="multipleChoiceQuestion.question" placeholder="What question would you like to ask?"></div>' +
                                      // '<input type="text" placeholder="Require Answer?" ng-model="multipleChoiceQuestion.requireAnswer">' +
                                      '<div class="option-header">Options:</div>' +
                                      '<div class="option-wrapper"><input type="text" placeholder="Option 1" ng-model="multipleChoiceQuestion.option1">' +
                                      '<input type="text" placeholder="Option 2" ng-model="multipleChoiceQuestion.option2"></div>' +
                                      '<div class="option-wrapper"><input type="text" placeholder="Option 3" ng-model="multipleChoiceQuestion.option3">' +
                                      '<input type="text" placeholder="Option 4" ng-model="multipleChoiceQuestion.option4"></div>' +
                                      '<div class="save-button-wrapper"><button ng-click="save(multipleChoiceQuestion, $index)">Save</button></div>'
                                    )
        })
    }

    $scope.ranking = function() {
        $scope.survey.push({
          template: $sce.trustAsHtml( '<div class="question-type">Ranking:</div>' +
                                      '<div class="question-wrapper"><input placeholder="What question would you like to ask?" ng-model="rankingQuestion.question"></div>' +
                                      // '<input type="text" placeholder="Require Answer?" ng-model="rankingQuestion.requireAnswer">' +
                                      '<div class="option-header">Rankings:</div>' +
                                      '<div class="option-wrapper"><input type="text" placeholder="Rank 1" ng-model="rankingQuestion.ranking1">' +
                                      '<input type="text" placeholder="Rank 2" ng-model="rankingQuestion.ranking2"></div>' +
                                      '<div class="option-wrapper"><input type="text" placeholder="Rank 3" ng-model="rankingQuestion.ranking3">' +
                                      '<input type="text" placeholder="Rank 4" ng-model="rankingQuestion.ranking4"></div>' +
                                      '<div class="save-button-wrapper"><button ng-click="save(rankingQuestion, $index)">Save</button></div>'
                                    )
        })
    }

    $scope.textField = function() {
        $scope.survey.push({
          template: $sce.trustAsHtml( '<div class="question-type yesorno-individual">Text Field:</div>' +
                                      '<div class="question-wrapper"><input placeholder="What question would you like to ask?" ng-model="textFieldQuestion.textQuestion"></div>' +
                                      // '<input type="text" placeholder="Require Answer?" ng-model="textFieldQuestion.requireAnswer">' +
                                      '<div class="save-button-wrapper"><button ng-click="save(textFieldQuestion, $index)">Save</button></div>'
                                    )
        })
    }

    $scope.save = function(question, e) {
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
      $scope.survey.splice(e, 1)
    }

  }])

angular.module('dev-survey')
  .controller('homeCtrl', ["$scope", "$state", "userService", function($scope, $state, userService) {

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
          if (loginUser.email === 'mega@tron.com') {
            $state.go('adminHome')
          } else {
            $state.go('userHome')
          }
        } else {
          prompt('Incorrect Password');
        }

      })
    }

    // saving the user in the data base and sending them to the appropriate page
    $scope.saveUser = function(user) {
      userService.registerUser(user).then(function(response) {
        $state.go('userHome')
        userService.currentUser = response.data._id;
      })


    }


  }])

angular.module('dev-survey')
  .controller('userHomeCtrl', ["$scope", "userService", "surveyService", function($scope, userService, surveyService) {

    $scope.modalToggle = '';

    function getUserSurveys() {
      var id = userService.currentUser._id;
      userService.getUserSurveys(id).then(function(response) {
        $scope.surveys = response.data.surveys
      })
    }

    getUserSurveys()

    $scope.takeSurvey = function(index) {
      $scope.modalToggle = !$scope.modalToggle;
      if ($scope.modalToggle) {
        surveyService.getOneSurvey($scope.surveys[index]._id).then(function(response) {
          $scope.yesOrNoQuestions = response.data.yesOrNo_questions;
          $scope.multipleChoiceQuestions = response.data.multipleChoice_questions;
          $scope.rankingQuestions = response.data.ranking_questions;
          $scope.textFieldQuestions = response.data.textField_questions;
        })
      }
    }

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
  .directive('devMountainHeader', function() {
    return {
      restrict: 'E',
      templateUrl: '../js/templates/headerTmpl.html'
    }
  })

angular.module('dev-survey')
  .service('questionService', ["$http", function($http) {

    this.yesOrNo = function(question) {
      return $http({
        method: 'POST',
        url: '/api/yesOrNoQuestions',
        data: question
      })
    }

    this.multipleChoice = function(question) {
      return $http({
        method: 'POST',
        url: '/api/multipleChoiceQuestions',
        data: question
      })
    }

    this.ranking = function(question) {
      return $http({
        method: 'POST',
        url: '/api/rankingQuestions',
        data: question
      })
    }

    this.textField = function(question) {
      return $http({
        method: 'POST',
        url: '/api/textFieldQuestions',
        data: question
      })
    }

  }])

angular.module('dev-survey')
  .service('surveyService', ["$http", "$q", function($http, $q) {

    this.getSurveys = function() {
      return $http({
        method: 'GET',
        url: '/api/surveys'
      })
    }

    this.getOneSurvey = function(surveyId) {
      return $http({
        method: 'GET',
        url: '/api/surveys/' + surveyId
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
        url: '/api/surveys',
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
                url: '/api/surveys/' + objectId + '?type=yesorno',
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
                url: '/api/surveys/' + objectId + '?type=multiplechoice',
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
                url: '/api/surveys/' + objectId + '?type=ranking',
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
                url: '/api/surveys/' + objectId + '?type=textfield',
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

  }])
