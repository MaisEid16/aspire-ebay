'use strict';

var user = require('./user.model');
//var Postgress = require('../../config/PostgresConfig');
var promise = require('bluebird'),
    options = {
        // Initialization Options
        promiseLib: promise
    },
    pgp = require('pg-promise')(options),
    config = require('../../config/environment'),
    connectionString = config.postgresdb,
    db = pgp(connectionString);


exports.loginService = function (req, res) {

    user.find({}, function (err, _uaer){
         if (err) {
                return res.send(500);
            }
            if (!user) {
                return res.send(404);
            }
            console.log(_user);
            return res.status(200)
                .json(user);
           
        });
    
    }
    
       
           
  
   exports.registerService = function (req, res) {


    var reg = new user();
    reg.name = req.body.name;
    reg.email = req.body.email;
    reg.password = req.body.password;
    


    reg.save(function (err, _user) {
        if (err) {
            console.log('not register');
            return res.send(500);
        } else {
            console.log(_user);
            res.status(200)
                .json(_user);
        }
    });
};