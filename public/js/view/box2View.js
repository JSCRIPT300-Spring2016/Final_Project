'use strict';

/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable comma-dangle */
/* eslint-disable no-console */

// var Box2View = Backbone.View.extend({
var Box2View = (function () {
  return Backbone.View.extend({
    initialize: function () {
      console.log('Box 2 View is initialized');
      this.render();
    },
    el: '#box_2',
    render: function () {
      this.listenTo(this.model, 'change', function () {
        console.log('BoxView Change detected');
        console.log('This model ' + this.model.at(1).attributes[2]);
        var newColor = this.model.at(1).attributes[2];
        var newValue = '3px solid ' + newColor;
        this.$el.css('border', newValue);

        return this;
      });
    }
  });
})();