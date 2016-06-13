var express = require('express');
var Idea = require('../models/IdeaModel');
var router = express.Router();

router.route('/')
  .get(function(request, response) {
    Idea.find(function(error, results) {
      if (error) {
        response.status(500).send(error);
      } else {
        response.send(results);
      }
    });
  });
router.route('/:id')
  .get(function(request, response) {
    var id = request.params.id;
    Idea.findById(id, function(error, result) {
      if (error) {
        response.status(500).send(error);
      } else {
        response.send(result);
      }
    });
  });

module.exports = router;
