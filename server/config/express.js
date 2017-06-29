/**
 * Express configuration
 */

'use strict';

var express = require('express');
var compression = require('compression');
var bodyParser = require('body-parser');
var config = require('./environment');
var path = require('path');


module.exports = function(app) {
  var env = app.get('env');
  var env = 'development';

  app.set('views', config.root + '/server/views');
  app.engine('html', require('ejs').renderFile);
  app.set('view engine', 'html');
  app.use(compression());
  app.use(bodyParser.urlencoded({
    extended: true
  }));
  app.use(bodyParser.json());


  app.use(express.static(path.join(config.root, 'client')));
  app.set('appPath', 'client');

//Implement function to add specific Response Header 


 
};