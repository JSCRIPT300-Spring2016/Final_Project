'use strict';

var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var urlEncoded = bodyParser.urlencoded({ extended: false });
var jsonParser = bodyParser.json();

var Inventory = require('../models/inventoryModel');

router.route('/:status')
  .get(function(request, response) {
    var inventoryLocStatus = request.params.status;

    Inventory.find({status: inventoryLocStatus}, function(error, results) {
      if(error) {
        response.status(500).send(error);
      } else {
        response.status(201).send(results);
      }
    });
  });

module.exports = router;
