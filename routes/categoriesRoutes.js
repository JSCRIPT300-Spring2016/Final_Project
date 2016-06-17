var express = require("express");
var bodyparser = require("body-parser");

var urlEncoded = bodyparser.urlencoded({ extended: false });

var Category = require("../models/categoryModel");
var Task = require("../models/taskModel");

var router = express.Router();

router.route("/")
    .get(function(request, response) {
        Category.find(function(error, result) {
            if (error) {
                response.status(500).send(error);
            } else {
                response.render("category", { categories : result });
            }
        });
    })
    .post(urlEncoded, function(request, response) {
        var category =  new Category(request.body);
        category.save(function(error, category) {
            if (error) {
                response.status(500).send(error);
            } else {
                response.status(201).send(category);
            }
        });
    });

router.route("/:categoryId")
    .get(function(request, response) {
        var categoryId = request.params.categoryId;
        Category.findById(categoryId, function(error, result) {
            if (error) {
                response.status(500).send(error);
            } else {
                response.send(result);
            }
        });
    })
    .put(urlEncoded, function (request, response) {
        var categoryId = request.params.categoryId;
        var update = request.body;
        Category.findByIdAndUpdate(categoryId, update, function (error, affected, result) {
            if (error) {
                response.status(500).send(error);
            } else {
                response.send(result);
            }
        });
    })
    .delete(function (request, response) {
        var categoryId = request.params.categoryId;
        Category.findByIdAndRemove(categoryId, function(error) {
            if (error) {
                response.status(500).send(error);
            } else {
                Task.find({ "categoryId" : categoryId }).remove().exec();
                response.status(204).send("done");
            }
        });
    });

module.exports = router;

