'use strict';

var Backbone = require('backbone');

var House = Backbone.Model.extend({
  idAttribute: '_id',
  urlRoot: '/api/houses',
	// Default attributes for the House Model
  defaults: {
    street: '',
    city: '',
    zipCode: 11111,
    state: '',
    country: '',
    sellingAgent: '',
    contactEmail: '',
    contactPhone: '',
    type: '',
    yearBuilt: 1111,
    price: '0',
    HMO: 0,
    nrBedrooms: 0,
    nrBathrooms: 0,
    nrLevels: 0,
    nrFireplaces: 0,
    finishedBasement: 'no',
    schoolDistrict: '',
    openHouse: [],
    putOnMarket: '',
    daysOnMarket: 0,
    description: ''
  }
});

module.exports = House;