var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ideaSchema = new Schema({
  ideaName: String,
  authorName: String,
  ideaDescription: String,
  ranking: [String]

});

module.exports = mongoose.model('Idea', ideaSchema);
