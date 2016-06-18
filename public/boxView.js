'use strict';

/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

/* eslint-disable no-console */

var Box0View = Backbone.View.extend({
  initialize: function () {
    console.log('Box 0 View is initialized');
    this.render();
  },
  el: '#box_0',
  render: function () {
    this.listenTo(this.model, 'change', function () {
      console.log('BoxView Change detected');
      console.log('This model ' + this.model.at(1).attributes[0]);
	  var newColor = this.model.at(1).attributes[0];
	  var newValue = '3px solid ' + newColor;
	  this.$el.css('border', newValue);

	  return this;
    });
  },
});
var Box1View = Backbone.View.extend({
  initialize: function () {
    console.log('Box 1 View is initialized');
    this.render();
  },
  el: '#box_1',
  render: function () {
    this.listenTo(this.model, 'change', function () {
      console.log('BoxView Change detected');
      console.log('This model ' + this.model.at(1).attributes[1]);
	  var newColor = this.model.at(1).attributes[1];
	  var newValue = '3px solid ' + newColor;
	  this.$el.css('border', newValue);
		     
	  return this;
    });
  },
});
var Box2View = Backbone.View.extend({
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
  },
});
var Box3View = Backbone.View.extend({
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
  },
});