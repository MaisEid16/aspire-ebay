'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ExampleSchema = new Schema({
  exampleId:Number ,
  title: String,
  description: String,
});

module.exports = mongoose.model('Example', ExampleSchema);