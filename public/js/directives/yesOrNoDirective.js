angular.module('dev-survey')
  .directive('yesOrNoDirective', function() {
    return {
      restrict: 'E',
      templateUrl: '../js/templates/yesOrNoTmpl.html'
    }
  })
  
