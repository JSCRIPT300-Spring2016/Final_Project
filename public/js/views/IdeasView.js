'use strict';

var Backbone = require('backbone');
var IdeaItemView = require('./IdeaItemView');
//var IdeaView = require('./IdeaView');

module.exports = Backbone.View.extend({
  className: 'allIdeasList',
  template: TFT.allIdeas,
  _children: [],
  render: function () {

    this.$el.append(this.template());
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
