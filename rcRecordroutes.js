var express = require('express');

var bodyParser = require('body-parser');

var urlEncoded = bodyParser.urlencoded({ extended: false });

var rcRecord = require('../models/rcRecordmodel');

var router = express.Router();

app.use(express.static('public'));

router.route('/')
  .get(function(request, response){  
  rcRecord.find('input', function(error, results){
    if(error){
      response.status(500).send(error);
    }else{
      response.send(results);
    }
  });
})

  .post(urlEncoded, function(request, response){
  var newrcRecord = new rcRecord(request.body);
    if(newrcRecord){
    newrcRecord.save(function(error, results){
      if(error){
        response.status(500).send(error);
    }else{
      response.status(201).send(results);
    }
    });
    }else{
        response.status(400).json('error creating record');
        }
  });
                                  
      
router.route('/:input')
  .get(function (request, response){
  var id = request.params.input;
  
  rcRecord.find({ input: { $in: [input] }}, function (error, results){
    if(error){
      response.status(500).send(results);
    }else{
      response.send(results);
    }
  
  
  });
})

  .delete(function(request, response){
    var id = request.params.id;
    
    rcRecord.findByIdAndRemove(id, function (error){
      if(error){
        response.status(500).send(error);
    }else{
      response.status(200).json('collection removed');
    }
    
    });
  });
    

module.exports = router;