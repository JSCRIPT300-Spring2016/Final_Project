var express = require('express');

var serverModule = require('./serverModule');

var router = express.Router();

app.use(express.static('public'));

router.route('/')
  .get(function(request, response){  
  var serverCollection = serverModule.getserverCollection();
  
  response.send(serverCollection);
});

  .post(function(request, response){
  var localCollection = serverModule.getlocalCollection;
  
  response.status(201).send(localCollection);
});

router.route('/:id')
  .get(function (request, response){
  var record = serverModule.getserverCollection(request.params.id)
  
  response.send(record);
});

  .delete(function(request, response){
    var id = request.params.id;
    
    serverModule.removercRecord(id);
    
    response.status(200).send('rcRecord ' + id + ' has been removed.');
});

module.exports = router;