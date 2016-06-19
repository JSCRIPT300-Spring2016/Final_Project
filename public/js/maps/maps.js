'use strict';
module.exports = {
  initialize: function(address,callback)
  {
    var coordinates = [];
    var geocoder = new google.maps.Geocoder();
    geocoder.geocode({ 'address': address }, function(results, status)
    {
      if (status === google.maps.GeocoderStatus.OK)
      {
        coordinates[0]=parseFloat(results[0].geometry.location.lat()).toFixed(3);
        coordinates[1]=parseFloat(results[0].geometry.location.lng()).toFixed(3);
      }
      callback(coordinates);
    });
  }
};
