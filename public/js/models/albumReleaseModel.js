'use strict';

var Backbone = require('backbone');

module.exports = Backbone.Model.extend({
	idAttribute: '_id',
    artist: '',
    title: '',
    date: '',
    label: ''
});
