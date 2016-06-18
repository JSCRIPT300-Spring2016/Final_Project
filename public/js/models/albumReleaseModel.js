'use strict';

var Backbone = require('backbone');

module.exports = Backbone.Model.extend({
	idAttribute: '_id',
	urlRoot: '/complete-library',
	defaults: {
	    artist: '',
	    title: '',
	    date: '',
	    label: '',
	    coverart: ''
	}
});
