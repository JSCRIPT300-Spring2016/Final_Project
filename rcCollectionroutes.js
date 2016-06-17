var express = require('express');

var bodyParser = require('body-parser');

var urlEncoded = bodyParser.urlencoded({ extended: false });

var rcCollection = require('./models/rcCollectionmodel');


var router = express.Router();

router.route('/')
  .get(function(request, response){  
  rcCollection.find(function(error, results){
    if(error){
      response.status(500).send(error);
    }else{
      response.send(results);
    }
  });
})

  .post(urlEncoded, function(request, response){
  var newrcCollection = new rcCollection(request.body);
    if(newrcCollection){
    newrcCollection.save(function(error, results){
      if(error){
        response.status(500).send(error);
    }else{
      response.status(201).send(results);
    }
    });
    }else{
        response.status(400).json('error creating collection');
        }
  });
                                  
                                  
                                                

router.route('/:id')
  .get(function (request, response){
  var id = request.params.id;
  
  rcCollection.findById(id, function (error, results){
    if(error){
      response.status(500).send(results);
    }else{
      response.send(results);
    }
  });
})

  .delete(function(request, response){
    var id = request.params.id;
    
    rcCollection.findByIdAndRemove(id, function (error){
      if(error){
        response.status(500).send(error);
      }else{
      response.status(200).json('collection removed');
      }
    
    });
  });
    

module.exports = router;