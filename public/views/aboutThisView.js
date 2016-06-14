/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
var app = app || {};

//create a new view at the top
app.aboutThisView = Backbone.View.extend({
  el: '#renderHerePlease',

  render: function (e) {
    var viewHtml = 'created by samuel radakovitz';
    this.$el.empty().append(viewHtml);

    return this;
  }
});