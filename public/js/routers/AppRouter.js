'use strict';
var Backbone = require('backbone');

module.exports = Backbone.Router.extend({
  routes: {
    '': 'home',
    'ideas': 'showAllIdeas',
    'ideas/:name': 'showIdea',
    'idea_ranking': 'showAllRankings',
    'idea_ranking/:ranking': 'showIdeasByRanking'
  },
  initialize: function (options) {
    options || {};
    this.appController = options.appController;
  },
  home: function () {
    this.appController.showHome();
  },
  showAllIdeas: function () {
    this.appController.showAllIdeas();
  },
  showIdea: function (name) {
    this.appController.showIdea({ name: name });
  },
  showAllRankings: function () {
    this.appController.showAllRankings();
  },
  showIdeasByRanking: function (ranking) {
    this.appController.showIdeasByRanking({ ranking: ranking });
  }
});
