/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

var app = app || {};

//create a new chat user
app.currentUser = new app.chatUser();

//start up the router
var fpRouter = new app.Router();

//turn on history
Backbone.history.start();
