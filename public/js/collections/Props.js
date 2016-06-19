'use strict';

var _ = require('lodash');
var Backbone = require('backbone');
var FoodTruck = require('../models/Props');

module.exports = Backbone.Collection.extend({
  model: FoodTruck,
  url: '/props',
  getMdfProps: function () {
    return _.uniq(_.flatten(this.map(function (model) {
      return model.get('mdfProps');
    })));
  },
  getPropsByMdf: function (type) {
    return this.filter(function (model) {
      var foodTypeList = model.get('mdfProps');

      return foodTypeList.indexOf(type) > -1;
    });
  },
  getDueThisWeek: function () {
    return _.uniq(_.flatten(this.map(function (model) {
      return model.get('dueThisWeek');
    })));
  },
  getFoodTypes: function () {
    return _.uniq(_.flatten(this.map(function (model) {
      return model.get('foodType');
    })));
  },
  getTrucksByFoodType: function (type) {
    return this.filter(function (model) {
      var foodTypeList = model.get('foodType');

      return foodTypeList.indexOf(type) > -1;
    });
  },
  getFoodTrucksByDay: function (day) {
    return this.filter(function (model) {
      var schedule = model.get('schedule');

      return schedule.indexOf(day) > -1;
    });
  }
});
