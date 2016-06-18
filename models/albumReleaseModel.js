var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var albumReleaseSchema = {
	artist: String,
	title: String,
	date: String,
	label: String,
	coverart: [String],
	tracks: [String]
};

module.exports = mongoose.model('album', albumReleaseSchema);