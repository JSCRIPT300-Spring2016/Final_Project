'use strict';

var Backbone = require('backbone');
var RankingsItemView = require('./RankingsItemView');

module.exports = Backbone.View.extend({
  className: 'allRankingsList',
  template: TFT.ranking,
  _children: [],
  initialize: function () {

    this.rankings = this.collection.getRanking();
    this.rankings.sort();
  },
  render: function () {

    this.$el.append(this.template());
    this.rankings.forEach(function (ranking) {
      var itemView = new RankingsItemView({ ranking: ranking });
      this._children.push(itemView);
      this.$('.rankingsList').append(itemView.render().el);
    }, this);

    return this;
  },
  remove: function () {

    this._children.forEach(function (view) {
      view.remove();
    });
    Backbone.View.prototype.remove.call(this);
  }
});
