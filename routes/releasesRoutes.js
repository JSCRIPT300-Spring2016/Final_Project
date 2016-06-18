var express = require('express');
var Releases = require('../mongooseModel/mongooseReleasesModel');

var router = express.Router();

router.route('/complete-library')
  .get(function (request, response) {
	Releases.find(function (error, results) {
		if (error) {
			response.status(500).send(error);
		} else {
			response.send(results);
		}
	});
  });
router.route('/all-art')
  .get(function (request, response) {
	var beginningHtml = '<img src="';
	var endingHtml = '"</img>';
	Releases.find(function (error, results) {
		if (error) {
			response.status(500).send(error);
		} else {
			var result = results.map(function(a) {
				return a.coverart;
			});
			response.send(result);
		}
	});
  });

module.exports = router;