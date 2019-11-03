'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var CategorySchema = new Schema({
  name: {
    type: String,
    required: 'Enter your a name for this category.'
  },
  description: {
    type: String,
    default: null
  },
  picture: {
    type: String,
    default: null
  }
});

module.exports = mongoose.model('Categories', CategorySchema);
