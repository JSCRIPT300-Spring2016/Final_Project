var express = require('express');
var mongoose = require('mongoose');
var path = require('path');
var spaRoute = require('./utils/spa-server-route');
var truckRouter = require('./routes/propRoutes');
var foodTypeRouter = require('./routes/foodTypeRoutes');
var truckAPIRouter = require('./routes/propRoutes');

var messenger = require('./custom_messenger');
//call like function
messenger('message from Gandalf');
//messenger.message('message from bilbo');


var db = mongoose.connect('mongodb://localhost/propsAPI');
var app = express();
var port = process.env.PORT || 3000;
var root = path.resolve(__dirname, 'public');


//app.use(express.static('public'));
//app.use(bodyParser.urlencoded({ extended: false }));
/*app.use('/trucks', truckRouter);
app.use('/food-types', foodTypeRouter);
app.use('/food-trucks', foodTypeRouter);
app.use('/today', foodTypeRouter);
app.use('/props', foodTypeRouter);*/

app.use(express.static(root));
app.use('/trucks', truckAPIRouter);
app.use(spaRoute(path.resolve(root, 'index.html')));

app.listen(3000, function () {
  console.log('listening on port 3000');
});

// Got the routers to go to the right place i think.  now need to change them to work for my app
// THIS APP SHOULD: on click display calculation results on the page not the console
// instead of display trucks open on a certain day, display projects  using a certain material, due within 1 week, display all, etc
