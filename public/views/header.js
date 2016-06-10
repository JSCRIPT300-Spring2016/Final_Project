// var Header = Backbone.View.extend({
//   // el: '#header',
//   initialize: function(){
//     this.render();
//   },
//   render: function(){
//     $(this.el).html('<h1 class="header">Plan n\' Plant App</h1><h4 class="subheading">Organizing Your Oregano</h4>');
//   }
// });
//
// // var header = new Header();
 var Backbone = require('backbone');

 module.exports = Backbone.View.extend({
   el: '#header',
  //  template: TFT.header,
   render: function() {
    //  this.$el.append(this.template());
    $(this.el).html('<h1 class="header">Plan n\' Plant App</h1><h4 class="subheading">Organizing Your Oregano</h4>');
     return this;
   }
 })
