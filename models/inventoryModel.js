/*
** author: Fulin Shen
** created on: June 12, 2016
** description: mongodb schema for inventory locations
**/

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var inventoryLocationSchema = {
	name: String,
	type: String,
	status: String,
	latitude: String,
	longitude: String,
	product: String,
	productQty: Number
};

module.exports = mongoose.model('InventoryLocation', inventoryLocationSchema);
