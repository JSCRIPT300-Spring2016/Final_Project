var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var houseSchema = new Schema({
  street: String,
  city: String,
  zipCode: Number,
  state: String,
  country: String,
  sellingAgent: String,
  contactEmail: String,
  contactPhone: String,
  type: String,
  yearBuilt: Number,  
  price: String,
  HMO: Number,
  nrBedrooms: Number,
  nrBathrooms: Number,
  nrLevels: Number,
  nrFireplaces: Number,
  finishedBasement: String,  
  schoolDistrict: String,
  openHouse: [String],
  putOnMarket: String,
  daysOnMarket: Number,
  description: String
}); 

module.exports = mongoose.model('House', houseSchema);