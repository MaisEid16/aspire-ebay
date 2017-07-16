var User = require('./user.model');
var app = require('../../app');
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


exports.MongoGetByIdService = function (req, res) {

    user.find({
        'userId': req.params.userId
    })
        .sort({
            createTime: -1
        })
        .exec(function (err, _users) {
            if (err) {
                return res.send(500);
            }
            if (!_users) {
                return res.send(404);
            }
            console.log(_users);
            return res.status(200)
                .json(_users);
        });
};

exports.MongoGetAllService = function (req, res) {
    user.find({}, function (err, _users) {
        if (err) throw err;

        res.send(_users);
    });
}


exports.MongoAddService = function (req, res) {
    var ex = new user();
    ex.Id = req.body.userId;
    ex.title = req.body.title;
    ex.description = req.body.description;


    ex.save(function (err, _user) {
        if (err) {
            console.log('error saving user');
            return res.send(500);
        } else {
            console.log(_user);
            res.status(200)
                .json(_user);
        }
    });
};


exports.PostGresGetAllServiceSQL = function (req, res) {
    db.any('SELECT "ID", title, description FROM "TEbay".user;')
        .then(data => {
            res.send(data);
            console.log('DATA:', data); // print data;
        })
        .catch(error => {
            console.log('ERROR:', error); // print the error;
        })
}

// by Procedure 
exports.PostGresGetByIdService = function (req, res) {
    db.proc('"PEbay".get_user', [req.params.userId])
        .then(data => {
            res.send(data);
            console.log('DATA:', data); // print data;
        })
        .catch(error => {
            console.log('ERROR:', error); // print the error;
        })

}
 // by direct sql 

exports.PostGresGetByIdServiceSQL = function (req, res) {
    db.any('SELECT "ID", title, description FROM "TEbay".user  where "ID" = ' + req.params.userId + ';')
        .then(data => {
            res.send(data);
            console.log('DATA:', data); // print data;
        })
        .catch(error => {
            console.log('ERROR:', error); // print the error;
        })
}


exports.PostGresAddService = function (req, res) {
    db.proc('"PEbay".updins_user', [req.body.title, req.body.description])
        .then(data => {
            res.send("success");
        })
        .catch(error => {
            console.log('ERROR:', error); // print the error;
        })
}