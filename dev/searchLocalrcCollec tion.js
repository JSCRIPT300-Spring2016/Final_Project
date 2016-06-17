var searchInput = $('search').val();

function getArtist(searchInput){
  return collectrcRecords.find(function(record){
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