var expressStuff = require('express');
var mongooseStuff = require('mongoose');
var path = require('path');
var spaRoute = require('./utils/spa-server-route');
var truckAPIRouter = require('./routes/truckRoutes');

// Connect to the sartorialTruckAPI database.
// Took out the portion "var db = mongoose.connect(...)"
// because the var db is not used. The var db would be
// useful for some other applications.
//
// I don't know why using my own sartorialTrucksJSON.js
// and sartorialTruckAPI don't work.  The data was stored
// in MongoDB database but it couldn't be retrieved; the
// get method from the truckRoutes always return empty.
//
// sartorialTruckAPI is from issuing the command:
// mongo sartorialTruckAPI < sartorialTrucksJSON.js
// mongooseStuff.connect('mongodb://localhost/tailorTruckAPI');
mongooseStuff.connect('mongodb://localhost/foodTruckAPI');

var app = expressStuff();
var port = process.env.PORT || 3000;

// Allow the use of html, css (static files) when routes are hit.
// The node js module's path.resolve([from...], to) method resolves
// "to" to an absolute path.  It also take cares of appropriate file
// separator in the path.
var root = path.resolve(__dirname, 'public');

app.use(expressStuff.static(root));
app.use('/api/trucks', truckAPIRouter);
app.use(spaRoute(path.resolve(root, 'index.html')));

app.listen(port, function () {
//console.log('listening on port ', port);
});
