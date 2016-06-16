var recordCollectionLength = localStorage.length;

var localCollection = [];

var getlocalCollection = function(){   //get collection from local storage 
    for(i = 0; i<recordCollectionLength; i++){
    var key = localStorage.key(i);
    var value = localStorage[key];
    value = JSON.stringify(value);
    value = value.slice(1, -1)  
    var prop = value.split(',');
      
      var rcRecordObj = {
        arist: prop[0],
        title: prop[1],
        year: prop[2],
        label: prop[3],
        sku: prop[4],
        sale: prop[5],
        copies: prop[6],
        added: prop[7],
        id: prop[8],
      };
      localCollection.push(rcRecordObj);
};//end for
};//end get collection

function getserverCollection(){
};

function putCollection(){//send collection to db
  localCollection
};


};

function addRecord(newRecord){//add item to db
  
};

  

function removeRecord(id){//remove item from db by :id
  
};

  




module.exports = {
  getlocalCollection: getlocalCollection,
  getseverCollection: getserverCollection,
  putCollection: putCollection,
  addrcRecord: addrcRecord,
  removercRecord: removercRecord,
};  
