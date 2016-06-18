var mongoose = require('mongoose');

var Schema = mongoose.Schema;

 var rcRecordSchema = new Schema({
   arist: String,
   title: String,
   year: String,
   label: String,
   sku: String,
   sale: String,
   copies: String,
   added: String,
   id: String
});

module.exports = mongoose.model('rcRecord', rcRecordSchema);

