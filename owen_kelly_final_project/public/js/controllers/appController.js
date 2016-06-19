var CidersView = require('../views/CidersView');
var Ciders = require('../collections/Ciders');
var Reviews = require('../collections/Reviews');
var ReviewsView = require('../views/ReviewsView');
var vent = require('../events/Vent');
var Review = require('../models/Review');
var Cider = require('../models/Cider');

var reviews = new Reviews();
var ciders = new Ciders();
var cidersView = new CidersView({ collection: ciders });
var jqxhr = ciders.fetch();

vent.on('ciderReviews:selected', showReviewsForCider);
vent.on('ciderReviews:deselected', showAllCiders);
vent.on('addReview', addReview);

function showAllCiders(){
  jqxhr.done(function(){
    cidersView.render();
  });
}

function showReviewsForCider(options){
  var cider = options.model;
  jqxhr.done(function(){
    if (options.cidername) {
      cider = ciders.findWhere({ cidername: options.cidername });
      $("#cider" + cider.id + " .showReviews").hide();
      $("#cider" + cider.id + " .hideReviews").show();
    }
    var reviewsView = new ReviewsView({ collection: reviews,
      el: "#cider" + cider.id, ciderId: cider.id });
    reviewsView.render();
  });
}

function addReview(options){
  var review = new Review({
    text: options.text,
    rating: options.rating,
    _cider: ciders.findWhere({ cider: options.ciderId  })
  });
  reviews.add(review);
  review.save();
}


module.exports = {
  showAllCiders: showAllCiders,
  showReviewsForCider: showReviewsForCider
};
