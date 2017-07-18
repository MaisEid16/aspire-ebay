
(function() {
  'use strict';

  angular
    .module('app')
    .controller('LoginCtrl', LoginCtrl);

  LoginCtrl.$inject = ['$scope','$state', '$window'];

  function LoginCtrl($scope, $state, $window) {

    $scope.login = function(form) {
      console.log("log");
      
    };

  }

})();/*
var express = require('express');
var router = express.Router();
var request = require('request');
var config = require('config.json');

router.get('/', function (req, res) {
    

    res.render('login', viewData);
});

router.post('/', function (req, res) {
    
    request.post({
      function (error, response, body) {
        if (error) {
            return res.render('login', { error: 'An error occurred' });
        }

        if (!body.token) {
            return res.render('login', { error: body, username: req.body.username });
        }

        // save JWT token in the session to make it available to the angular app
        req.session.token = body.token;

     
    }});
});

module.exports = router;*/