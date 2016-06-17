var express = require("express");
var path    = require( "path" );
var mongoose = require("mongoose");
var engine  = require( "ejs-locals" );


var categoriesRouter = require("./routes/categoriesRoutes");
var tasksRouter = require("./routes/tasksRoutes");

// eslint-disable-next-line no-unused-vars
var db = mongoose.connect("mongodb://localhost/todoAPI");
var app = express();

app.engine( "ejs", engine );
app.set( "views", path.join( __dirname, "views" ));
app.set( "view engine", "ejs" );

app.use(express.static("public"));
app.use("/categories", categoriesRouter);
app.use("/tasks", tasksRouter);

app.listen(3000, function() {
    // eslint-disable-next-line no-console
    console.log("Listening on port 3000");
});

