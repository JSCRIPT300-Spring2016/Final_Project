'use strict';
var Backbone = require('backbone');
var Entries = require('../collections/collections');
var Entry = require('../models/models');
var Maps = require('../maps/maps');
var Router = require('../router/router');
var router = new Router();
//Display View
module.exports = Backbone.View.extend({
  el : '#entry',		             
  render : function(options){
    var entries = new Entries();  			             
	var that = this;			
	if(options){			          	
	  entries.fetch({
        success : function(entries){				                  
		  var entry =   entries.find(function(model){

		    return model.get('_id') == options.id;
		  }); 	
		  var template = Handlebars.compile($('#entry-template').html());
		  var html = null;                   
		  html = template({
		    viewing: true,
		    entries: entries.toJSON(),
		    activeEntryData: entry.toJSON()					                         
		  });			                               
		  that.$el.html(html);
		  var address = entry.get('address');
		  Maps.initialize(address,function(response){
		    var x = parseFloat(response[0]);
			var y = parseFloat(response[1]);
			var mapCanvas = $('.map')[0];
			var map = new google.maps.Map(mapCanvas, {
	          center: {lat: x, lng: y},
	          zoom: 8
	        });
			var marker = new google.maps.Marker({
			  position: {lat: x, lng: y},
			  map: map,
			  title: address
			});
		  });
		}
	  });
	}
	else{
	  entries.fetch({
	    success : function(entries){              
		  var template = Handlebars.compile($('#entry-template').html());
		  var html = template({
		    viewing: true,
			entries: entries.toJSON(),
			activeEntryData: {}
		  });			                      
		  that.$el.html(html);
		}
	  });
	}	                
  },
  events : {
    'click .new' : 'createEntry',
	'change select' : 'findActiveEntry',
    'click .edit' : 'editEntry',
    'click .delete' : 'deleteEntry'
  },
  createEntry : function(event){		              	
    router.navigate('new', {trigger:true});	              	
  },
  findActiveEntry : function(event){		           
    var id = $("select option:selected").val();	                          
    this.render({id : id});	              	 
  },
  editEntry : function(event){
    var that = this;
	var id = $(".id").val();	              	
    if(id != ''){
      router.navigate('edit', {trigger:true});
	}		
  },
  deleteEntry : function(event){		              	
    var that = this;
    var id = $(".id").val();
    if(id != ''){
	  var entry = new Entry({id : id});
	  entry.destroy({
	    success : function(){
		  that.render();	              					
		}
      });     
    }            	
  }
});
