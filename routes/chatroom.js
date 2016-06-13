var express = require('express');
var router = express.Router();
var app = express();

var path = require('path');

router.route('/')
  .get(function (request, response) {
      response.sendFile(path.resolve(__dirname + '/../public/index.html'));
  });

//router.route('/:id')
//  .get(function (request, response) {
//      var id = request.params.id;

//  });

module.exports = router;