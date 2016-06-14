/* eslint-disable no-undef */
var app = app || {};

//variety of options
var animals = ['cat', 'dog', 'bunny', 'fox', 'snake', 'elephant', 'chicken'];
var colors = ['blue', 'red', 'green', 'navy', 'brown', 'fuchsia', 'purple', 'teal', 'maroon', 'olive'];

app.chatUser = Backbone.Model.extend({

  defaults: {

        //set the default to zero for messages sent
    messagecount: 0
  },

  initialize: function () {

        //get a animal and color
    this.set('animal', animals[Math.floor(Math.random() * animals.length)]);
    this.set('color', colors[Math.floor(Math.random() * colors.length)]);

        //set the user name
    this.set('username', this.get('color') + ' ' + this.get('animal'));
  }

});

