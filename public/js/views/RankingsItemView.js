'use strict';

var Backbone = require('backbone');
var vent = require('../events/Vent');

module.exports = Backbone.View.extend({
  tagName: 'li',
  className: 'rankingsList__item',
  template: TFT.rankingListItem,
  initialize: function (options) {

    if (options) {
      this.ranking = options.ranking;
    }
  },
  events: {
    'click a': 'handleClick'
  },
  render: function () {

    var data = { ranking: this.ranking };

    this.$el.append(this.template(data));

    return this;
  },
  handleClick: function (ev) {

    ev.preventDefault();
    var path  = ev.currentTarget.href.replace(location.origin, '');
    vent.trigger('ranking:selected', { ranking: this.ranking, path: path });
  }
});
