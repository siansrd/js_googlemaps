moveOnClick = function(map) {
  var newCenter = { lat: 52.406822, lng: -1.519693 };
  map.googleMap.panTo(newCenter);
}

var initialize = function() {
  var container = document.getElementById('map');
  var center = { lat: 55.94716, lng: -3.20198 };
  var map = new Map(container, center, 10);
  map.addMarker(center);
  // map.addClickEvent();

  // Move Locations button
  var button = document.querySelector('button');
  button.onclick = moveOnClick(map);
}

window.onload = initialize;