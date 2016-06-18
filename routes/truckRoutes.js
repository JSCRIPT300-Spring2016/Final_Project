var stuffFromExpress = require('express');

// The mongoose Schema truckModel
var TruckModelStuff = require('../models/truckModel');

// the Router method returns an instance which can be mounted as middle-ware
var routerStuff = stuffFromExpress.Router();

routerStuff.route('/')
  .get(function (request, response) {
	  
    // This route returns the list of all trucks in the module
    // if the query is empty.  Otherwise, the truck(s) that matched
    // the query is/are returned.
    // For example, '127.0.0.1:3000/trucks' gives all trucks.
	// '127.0.0.1:3000/trucks?name=Flair Taco' gives the Flair Taco truck.

    // Control what kinds of data can be queried via the
    // query string.
    var query = {};
	
    if (request.query.name) {
      query.name = new RegExp(request.query.name, 'i');
    }
    TruckModelStuff.find(query, function (error, results) {
      if (error) {
        response.status(500).send(error);
      } else {
        response.send(results);
      }
    });
  });

routerStuff.route('/:id')
  // This route finds a truck by the specified id.
  .get(function (request, response) {
    var truckId = request.params.id;
    TruckModelStuff.findById(truckId, function (error, result) {
      if (error) {
        response.status(500).send(error);
      } else {
        response.send(result);
      }
    });
  });

module.exports = routerStuff;
