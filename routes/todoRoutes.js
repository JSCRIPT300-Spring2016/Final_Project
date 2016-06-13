var express = require( 'express' );
var Todo = require( '../models/todoModel' );
var bodyParser = require( 'body-parser' );
var parseJSONBody = bodyParser.json();
var urlEncoded = bodyParser.urlencoded( { extended: false } );
var router = express.Router();

router.route( '/' )
  .get( function ( request, response ) {

    Todo.find( function ( error, todos ) {

      if ( error ) {
        response( 500 ).send( error );
      } else {
        response.send( todos );
      }
    });
  })
  .post( parseJSONBody, function ( request, response ) {
    var todo = new Todo( request.body );

    todo.save( function ( error, todo ) {

      if ( error ) {
        response.status( 500 ).send( error );
      } else {
        response.status( 201 ).send( todo );
      }
    });
  });

router.route( '/:id' )
  .delete( function ( request, response ) {

    var todoId = request.params.id;

    Todo.findByIdAndRemove( todoId, function ( error ) {

      if ( error ) {
        response.status( 500 ).send( error );
      } else {
        response.status( 204 ).send( 'removed' );
      }
    });
  });

module.exports = router;