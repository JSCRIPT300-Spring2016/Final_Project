/*
	Scott Henderson
	JSCRIPT 300 A Spring 2016
*/

var express = require("express");
var mongoose = require("mongoose");

var path = require("path");	// build-in node module
var spaRoute = require("./utils/spa-server-route");

var nachosRouter = require("./routes/nachosRoutes");
var ratingsRouter = require("./routes/ratingsRoutes");

var app = express();
/* eslint-disable no-unused-vars */
var db = mongoose.connect("mongodb://localhost/nachosAPI");
/* eslint-enable no-unused-vars */
var port = process.env.PORT || 3000;
var root = path.resolve(__dirname, "public");
	// append "public" to current directory name

// a middle-ware function without a "mount" path gets executed on every request
app.use(function (request, response, next) {
	console.log("Time: ", Date.now());
	next();
}, function (request, response, next) {
	console.log("Request URL: ", request.originalUrl);
	next();
});

app.use(express.static("public"));
app.use("/api/nachos", nachosRouter);
app.use("/api/ratings", ratingsRouter);
app.use(spaRoute(path.resolve(root, "index.html")));
	// if route not found on server, return index.html
	// this also requires absolute path specs in index.html
	// paths in index.html will use "root" as the root for absolute paths
	// must install this middle-ware *after* the APIs just above
	// so that the middle-ware does not intercept the API calls

app.listen(port, function () {
	console.log("server started on port " + port);
});
