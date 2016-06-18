'use strict';

/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

/* eslint-disable no-console */

var View = (function () {
  return Backbone.View.extend({
    initialize: function () {
      console.log('Score View is initialized');
      this.template = $('#list-template').children();
      this.render();
    },
    el: '#container',
    _children: [],
    events: {
      'click .remove': 'remove',
    },
    render: function () {
      console.log('In render' + this.model);
      this.listenTo(this.model, 'change', function () {
        console.log('Change detected');
        var highScore = 'Score: ' + this.model.at(1).attributes[4];
        // var highScore = player.get('highScore');
        this._children.push(highScore);
        this.$el.find('ul').append(highScore);
            //$('body').append(this.render().el);
      });
    },
    remove: function () {
      this.children.forEach(function (view) {
        view.remove();
      });
      Backbone.View.prototype.remove.call(this);
    },
  });
})();