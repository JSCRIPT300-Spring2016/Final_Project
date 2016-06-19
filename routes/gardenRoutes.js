var express = require('express');
var garden = require('../garden');
var bodyparser = require('body-parser');

var router = express.Router();

// for body-parser, request.body's field names are the same as input form names
router.route('/')
  .get(function(request, response) {
   response.status(200).json(garden.getPlants());
  })
  .post(function(request, response) {
    var newPlant = request.body;

    if (!newPlant) {
      response.status(400).json('problem with adding plant');
    } else {
      newPlant = garden.addPlant(newPlant);
      response.status(201).send(newPlant);
    }
  });

router.route('/planting')
  .get(function(request, response) {
    response.status(200).json(garden.showSoonToPlantPlants());
  });

router.route('/:name')
  .put(function(request, response) {
    var plant = garden.getPlant(request.params.name);
    var updatedPlant;

    if (book && request.body) {
      updatedPlant = garden.editPlant(request.body);
      response.send(updatedPlant);
    } else {
      response.status(404).json('no record!');
    }
  })
  .delete(function(request, response) {
    var name = request.params.name;

    garden.deletePlant(name);
    response.sendStatus(200);
  });

module.exports = router;
