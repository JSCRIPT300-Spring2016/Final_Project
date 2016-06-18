'use strict';

/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

/* eslint-disable no-console */

var totalView = Backbone.View.extend({
  initialize: function () {
    console.log('Total View is initialized');
    this.template = $('#total-template').children();
    this.render();
  },
  el: '#total',
  render: function () {
    console.log('Total render' + this.model);
    this.listenTo(this.model, 'change', function () {
      console.log('Total detected');
      var totalScore = 'Total: ' + this.model.at(1).attributes[5];
      // var highScore = player.get('highScore');
      console.log('Total score ' + totalScore);
      this.$el.find('ul').append(totalScore);
      //$('body').append(this.render().el);
    });
  },
});