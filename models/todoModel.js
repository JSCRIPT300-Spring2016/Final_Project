var mongoose = require( 'mongoose' );
var Schema = mongoose.Schema;

var taskSchema = new Schema({
  name: String,
  important: Boolean,
  completed: Boolean
});

module.exports = mongoose.model( 'Todo', taskSchema );