//Express Router2:

var express = require('express');
//var mongoose = require('mongoose');
//var db = mongoose.connect('mongodb://localhost/houseAPI');
var router = express.Router();
var bodyParser = require('body-parser');
var urlEncoded = bodyParser.urlencoded({ extended: false });
var House = require('../models/houseModel');
  
//couple of more search functions (maybe they do need to go into a different router?
 router.route('/')
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

