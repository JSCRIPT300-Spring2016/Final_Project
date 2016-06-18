var express = require('express');
var bodyParser = require('body-parser');

var urlEncoded = bodyParser.urlencoded({ extended: false });

var ListModel = require('../models/listModel.js');

var router = express.Router();


router.route('/')
  .get(function (request, response) {
    ListModel.find(function (error, results){
      if (error) {
        response.status(500).send(error);
      } else {
        response.send(results);
      }
    });
  })
  .post(urlEncoded, function (request, response) {
    var toDoList = new ListModel(request.body);

    toDoList.save(function (error, toDoList) {
      if (error) {
        response.status(500).send(error);
      } else {
        response.status(201).send(toDoList);
      }
    });
  });

router.route('/:listId')
  .get(function (request, response) {
    var listId = request.params.listId;

    ListModel.findById(listId, function (error, result) {
      if (error) {
        response.status(500).send(error);
      } else {
        response.send(result);
      }
    });
  })
  .put(urlEncoded, function (request, response) {
    var listId = request.params.listId;
    var update = {
      toDoList: request.body.toDoList,
      item: request.body.item,
      note: request.body.note
    };
    ListModel.findByIdAndUpdate(listId, update, function (error, affected, result) {
      if (error) {
        response.status(500).send(error);
      } else {
        response.send(result);
      }
    });
  })
  .delete(function (request, response) {
    var listId = request.params.listId;

    ListModel.findByIdAndRemove(listId, function (error) {
      if (error) {
        response.status(500).send(error);
      } else {
        response.status(204).send('removed');
      }
    });
  });

module.exports = router;
