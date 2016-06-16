'use strict';

var Backbone = require('backbone');
var IdeasView = require('./IdeasView');
var RankingsView = require('./RankingsView');
var IdeasByRankView = require('./IdeasByRankView');
var IdeaView = require('./IdeaView');
var Ideas = require('../collections/Ideas');

module.exports = Backbone.View.extend({
  showAllIdeas: function () {
    if (this.listView) {
      this.listView.remove();
    }
    this.listView = new IdeasView({ collection: this.collection });
    this.$el.append(this.listView.render().el);
  },
  showAllRankings: function () {
    if (this.listView) {
      this.listView.remove();
    }
    this.listView = new RankingsView({ collection: this.collection });
    this.$el.append(this.listView.render().el);
  },
  showIdeasByRank: function (ranking) {
    var filteredIdeas;

    if (this.listView) {
      this.listView.remove();
    }

    if (ranking) {
      filteredIdeas = new Ideas(this.collection.getIdeasByRank(ranking));
      this.listView = new IdeasByRankView({ collection: filteredIdeas,
         ranking: ranking });
      this.$el.append(this.listView.render().el);
    }
  },
  showIdea: function (model) {
    if (this.listView) {
      this.listView.remove();
    }

    if (model) {
      this.listView = new IdeaView({ model: model });
      this.$el.append(this.listView.render().el);
    }
  },
  showHome: function () {
    if (this.listView) {
      this.listView.remove();
    }
  }
});
