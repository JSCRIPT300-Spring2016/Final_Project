//function getrcRecords(){
 // var recordCollectionLength = localStorage.length;
//  for(i = 0; i<recordCollectionLength; i++){
//    var key = localStorage.key(i);
//    var value = localStorage[key];
//    console.log(value);
//};

//function getCollection(){    
//    for(i = 0; i<recordCollectionLength; i++){
//    var key = localStorage.key(i);
//    var value = localStorage[key];
//    value = JSON.stringify(value);
//    value = value.slice(1, -1)  
//    var prop = value.split(',');
//      
//      var rcRecordObj = {
//        arist: prop[0],
//        title: prop[1],
//        year: prop[2],
//        label: prop[3],
//        sku: prop[4],
//        sale: prop[5],
//        copies: prop[6],
//        added: prop[7],
//        id: prop[8],
//      };
//      return rcRecordObj;
//};//end for
//};//end get collection
var searchInput = $('search').val();

function getArtist(searchInput){
  return getServerCollection.find(function(record){
    return record.artist === artist;
    
  });
};

function getTitle(searchInput){
// if(searchInput === record.title){
      var titleSearch = collectrcRecords.find(function(record){
      return record.title === title;
    })
  
};

function getYear(searchInput){};

function getLabel(searchInput){};

function getSku(searchInput){};

function getSale(searchInput){};

function getCopies(searchInput){};

function getAdded(searchInput){};

function getId(searchInput){};

module.exports = {
  getArtist:getArtist,
  getTitle:getTitle,
  getYear:getYear,
  getLabel:getLabel,
  getSku:getSku,
  getSale:getSale,
  getCopies:getCopies,
  getAdded:getAdded,
  getId:getId,
};