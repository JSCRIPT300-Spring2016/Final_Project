var express = require('express');
var bodyparser = require('body-parser');
var gardenRoutes = require('./routes/gardenRoutes');
var path = require('path');
var spaRouter = require('./public/utils/spaRouter');


var app = express();
var port = 3000;
var root = path.resolve(__dirname, 'public');
app.use(express.static('public'));
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());


app.use('/api/garden', gardenRoutes);
// should resolve to '/' by default
app.use(spaRouter(path.resolve()));

app.listen(3000, function() {
  console.log('Planting on port 3000');
});
