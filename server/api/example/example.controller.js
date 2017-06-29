'use strict';
var config = require('../../config/environment');
var ExampleService = require('./example.service');

// this functioon called incase we have error and we want to display it 
var validationError = function (res, err) {
  return res.json(422, err);
};

// controller Functions that used Mongo  DB 
exports.MongoGetById = function (req, res) {

  ExampleService.MongoGetByIdService(req, res);
};

exports.MongoGetAll = function (req, res) {

  ExampleService.MongoGetAllService(req, res);

};

exports.MongoAdd = function (req, res) {
  ExampleService.MongoAddService(req, res);
}


// controller Functions that used Postgres  DB 
exports.PostGresGetAll = function (req, res) {
  ExampleService.PostGresGetAllServiceSQL(req, res);
}

exports.PostGresGetById = function (req, res) {
  ExampleService.PostGresGetByIdService(req, res);
}

exports.PostGresAdd = function (req, res) {
  ExampleService.PostGresAddService(req, res);
}