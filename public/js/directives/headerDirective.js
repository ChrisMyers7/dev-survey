angular.module('dev-survey')
  .directive('devMountainHeader', function() {
    return {
      restrict: 'E',
      templateUrl: '../js/templates/headerTmpl.html'
    }
  })
