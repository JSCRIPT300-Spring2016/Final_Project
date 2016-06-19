var express = require('express');
var bodyParser = require('body-parser');
var urlEncoded = bodyParser.urlencoded({ extended: false });
var Cider = require('../models/ciderModel');
var router = express.Router();

router.route('/')
  .get(function (request, response) {

    Cider.find(function (error, results) {
      if (error) {
        response.status(500).send(error);
      } else {
        response.send(results);
      }
    });
  })
  .post(urlEncoded, function (request, response) {
    var cider = new Cider(request.body);

    cider.save(function (error, results) {
      if (error) {
        response.status(500).send(error);
      } else {
        response.status(201).send(cider);
      }
    });
  });

router.route('/:ciderId')
  .get(function (request, response) {
    var ciderId = request.params.ciderId;

    Cider.findById(ciderId, function (error, results) {
      if (error) {
        response.status(500).send(error);
      } else {
        response.send(results);
      }
    });
  })
  .put(urlEncoded, function (request, response) {
    var ciderId = request.params.ciderId;

    var update = {
      name: request.body.name,
      makeer: request.body.maker,
      abv: request.body.abv,
      tags: request.body.tags
    };

    Cider.findByIdAndUpdate(ciderId, update, function (error, results) {
      if (error) {
        response.status(500).send(error);
      } else {
        response.send(results);
      }
    });
  })
  .delete(function (request, response) {
    var ciderId = request.params.ciderId;

    Cider.findByIdAndRemove(ciderId, function(error){
      if (error) {
        response.status(500).send(error);
      } else {
        response.status(204).send('remove');
      }
    });
  });

module.exports = router;

