angular.module('dev-survey')
  .controller('createSurveyCtrl', function($scope, $sce) {

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



  })
