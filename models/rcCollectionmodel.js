var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var rcCollectionSchema = new Schema({
   html: String
});

module.exports = mongoose.model('rcCollection', rcCollectionSchema);