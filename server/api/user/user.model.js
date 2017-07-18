'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
Name:String ,
  email: String,
  password: String,
});

module.exports = mongoose.model('Example', ExampleSchema);