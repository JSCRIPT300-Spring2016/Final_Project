$(document).ready(function() {
	// attach a click event handler
	$('.my-thing').click(function () {
	
		// send a message to the server
		$.post('/do-stuff', {
			message: 'Hello world'
		}, function (response) {
		
			// render the response on the page
			$('.my-thing').html(response);
		});
	});
});