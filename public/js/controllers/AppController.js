'use strict';

var ResultsView = require('../views/ResultsView');
var Ideas = require('../collections/Ideas');
var vent = require('../events/Vent');

var ideas = new Ideas();
var resultsView = new ResultsView({
  el: '#results',
  collection: ideas
});
var jqxhr = ideas.fetch();

vent.on('allIdeas:selected', showAllIdeas);
vent.on('ranking:selected', showAllRankings);
vent.on('ranking:selected', showIdeasByRank);
vent.on('idea:selected', showIdea);
vent.on('home:selected', showHome);


function showHome() {
  jqxhr.done(function() {
    resultsView.showHome();
  });
}

function showAllIdeas() {
  jqxhr.done(function() {
    resultsView.showAllIdeas();
  });
}

function showIdea(options) {
  var model = options.model;

  jqxhr.done(function() {
    if (options.ideaName) {
      model = ideas.findWhere({
        ideaName: options.ideaName
      });
    }
    resultsView.showIdea(model);
  });
}

function showAllRankings() {
  jqxhr.done(function() {
    resultsView.showAllRankings();
  });
}

function showIdeasByRank(options) {
  jqxhr.done(function() {
    resultsView.showIdeasByRank(options.ranking);
  });
}

module.exports = {
  showHome: showHome,
  showAllIdeas: showAllIdeas,
  showIdea: showIdea,
  showAllRankings: showAllRankings,
  showIdeasByRank: showIdeasByRank
};
