'use strict';

/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

/* eslint-disable no-console */

var Person = Backbone.Model.extend({
  defaults: {
    name: 'John Doe',
    age: 30,
    occupation: 'worker',
  },

  validate: function(attrs) {
    // console.log(attrs); // this is everything in Person.JSON
    if ( attrs.age < 0 ) {
      return 'Age must be positive.';
    }
  },

  work: function () {
    return this.get('name') + 'is  working';
  },
});

var PersonView = Backbone.View.extend({
  tagName: 'li',
});