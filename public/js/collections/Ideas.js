'use strict';

var _ = require('lodash');
var Backbone = require('backbone');
var Idea = require('../models/Idea');

module.exports = Backbone.Collection.extend({
  model: Idea,
  url: '/api/ideas',
  getRanking: function() {
    return _.uniq(_.flatten(this.map(function(model) {
      return model.get('ranking');
    })));
  },
  getIdeasByRank: function(ranking) {
    return this.filter(function(model) {
      var ideaRankedList = model.get('ranking');

      return ideaRankedList.indexOf(ranking) > -1;
    });
  }
});
