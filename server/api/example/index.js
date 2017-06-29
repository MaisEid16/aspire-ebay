'use strict';
//require packages 
var express = require('express');
var controller = require('./example.controller');
var config = require('../../config/environment');


var router = express.Router();

//services used Mongo DB 
router.get('/MongoGetById/:exampleId' , controller.MongoGetById);
router.get('/MongoGetAll' , controller.MongoGetAll);
router.post('/MongoAdd' , controller.MongoAdd);

//services used  PostGres DB 
router.get('/PostGresGetAll' , controller.PostGresGetAll);
router.get('/PostGresGetById/:exampleId' , controller.PostGresGetById);
router.post('/PostGresAdd' , controller.PostGresAdd);



module.exports = router;

