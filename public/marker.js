var Marker = function(coords, map) {

  this.marker = new google.maps.Marker({ 
    position: coords, 
    map: map 
  });

}

Marker.prototype = {

  // addListener: function(click, function() {
  //   map.setZoom(8);
  // });

}
