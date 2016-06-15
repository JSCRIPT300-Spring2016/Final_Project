/*
	Scott Henderson
	JSCRIPT 300 A Spring 2016
*/

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var nachosSchema = new Schema({
	name: String,
	date: Date,
	city: String,
	rating: Number,		// [1,10]
	sides: [String],	// e.g., salsa, sour cream, guacamole, jalapenos
	comments: String
});

module.exports = mongoose.model("Nachos", nachosSchema);
