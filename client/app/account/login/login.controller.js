//Rshed Task
(function() {
  'use strict';

  angular
    .module('app')
    .controller('LoginCtrl', LoginCtrl);

  LoginCtrl.$inject = ['$scope','$state', '$window'];

  function LoginCtrl($scope, $state, $window) {

    $scope.login = function(form) {
      
      
    };

  }

})();