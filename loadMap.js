var myCenter = new google.maps.LatLng(25.037525,121.563782);
var check = { "lat" : 25.037525, "lnt" : 121.563782 };
var map;

function initialize(){
  var mapProp = {
    center: myCenter,
    zoom: 10,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    disableDefaultUI: true
  };
  map = new google.maps.Map(document.getElementById("googleMap"), mapProp);

  var marker = markCenter(map);
  clickMarkerListener(map, marker.point, marker.info);
}

function markCenter(map) {
	var marker = makeMarker( check );
	var info = infoWindow( "fuck the world!!" )

	marker.setMap(map);
	info.open(map, marker);

	return {'point': marker, 'info': info};
}

function makeMarker(point) {
	return new google.maps.Marker({
		position: pointMagic( point )
	});
}

function pointMagic( point ) {
	return typeof(point.lat) == "function" ? point : new google.maps.LatLng(point.lat, point.lnt);
}

function infoWindow(text) {
	return new google.maps.InfoWindow({
		content: text
	});
}

function clickMarkerListener(map, marker, info){
	google.maps.event.addListener(marker, 'click', function(){
		info.open(map, marker);
	});
}

function alertName() {
	var fileList = document.getElementById("fileItem");
	var files = fileList.files;
	var file;

	alert(files.item(0).name);
};

google.maps.event.addDomListener(window, 'load', initialize);