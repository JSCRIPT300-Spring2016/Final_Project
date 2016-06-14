/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
var app = app || {};

//create a new view at the top
app.homeView = Backbone.View.extend({
  el: '#renderHerePlease',

  render: function () {
    var viewHtml = 'welcome, chat with everyone here!';
    this.$el.empty().append(viewHtml);

    return this;
  }
});