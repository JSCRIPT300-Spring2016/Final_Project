var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// the schema describes what the data will look like
// it is the pattern that your new object inserted into db should follow
var bandSchema = new Schema({
	name: String,
	genre: [String],
	album: [String]
});

module.exports = mongoose.model('Band', bandSchema);