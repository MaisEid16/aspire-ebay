'use strict';

var example = require('./example.model');
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

    example.find({
        'exampleId': req.params.exampleId
    })
        .sort({
            createTime: -1
        })
        .exec(function (err, _examples) {
            if (err) {
                return res.send(500);
            }
            if (!_examples) {
                return res.send(404);
            }
            console.log(_examples);
            return res.status(200)
                .json(_examples);
        });
};

exports.MongoGetAllService = function (req, res) {
    example.find({}, function (err, _examples) {
        if (err) throw err;

        res.send(_examples);
    });
}


exports.MongoAddService = function (req, res) {
    var ex = new example();
    ex.Id = req.body.exampleId;
    ex.title = req.body.title;
    ex.description = req.body.description;


    ex.save(function (err, _example) {
        if (err) {
            console.log('error saving Example');
            return res.send(500);
        } else {
            console.log(_example);
            res.status(200)
                .json(_example);
        }
    });
};


exports.PostGresGetAllServiceSQL = function (req, res) {
    db.any('SELECT "ID", title, description FROM "TEbay".example;')
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
    db.proc('"PEbay".get_example', [req.params.exampleId])
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
    db.any('SELECT "ID", title, description FROM "TEbay".example  where "ID" = ' + req.params.exampleId + ';')
        .then(data => {
            res.send(data);
            console.log('DATA:', data); // print data;
        })
        .catch(error => {
            console.log('ERROR:', error); // print the error;
        })
}


exports.PostGresAddService = function (req, res) {
    db.proc('"PEbay".updins_example', [req.body.title, req.body.description])
        .then(data => {
            res.send("success");
        })
        .catch(error => {
            console.log('ERROR:', error); // print the error;
        })
}