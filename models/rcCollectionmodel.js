var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var rcCollectionSchema = new Schema({
   id: String
});

module.exports = mongoose.model('rcCollection', rcCollectionSchema);