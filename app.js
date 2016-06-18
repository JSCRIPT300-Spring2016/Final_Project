var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var nodemailer = require('nodemailer');

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (request, response) {
    response.render('index', { title: 'Blogroll App' });
});

app.get('/blog', function (request, response) {
    response.render('Blogroll App');
});

app.get('/contact', function (request, response) {
    response.render('contact');
});

app.post('/contact/send', function (request, response) {
	var transporter = nodemailer.createTransport({
	    service: 'hotmail',
		auth: {
		    user: 'emma_luk1@hotmail.com',
			pass: ''
		}
	});

	var mailOptions = {
		from: 'Emma Luk <emma_luk1@hotmail.com>',
		to: 'emma_luk1@hotmail.com',
		subject: 'Emma Luk Final Project Submission',
		text: 'You have a submission with the following details... Name: ' + request.body.name + 'Email: ' + request.body.email + 'Message: ' + request.body.message,
		html: '<p>You have a submission with the following details...</p><ul><li>Name: ' + request.body.name + '</li><li>Email: ' + request.body.email + '</li><li>Message: ' + request.body.message + '</li></ul>'
	};

	transporter.sendMail(mailOptions, function(error, info){
		if(error){
			console.log(error);
			response.redirect('/');
		} else {
			console.log('Message Sent: '+info.response);
			response.redirect('/');
		}
	});
});

app.listen(3000);
console.log('Server is running on port 3000...');