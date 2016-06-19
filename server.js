//Express, MongoDB, Mongoose, RESTful API
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/blogroll');

var Schema = mongoose.Schema;

var BlogSchema = new Schema({
    author: String,
    title: String,
    url: String
});

mongoose.model('Blog', BlogSchema);

var Blog = mongoose.model('Blog');

/*var blog = new Blog({
	author: 'Emma',
	title: 'Emma\'s Blog',
	url: 'http://emmablog.com'
});

blog.save();*/

var app = express();

app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

// GET and POST Requests to MongoDB
//*********************************
// ROUTES
//*********************************

app.get('/api/blogs', function (request, response) {
    Blog.find(function (err, docs) {
        docs.forEach(function (item) {
            console.log("Received a GET request for _id: " + item._id);
        })
        response.send(docs);
    });
});

app.post('/api/blogs', function (request, response) {
    console.log('Received a POST request:')
    for (var key in request.body) {
        console.log(key + ': ' + request.body[key]);
    }
    var blog = new Blog(request.body);
    blog.save(function (err, doc) {
        response.send(doc);
    });
});

// PUT and DELETE Requests to MongoDB
//_id: 5765b72902dbc05053ec97d2

app.delete('/api/blogs/:id', function (request, response) {
    console.log('Received a DELETE request for _id: ' + request.params.id);
    Blog.remove({ _id: request.params.id }, function (err, doc) {
        response.send({ _id: request.params.id });
    });
});

app.put('/api/blogs/:id', function (request, response) {
    console.log('Received an UPDATE request for _id: ' + request.params.id);
    Blog.update({ _id: request.params.id }, request.body, function (err) {
        response.send({ _id: request.params.id });
    });
});

var port = 3000;

app.listen(port);
console.log('server on ' + port);