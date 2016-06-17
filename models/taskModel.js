var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var taskSchema = new Schema({
    categoryId : { type: mongoose.Schema.Types.ObjectId, ref: "Category" },
    name       : String,
    complete   : Boolean,
    updated_at : Date
});

module.exports = mongoose.model("Task", taskSchema);

