var express = require('express');
var bodyparser = require('body-parser');
var gardenRoutes = require('./routes/gardenRoutes');


var app = express();
app.use(express.static('public'));
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

app.use('/api/garden', gardenRoutes);

app.listen(3000, function() {
  console.log('Planting on port 3000');
});
