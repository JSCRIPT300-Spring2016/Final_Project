'use strict';

/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

/* eslint-disable no-console */

var View = Backbone.View.extend({
  initialize: function () {
    console.log('Score View is initialized');
    this.template = $('#list-template').children();
    this.render();
  },
  el: '#container',
  render: function () {
    console.log('In render' + this.model);
    this.listenTo(this.model, 'change', function () {
      console.log('Change detected');
      var highScore = 'Score: ' + this.model.at(1).attributes[4];
      // var highScore = player.get('highScore');
      console.log('High Score ' + highScore);
      this.$el.find('ul').append(highScore);
      //$('body').append(this.render().el);
    });
  },
});