//backbone MVP Model View Presenter

var rcCollection = Backbone.Model.extend({
  initialize: function (){ //native property no value until valued
    return 'rcCollection created';
  },
  asString: function(){
    return JSON.stringify(this.toJSON());//toJSON is native backbone
  },

});

var RcRecord = rcCollection.extend();

var newRcRecord = new RcRecord({
  artist: 'George Thorogood',//these values will come from the html form fields
  title: 'Move it On Over',
  label: 'Rounder',
  year: '1980',
  sku: '654-987-654',
  copies: '7',
  sale: 'yes',
  added: new Date(),
  id: 'rcRecord123456789'
})

//var RcRecord = Backbone.Model.extend({
//  initialize: function (){ //native property no value until valued
//    return 'rcRecord created'
//  },
//  asString: function(){
//    return JSON.stringify(this.toJSON());//toJSON is native backbone
//  }
//});
//
//var rcRecord = new RcRecord({
//  artist: 'George Thorogood',//these values will come from the html form fields
//  title: 'Move it On Over',
//  label: 'Rounder',
//  year: '1980',
//  sku: '654-987-654',
//  copies: '7',
//  sale: 'yes',
//  id: 'rcRecord123456789'
//});

//rcRecord.set({///adds to existing object
//  genre: 'Blues',
//  format: '12 inch '
//});
$(function(){
//    newRcRecord.set('html', '<tr><td>' +  newRcRecord.artist + '</td><td>' + newRcRecord.id + '</td></tr>');
  newRcRecord.set('html', '<tr><td>' +  newRcRecord.artist +
                          '</td><td>' + newRcRecord.title +
                          '</td><td>' + newRcRecord.label +
                          '</td><td>' + newRcRecord.year +
                          '</td><td>' + newRcRecord.sku +
                          '</td><td>' + newRcRecord.copies +
                          '</td><td>' + newRcRecord.sale +
                          '</td><td>' + newRcRecord.added + 
                          '</td><td>' + newRcRecord.id +
                          '</td></tr>');
//    $('#catalogue').append(newRcRecord.get('html'));
  $('#catalogue').append(newRcRecord.escape('html'));
//  $('#catalogue').append(newRcRecord.escape('artist', 'title', 'label', 'year', 'sku', 'copies', 'sale', 'id'));
});



console.log(newRcRecord.asString());




