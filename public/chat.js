//get the app namespace
var app = app || {};

//communication object
var socket = io();

//sounds
var audioIn = new Audio('in.mp3');
var audioOut = new Audio('out.mp3');

//send chat message
function submitfunction() {

    //get message parts
    var from = app.currentUser.get('username');
    var message = $('#m').val();
    var color = app.currentUser.get('color');

    //make sure it isn't empty
    if (message != '') {

        //send the message
        socket.emit('chatMessage', from, message, color);

        //inc the count
        app.currentUser.set('messagecount', app.currentUser.get('messagecount') + 1);
    }

    //clear
    $('#m').val('').focus();

    //done
    return false;
}

//let others know we started typing
function notifyTyping() {
    socket.emit('notifyUser', app.currentUser.get('username'));
}

//getting a chat message
socket.on('chatMessage', function (from, msg, color) {
    var from = (from == app.currentUser.get('username')) ? from + ' (Me)' : from;
    $('#messages').append('<li style="color:' + color + '">' + from + ': ' + msg + '</li>');
    $('#messageContainer').scrollTop($('#messageContainer').prop('scrollHeight'));
});

//got notification that someone is typing
socket.on('notifyUser', function (user) {
    if (user != app.currentUser.get('username')) {
        $('#notifyUser').text(user + ' is typing ...');
    }

    //only show for a little bit
    setTimeout(function () { $('#notifyUser').text(''); }, 3000);;
});

//once everything is loaded create the user
$(document).ready(function () {

    //let folks know we joined
    socket.emit('chatMessage', 'Alert', app.currentUser.get('username') + ' has joined!', app.currentUser.get('color') );
});