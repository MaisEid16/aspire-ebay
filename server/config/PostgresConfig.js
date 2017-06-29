// For more info about pg-promise lib: 
// https://github.com/vitaly-t/pg-promise/wiki/Learn-by-Example
// and http://vitaly-t.github.io/pg-promise/PreparedStatement.html

"use strict";

var promise = require('bluebird'),
    options = {
        // Initialization Options
        promiseLib: promise
    },
    pgp = require('pg-promise')(options),
    config = require('./environment'),
    connectionString = config.postgresdb,
    db = pgp(connectionString);

function any(sql, parameters) {
    return db.any(sql, parameters);
}

function one(sql, parameters) {
    return db.one(sql, parameters);
}

function none(sql, parameters) {
    return db.none(sql, parameters);
}

function result(sql, parameters) {
    db.result(sql, parameters);
}

function end() {
    return db.end();
};

function proc(myProcName, parameters) {
   return  db.proc(myProcName, parameters)
    .then(data => {
        console.log(data); // printing the data returned 
    })
    .catch(error => {
        console.log(error); // printing the error 
    });
}


module.exports = {
    any: any,
    one: one,
    none: none,
    result: result,
    end:end,
    proc:proc 
};
