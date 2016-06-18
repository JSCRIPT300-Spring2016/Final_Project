var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var albumReleasesSchema = {
	_id: String,
	artist: String,
    title: String,
    date: String,
    label: String,
    coverart: String
};

module.exports = mongoose.model('Releases', albumReleasesSchema);


