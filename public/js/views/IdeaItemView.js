'use strict';

var _ = require('lodash');
var Backbone = require('backbone');
var vent = require('../events/Vent');

module.exports = Backbone.View.extend({
  tagName: 'li',
  className: 'ideasList__item',
  template: TFT.ideaListItem,
  events: {
    'click a': 'handleClick'
  },
  render: function () {
    var data = _.extend(this.model.attributes, this.model.id);

    this.$el.append(this.template(data));

    return this;
  },
  handleClick: function (ev) {

    ev.preventDefault();
    var path  = ev.currentTarget.href.replace(location.origin, '');
    vent.trigger('idea:selected', { model: this.model, path: path });
  }
});
