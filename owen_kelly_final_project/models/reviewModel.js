var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var reviewSchema = {
  _cider: { type: Number, ref: 'Cider' },
  rating: Number,
  text: String
};

module.exports = mongoose.model('Review', reviewSchema);