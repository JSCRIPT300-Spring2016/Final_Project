//Express Router 

var express = require('express');
var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://localhost/houseAPI');
var router = express.Router();
var bodyParser = require('body-parser');
var urlEncoded = bodyParser.urlencoded({ extended: false });
var House = require('../models/houseModel');

//maybe have a file that can contain the function to update the date each day?
var daysOnMarket = require('../daysOnMarket');

router.route('/')
  .get(function (request, response) { 
    House.find(function (error, results) {
      if (error) {
        response.status(500).send(error);
      } else {
        //here comes the updating of daysOnMarket	
        //results is an array
        //console.log(results);
		
		//console.log(results[0]);
		
		/*
        var results = results.map(function(item, index){	
           //changes daysOnMarket before returning the info
			item.daysOnMarket = daysOnMarket.getDaysOnMarket(item.putOnMarket);
			console.log(item.daysOnMarket);
			console.log(item);			
			return item;
		});	*/
		console.log(results);
		//return the updated results
        response.send(results);
      }
    });
  })
  .post(urlEncoded, function (request, response) {
    var house = new House(request.body);

    house.save(function (error, house) {
      if (error) {
        response.status(500).send(error);
      } else {
        response.status(201).send(house);
      }
    });
  });
  
router.route('/:id')
  .get(function (request, response) {
    var houseId = request.params.id;
    House.findById(houseId, function (error, result) {
      if (error) {
        response.status(500).send(error);
      } else {
        response.send(result);
      }
    });
  })
  .put(urlEncoded, function (request, response) {
    var houseId = request.params.id;
    var update = {
      street: request.body.street,
      zipCode: request.body.zipCode,
      state: request.body.state,
      country: request.body.country,
      sellingAgent: request.body.sellingAgent,
      contactEmail: request.body.contactEmail,
      contactPhone: request.body.contactPhone,
      type: request.body.type,
      yearBuilt: request.body.yearBuilt,  
      price: request.body.price,
      HMO: request.body.HMO,
      nrBedrooms: request.body.nrBedrooms,
      nrBathrooms: request.body.nrBathrooms,
      nrLevels: request.body.nrLevels,
      nrFireplaces: request.body.nrFireplaces,
      finishedBasement: request.body.finishedBasement,  
      schoolDistrict: request.body.schoolDistrict,
      openHouse: request.body.openHouse,
	  putOnMarket: request.body.putOnMarket,
      description: request.body.description 	  
    };
    // this could also be var update = request.body;

    House.findByIdAndUpdate(houseId, update,
    function (error, affected, result) {
      if (error) {
        response.status(500).send(error);
      } else {
        // this will default to a 200 status
        response.send(result);
      }
    });
  })
  //This route removes a specific house from the list.
  .delete(function (request, response) {
    var houseId = request.params.id;

    House.findByIdAndRemove(houseId, function (error) {
      if (error) {
        response.status(500).send(error);
      } else {
        response.status(204).send('removed');
      }
    });
  });
  
 
//couple of more search functions 
 router.route('/bedrooms')
  .get(function (request, response) { 
    House.find(function (error, results) {
      if (error) {
        response.status(500).send(error);
      } else {
        response.send(results);
      }
    });
  });
    
module.exports = router;

