var express = require('express');
var bodyParser = require('body-parser');
var urlEncoded = bodyParser.urlencoded({ extended: false });
var Review = require('../models/reviewModel');
var router = express.Router();

router.route('/')
  .get(function (request, response) {

    Review.find(function (error, results) {
      if (error) {
        response.status(500).send(error);
      } else {
        response.send(results);
      }
    });
  })
  .post(urlEncoded, function (request, response) {
    var review = new Review(request.body);

    review.save(function (error, results) {
      if (error) {
        response.status(500).send(error);
      } else {
        response.status(201).send(review);
      }
    });
  });

router.route('/:reviewId')
  .get(function (request, response) {
    var reviewId = request.params.reviewId;

    Review.findById(reviewId, function (error, results) {
      if (error) {
        response.status(500).send(error);
      } else {
        response.send(results);
      }
    });
  })
  .put(urlEncoded, function (request, response) {
    var reviewId = request.params.reviewId;

    var update = {
      text: request.body.text,
      rating: request.body.rating
    };

    Review.findByIdAndUpdate(reviewId, update, function (error, results) {
      if (error) {
        response.status(500).send(error);
      } else {
        response.send(results);
      }
    });
  })
  .delete(function (request, response) {
    var reviewId = request.params.reviewId;

    Review.findByIdAndRemove(reviewId, function(error){
      if (error) {
        response.status(500).send(error);
      } else {
        response.status(204).send('remove');
      }
    });
  });
module.exports = router;
