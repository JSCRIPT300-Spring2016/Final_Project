var Backbone = require('backbone');

var eventHandler = require('../events/eventHandler');

module.exports = Backbone.View.extend({
  el: '#buttons',
  render: function() {
    $(this.el).html('<p class="soon-to-plant"><a href="/planting">Planting Soon List</a></p>');
    // href="/planting"
    return this;
  },
  events: {
    'click .soon-to-plant': this.displaySoonToPlantPlants
  },
  displaySoonToPlantPlants: function(e) {
    e.preventDefault();
    alert('yo ho we triggered the event');
    var path  = ev.currentTarget.href.replace(location.origin, '/');
    eventHandler.trigger('soonToPlant', { path: path });
    alert('it works!');
  }
});
