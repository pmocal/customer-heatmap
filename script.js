// Adding 500 Data Points
var map, pointarray, heatmap;

var taxiData = [
{location: new google.maps.LatLng(37.87544,-122.25582), weight: 1232.00000}, {location: new google.maps.LatLng(37.86273,-122.26073), weight: 500.00000}, {location: new google.maps.LatLng(37.86807,-122.26946), weight: 5.00000}, {location: new google.maps.LatLng(37.86275,-122.25587), weight: 65.00000}, {location: new google.maps.LatLng(37.86724,-122.26619), weight: 300.20000}, {location: new google.maps.LatLng(37.86644,-122.26542), weight: 32.00000}, {location: new google.maps.LatLng(37.86747,-122.25139), weight: 200.00000}, {location: new google.maps.LatLng(37.86700,-122.25803), weight: 450.00000}, {location: new google.maps.LatLng(37.86737,-122.25743), weight: 20.00000}, {location: new google.maps.LatLng(37.86487,-122.25301), weight: 55.00000}, {location: new google.maps.LatLng(37.86448,-122.26550), weight: 70.00000}, {location: new google.maps.LatLng(37.86358,-122.25706), weight: 45.00000}, {location: new google.maps.LatLng(37.86794,-122.25082), weight: 32.00000}, {location: new google.maps.LatLng(37.87621,-122.25791), weight: 200.00000}, {location: new google.maps.LatLng(37.87699,-122.25832), weight: 600.00000}, {location: new google.maps.LatLng(37.87628,-122.25933), weight: 400.00000}, {location: new google.maps.LatLng(37.87130,-122.27719), weight: 10000.00000}, {location: new google.maps.LatLng(37.87176,-122.27379), weight: 2400.00000}];

function initialize() {
  var mapOptions = {
    zoom: 13,
    center: new google.maps.LatLng(37.868959,-122.266871),
    mapTypeId: google.maps.MapTypeId.SATELLITE
  };

  map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);

  var myMarker = new google.maps.Marker({
    position: new google.maps.LatLng(37.87144, -122.27188),
    map: map,
    title:"Weighted Mean Center Location"
  });

  var pointArray = new google.maps.MVCArray(taxiData);

  heatmap = new google.maps.visualization.HeatmapLayer({
    data: pointArray
  });

  heatmap.setMap(map);
}

function toggleHeatmap() {
  heatmap.setMap(heatmap.getMap() ? null : map);
}

function changeGradient() {
  var gradient = [
    'rgba(0, 255, 255, 0)',
    'rgba(0, 255, 255, 1)',
    'rgba(0, 191, 255, 1)',
    'rgba(0, 127, 255, 1)',
    'rgba(0, 63, 255, 1)',
    'rgba(0, 0, 255, 1)',
    'rgba(0, 0, 223, 1)',
    'rgba(0, 0, 191, 1)',
    'rgba(0, 0, 159, 1)',
    'rgba(0, 0, 127, 1)',
    'rgba(63, 0, 91, 1)',
    'rgba(127, 0, 63, 1)',
    'rgba(191, 0, 31, 1)',
    'rgba(255, 0, 0, 1)'
  ]
  heatmap.set('gradient', heatmap.get('gradient') ? null : gradient);
}

function changeRadius() {
  heatmap.set('radius', heatmap.get('radius') ? null : 20);
}

function changeOpacity() {
  heatmap.set('opacity', heatmap.get('opacity') ? null : 0.2);
}

google.maps.event.addDomListener(window, 'load', initialize);