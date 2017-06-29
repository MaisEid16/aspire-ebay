/**
 * Main application routes
 */

'use strict';

var errors = require('./components/errors');
var path = require('path');

 
module.exports = function(app) 
{

  //look in the folder api/user when you finde request api/user 
  // as the rout prefix [RoutePrefix("api/Account")]


  app.use('/api/example', require('./api/example'));
 // app.use('/api/user', require('./api/user'));

 
 // All undefined asset or api routes should return a 404
  app.route('/:url(api|auth|components|app|bower_components|assets)/*')
   .get(errors[404]);


  app.route('/*')
    .get(function(req, res) {
      var x = app.get('appPath') ;
    res.sendFile(path.resolve(app.get('appPath') + '/index.html'));
    });  
};


