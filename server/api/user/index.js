'use strict';
//require packages 
var express = require('express');
var controller = require('./user.controller');
var config = require('../../config/environment');


var router = express.Router();

//router.get('/Getlocation/:locationId' , controller.GetlocationById);
router.post('/app/login' , controller.login );
router.post('/app/signup' , controller.signup );

module.exports = router;

