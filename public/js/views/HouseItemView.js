'use strict';

var _ = require('lodash');
var Backbone = require('backbone');
var vent = require('../events/Vent');

module.exports = Backbone.View.extend({
  tagName: 'li',
  className: 'houseList__item',
  /*global TFT:true*/
  /*eslint no-undef: "error"*/
  template: TFT.HouseListItem,

  events: {
    'click a': 'handleClick',
    'click .deleteHouse': 'handleButtonClick'
  },
  render: function () {
    var data = _.extend(this.model.attributes, this.model.id);
    this.$el.append(this.template(data));
	
    return this;
  },
  handleClick: function (ev) {
    ev.preventDefault();
    var path  = ev.currentTarget.href.replace(location.origin, '');
    vent.trigger('house:selected', { model: this.model, path: path });
  },
  handleButtonClick: function (ev) {
    ev.preventDefault();
    vent.trigger('deleteHouse:selected', { model: this.model });
  }
});