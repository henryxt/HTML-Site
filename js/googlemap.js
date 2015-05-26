// googlemap JavaScript Document
function initialize() 
{
  var mapProp = 
  {
    zoom:16,
    mapTypeId:google.maps.MapTypeId.ROADMAP
  };
  var map= new google.maps.Map(document.getElementById("googleMap"), mapProp);
  
  navigator.geolocation.getCurrentPosition(function(position)
  {
    var geolocate = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
    map.setCenter(geolocate);
	var marker = new google.maps.Marker(
	{
		position:geolocate,
	});
	marker.setMap(map);
  });
}

function loadScript()
{
  var script = document.createElement("script");
  script.type = "text/javascript";
  script.src = "http://maps.googleapis.com/maps/api/js?key=&sensor=false&callback=initialize";
  document.body.appendChild(script);
}
window.onload = loadScript;