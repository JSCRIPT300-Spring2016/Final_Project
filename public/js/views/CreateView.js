'use strict';
var Backbone = require('backbone');
var Entry = require('../models/models');
var Router = require('../router/router');
var router = new Router();

//Create View
module.exports = Backbone.View.extend(
  {
    el : '#entry',
    render : function()
    {
      var template = Handlebars.compile($('#entry-template').html());
      var html = template(
        {
	      creating: true,
		  entries: null,
		  activeEntryData: null
	    }
	  );
      this.$el.html(html);
    },
    events :
    {
      'click .add' : 'add'
    },
    add : function(event){
      var name = $('[name="name"]').val();
      var address = $('[name="address"]').val();
	  var description = $('[name="description"]').val();	      		
	  var entry  = new Entry(
	    {
          'address': address,
		  'name': name,
		  'description': description
	    }
	  );
      entry.save();
      router.navigate('',{ trigger:true });

      return false;
    }
  }
);
