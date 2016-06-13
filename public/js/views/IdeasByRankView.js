'use strict';

var Backbone = require('backbone');
var IdeaItemView = require('./IdeaItemView');

module.exports = Backbone.View.extend({
  tagName: 'li',
  className: 'ideasList',
  template: TFT.ideasByRank,
  _children: [],
  initialize: function (options) {

    if (options) {
      this.ranking = options.ranking;
    }
  },
  render: function () {

    var data = { ranking: this.ranking };

    this.$el.append(this.template(data));
    this.collection.each(function (model) {
      var itemView = new IdeaItemView({ model: model });

      this._children.push(itemView);
      this.$('.ideasList').append(itemView.render().el);
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
