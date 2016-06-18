var Backbone = require('backbone');

module.exports = Backbone.View.extend({
  el: '#add-plant-form',
  render: function() {
    $(this.el).html('<div><input name="name" type="text" placeholder="Plant name"/></div><div><input name="number" type="text" placeholder="Number of plants"/></div><div><input name="spaceNeeded" type="text" placeholder="Space per plant (in sq. ft.)"/></div><div><p>Date to plant</p><input name="datePlanted" type="date" placeholder="Date to plant"/></div><div><p>Date to harvest</p><input name="dateHarvested" type="date" placeholder="Date to harvest"/></div><div><input type="submit" value="Plant it!"></div>')
    return this;
  }
});
