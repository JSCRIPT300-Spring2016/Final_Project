$(document).ready(init);

function init(){
  
  var recordCollectionLength = localStorage.length;
  $('#listcount').append('You have ' + recordCollectionLength + ' SKU in this collection');
  
  var start = new Date().getFullYear();
  var end = 1910;
  for(var year = start ; year >=end; year--){
      $('#yearInput').append('<option>' + year + '</option>');
    };
  
  
  function deleteRecord(evt){
    var thisId = $('#idDrop option:selected').text();
    var remove = "rcRecord" + thisId;
    localStorage.removeItem (remove);
    location.reload();
  };  
  var deleteButton = $('#deletebutton');
  deleteButton.off();
  deleteButton.on('click', deleteRecord);
  
  
  function updateRecord(evt){
    $('#adddisplay').removeClass();
    $('#adddisplay').addClass('show');
    var thisId = $('#idDrop option:selected').text();
    var storageId = "rcRecord" + thisId;
    var record = localStorage.getItem(storageId);
    var value = JSON.stringify(record);
    value = value.slice(1, -1);
    var prop = value.split(',');
    
    var artist = $('#artistInput').val(prop[0]);
    var title = $('#titleInput').val(prop[1]);
    var year = $('#yearInput').val(prop[2]);
    var label = $('#labelInput').val(prop[3]);
    var sku = $('#skuInput').val(prop[4]);
    var copies = $('#copiesInput').val(prop[5]);
    var selling = $('#sellingInput').val(prop[6]);
    var id = $('#idInput').val(thisId);
    
    localStorage.removeItem('rcRecord' + thisId);
    commitNewRecord;
  };//end update
  var updateButton = $('#updatebutton');
  updateButton.off();
  updateButton.on('click', updateRecord);

  
  var searchInput = $('#searchInput').val();
  function searchRecord(evt){
  };//end search 
  var searchButton = $('#search').on('click', searchRecord);
  
  
  function clearLocal(evt){
    localStorage.clear();
    location.reload();
  };//end clear
  var clearButton = $('#clearlocal').on('click', clearLocal);
  
  
  function showAddDisplay(evt){
    $('#adddisplay').removeClass('hide');
    $('#adddisplay').addClass('show');
    var genId = (Math.random()) * (Math.pow(10, 17));
    $('#idInput').val(genId);
  };
  var addButton = $('#addnew').on('click', showAddDisplay);
  
  
  function hideAddDisplay(evt){
    $('#adddisplay').removeClass('show');
    $('#adddisplay').addClass('hide');
  };  
  var hideDisplayButton = $('#hidepanel').on('click', hideAddDisplay);
  
  
  function syncServer(){
    console.log("synced");
  };//end sync  
  var autoSync = ('#autosync');
    
  
  function displayCollection(){    
    for(i = 0; i<recordCollectionLength; i++){
    var key = localStorage.key(i);
    var value = localStorage[key];
    value = JSON.stringify(value);
    value = value.slice(1, -1)  
    var prop = value.split(',');
    $('#catalogue').append('<tr><td>' + prop[0] +
                          '</td><td>' + prop[1] +
                          '</td><td>' + prop[2] +
                          '</td><td>' + prop[3] +
                          '</td><td>' + prop[4] +
                          '</td><td>' + prop[5] +
                          '</td><td>' + prop[6] +
                          '</td><td>' + prop[7] +
                          '</td><td>' + prop[8] +
                          '</td></tr>'
                          );
      
      $('#idDrop').append('<option>' + prop[8] + '</option>');
    };
  };//end display collection
  
  if (recordCollectionLength > 0){
    displayCollection();
  };
  
  function commitNewRecord(evt){
    
    var d = new Date();
    var month = d.getMonth();
    var date = d.getDate();
    var year = d.getFullYear();
    var dateString = year.toString().substr(2,2);
    var addDate = month+"-"+date+"-"+year;
    
    var addArtist = $('#artistInput').val();
    var addTitle = $('#titleInput').val();
    var addLabel = $('#labelInput').val();    
    var addYear = $('#yearInput').val();
    var addSku = $('#skuInput').val();
    var addSelling = $('#saleInput').val();
    var addCopies = $('#copiesInput').val();
    var addId = $('#idInput').val();
    var recordProps = []; 
    
    recordProps.push(addArtist);
    recordProps.push(addTitle);
    recordProps.push(addYear);
    recordProps.push(addLabel);
    recordProps.push(addSku);
    recordProps.push(addSelling);
    recordProps.push(addCopies);
    recordProps.push(addDate);
    recordProps.push(addId);
    
    localStorage.setItem("rcRecord" + addId, recordProps);
    
    if (autoSync.checked){
      syncServer;
    };
    
    location.reload();
   
  };//end commitNewRecord();
  var commitButton = $('#commitnew');
  commitButton.off();
  commitButton.on('click', commitNewRecord);
  
  
  function logListResult(data){
      alert('Data received');
  };
 
 displayCollection;
};//end init

