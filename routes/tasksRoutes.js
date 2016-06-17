var express = require("express");
var bodyparser = require("body-parser");

var urlEncoded = bodyparser.urlencoded({ extended: false });

var Category = require("../models/categoryModel");
var Task = require("../models/taskModel");

var router = express.Router();

router.route("/")
    .get(function(request, response) {
        response.redirect("/categories");
    })
    .post(urlEncoded, function(request, response) {
        var task =  new Task(request.body);
        task.complete = false;
        task.updated_at = new Date();
        task.save(function(error, task) {
            if (error) {
                response.status(500).send(error);
            } else {
                response.status(201).send(task);
            }
        });
    });

router.route("/:categoryId")
    .get(function(request, response) {
        var categoryId = request.params.categoryId;
        Category.findById(categoryId, function(error, category) {
            if (error) {
                response.status(500).send(error);
            } else {
                Task.find({ "categoryId" : category._id }, function(error, tasks) {
                    if (error) {
                        response.status(500).send(error);
                    } else {
                        response.render("task", { category : category, tasks : tasks });
                    }
                });
            }
        });
    });

router.route("/:categoryId/:taskId")
    .get(function(request, response) {
        var taskId = request.params.taskId;
        Task.findById(taskId, function(error, task) {
            if (error) {
                response.status(500).send(error);
            } else {
                response.send(task);
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
        var taskId = request.params.taskId;
        Task.findByIdAndRemove(taskId, function(error) {
            if (error) {
                response.status(500).send(error);
            } else {
                response.status(204).send("done");
            }
        });
    });

module.exports = router;

