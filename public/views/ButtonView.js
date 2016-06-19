var Backbone = require('backbone');

var eventHandler = require('../events/eventHandler');

module.exports = Backbone.View.extend({
  el: '#buttons',
  render: function() {
    $(this.el).html('<div><a id="soon-to-plant" class="button" href="/planting">Planting Soon List</a></div><div><a class="soon-to-harvest button" href="/harvesting">Harvesting Soon</a></div><div><a class="all-plants button" href="/">All Plants</a></div>');
    // href="/planting"
    return this;
  },
  events: {
    'click #soon-to-plant': 'showSoonToPlantPlants'
  },
  showSoonToPlantPlants: function(e) {
    e.preventDefault();
    console.log('yo ho we triggered the event');
    var path  = e.currentTarget.href.replace(location.origin, '/');
    eventHandler.trigger('soonToPlant', { path: path });
  }
});
