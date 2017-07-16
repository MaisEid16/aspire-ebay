
//Haneen Task 
(function() {
  'use strict';

  angular
    .module('app')
    .controller('SignupCtrl', SignupCtrl);

  SignupCtrl.$inject = ['$scope','$state', '$window', '$location'];

  function SignupCtrl($scope, $state, $window, $location) {
   
    $scope.register = function(form) {
   $scope.submitted = true;
   if(form.$valid) {
        Auth.createUser({
          name: $scope.user.name,
        email: $scope.user.email,
          password: $scope.user.password
        }).then( function() {
 
          $location.path('/');
        });
     
     
    };



   
  }
}})();