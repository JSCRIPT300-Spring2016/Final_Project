var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var countrySchema = new Schema({
  item: String,
  note: String
});

module.exports = mongoose.model('List', countrySchema);

