//backbone MVP Model View Presenter


var RcRecord = Backbone.Model.extend({
  initialize: function (){ //native property no value until valued
    return 'rcRecord created'
  },
  asString: function(){
    return JSON.stringify(this.toJSON());//toJSON is native backbone
  }
});

var rcRecord = new RcRecord({
  artist: 'George Thorogood',//these values will come from the html form fields
  title: 'Move it On Over',
  label: 'Rounder',
  year: '1980',
  sku: '654-987-654',
  copies: '7',
  sale: 'yes',
  id: 'rcRecord123456789'
});

//rcRecord.set({///adds to existing object
//  genre: 'Blues',
//  format: '12 inch '
//});
$(function(){
  $('#catalogue').append(rcRecord.escape('artist', 'title', 'label', 'year', 'sku', 'copies', 'sale', 'id'));
});



console.log(rcRecord.asString());




