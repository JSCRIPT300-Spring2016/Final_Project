var express = require( 'express' );
var path = require( 'path' );
var spaRoute = require( './utils/spa-server-route' );
var mongoose = require( 'mongoose' );
var todoAPIRouter = require( './routes/todoRoutes' );
var dateStamp = require( './utils/dateMod' );

mongoose.connect( 'mongodb://localhost/todoAPI' );

var app = express();
var port = process.env.PORT || 3000;
var root = path.resolve( __dirname, 'public' );

app.use( express.static( root ) );
app.use( '/api/todo', todoAPIRouter );
app.use( spaRoute(path.resolve( root, 'index.html' )) );
app.listen( port, function () {
  console.log( 'listening on port ', port );
  console.log( 'date stamp: ' +   dateStamp.getDate( 'milliseconds' ) );
});