
//Haneen Task 

(function() {
  'use strict';

  angular
    .module('app')
    .controller('SignupCtrl', SignupCtrl);

  SignupCtrl.$inject = ['$scope','$state', '$window'];

  function SignupCtrl($scope, $state, $window) {
   
    $scope.register = function(form) {
      console.log("reg")
  
    };

   
  }
})(); /*
var express = require('express');
var router = express.Router();
var request = require('request');
var config = require('config.json');

router.get('/', function (req, res) {
    res.render('signup');
});

router.post('/', function (req, res) {
    // register using api to maintain clean separation between layers
    request.post({
        url: config.appUrl + '/account/signup',
        form: req.body,
        json: true
    }, function (error, response, body) {
        if (error) {
            return res.render('signup', { error: 'An error occurred' });
        }

        if (response.statusCode !== 200) {
            return res.render('signup', {
                error: response.body,
                name: req.body.name,
                email: req.body.email,
                password: req.body.password
            });
        }

 
    });
});

module.exports = router;*/