var LatLngList;

function inputJasonGod(){
	var fileList = document.getElementById("fileItem").files;
	var file = fileList.item(0);
	
	fr = new FileReader();
	fr.onload = getJason;
	fr.readAsText(file);

	function getJason(e) {
		buffer = e.target.result
		// alert(buffer);
		LatLngList = JSON.parse(buffer);
		loadPoints(LatLngList.points);
	} 
}

function loadPoints(PointsList) {
	for (var i = PointsList.length - 1; i >= 0; i--) {
		var marker = makeMarker( PointsList[i] );
		
		marker.setMap(map);
	};
}

 document.querySelector("#fileItem").onchange = inputJasonGod;

var text = '{ "employees" : [' +
'{ "firstName":"John" , "lastName":"Doe" },' +
'{ "firstName":"Anna" , "lastName":"Smith" },' +
'{ "firstName":"Peter" , "lastName":"Jones" } ]}';


// LatLngList = JSON.parse(text);