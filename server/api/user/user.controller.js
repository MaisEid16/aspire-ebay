'use strict';
var config = require('../../config/environment');
var UserService = require('./example.service');

// this functioon called incase we have error and we want to display it 
var validationError = function (res, err) {
  return res.json(200, err);
};

// controller Functions that used Mongo  DB 
exports.register = function (req, res) {

  userService.registerService(req, res);
};

exports.login = function (req, res) {

  userService.loginService(req, res);

};
