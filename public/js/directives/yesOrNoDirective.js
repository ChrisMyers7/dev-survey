angular.module('dev-survey')
  .directive('yesOrNoDirective', function() {
    return {
      restrict: 'E',
      templateUrl: '../templates/yesOrNoTmpl.html' 
    }
  })
