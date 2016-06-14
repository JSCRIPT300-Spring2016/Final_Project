/*eslint-env node*/
var express = require('express');

var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var path = require('path');

var port = process.env.PORT || 3000;
var root = path.resolve(__dirname, 'public');

var chatRoute = require('./routes/chatroom');
var catchRoute = require('./routes/catch');

var serveStatic = express.static(root);

//Middle Stuff
app.use(serveStatic);
app.use('/chat', chatRoute);
app.use(catchRoute(path.resolve(root, 'error.html')));

//Chat Stuff
io.on('connection', function (socket) {
  socket.on('chatMessage', function (from, msg, color) {
    io.emit('chatMessage', from, msg, color);
  });
  socket.on('notifyUser', function (user) {
    io.emit('notifyUser', user);
  });
  socket.on('disconnect', function () {
    io.emit('chatMessage', 'System', 'Someone Left', 'black');
  });
});

//Listen Stuff
http.listen(port, function () {
  /* eslint-disable no-console */
  console.log('listening on port', port);
});