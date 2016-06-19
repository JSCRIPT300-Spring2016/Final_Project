/*
** author: Fulin Shen
** created on: June 12, 2016
** description: server routes
**/

var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var urlEncoded = bodyParser.urlencoded({ extended: false });
var jsonParser = bodyParser.json();

var Inventory = require('../models/inventoryModel');

router.route('/')
  .get(function(request, response) {
    Inventory.find(function(error, results) {
      if(error) {
        response.status(500).send(error);
      } else {
        //console.log('results: ', results);
        response.send(results);
      }
    });
  })
  .post(jsonParser, urlEncoded, function(request, response) {
    var inventory = new Inventory(request.body);

    inventory.save(function(error, inventory) {
      if(error) {
        response.status(500).send(error);
      } else {
        response.status(201).send(inventory);
      }
    });
  });

router.route('/:inventoryId')
  .get(function(request, response) {
    var inventoryId = request.params.inventoryId;

    Inventory.findById(inventoryId, function(error, results) {
      if(error) {
        response.status(500).send(error);
      } else {
        response.status(201).send(results);
      }
    });
  })
  .delete(function(request, response) {
    var inventoryId = request.params.inventoryId;

    Inventory.findByIdAndRemove(inventoryId, function(error) {
      if(error) {
        response.status(500).send(error);
      } else {
        response.status(204).send('removed');
      }
    });
  });

module.exports = router;
