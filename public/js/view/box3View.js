'use strict';

/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable comma-dangle */
/* eslint-disable no-console */

var Box3View = (function () {
  return Backbone.View.extend({
    initialize: function () {
      console.log('Box 3 View is initialized');
      this.render();
    },
    el: '#box_3',
    render: function () {
      this.listenTo(this.model, 'change', function () {
        console.log('BoxView Change detected');
        console.log('This model ' + this.model.at(1).attributes[3]);
        var newColor = this.model.at(1).attributes[3];
        var newValue = '3px solid ' + newColor;
        this.$el.css('border', newValue);

        return this;
      });
    }
  });
})();