var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ciderSchema = new Schema({
  name: String,
  maker: String,
  abv: Number,
  tags: Array,
  rating: { type: Number, default: 0 },
  reviews: [{ type: Schema.Types.ObjectId, ref: 'Review' }]
});

module.exports = mongoose.model('Cider', ciderSchema);