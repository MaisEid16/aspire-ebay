
//Haneen Task 
(function() {
  'use strict';

  angular
    .module('app')
    .controller('SignupCtrl', SignupCtrl);

  SignupCtrl.$inject = ['$scope','$state', '$window'];

  function SignupCtrl($scope, $state, $window) {
   
    $scope.register = function(form) {
  
    };

   
  }
})();