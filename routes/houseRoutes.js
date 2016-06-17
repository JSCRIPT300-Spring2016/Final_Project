//Express Router 

var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var urlEncoded = bodyParser.urlencoded({ extended: false });
var House = require('../models/houseModel');

//use the custom designed Node Module 'daysOnMarket'
var daysOnMarket = require('../utils/daysOnMarket');

router.route('/')
  .get(function (request, response) { 
    House.find(function (error, results) {
      if (error) {
        response.status(500).send(error);
      } else {
        //here comes the updating of daysOnMarket	
        var results = results.map(function(item, index){	
           //changes daysOnMarket before returning the info
			item.daysOnMarket = daysOnMarket.getDaysOnMarket(item.putOnMarket);		
			return item;
		});	
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
  
module.exports = router;