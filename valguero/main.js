var src_layer= [['Cave','Пещера',[25, 41]],
		['Base','место под базу',[25, 41]],
		['Artefact','Артефакт',[25, 25]],
		['Note','Заметка',[25, 41]],
		['Metal','Металл',[25, 41]],
		['Crystal','Кристаллы',[25, 41]],
];
//   alert( src_layer[0][2] );
var layer = {};
var overlays = {};			
for (var i in src_layer){
        var s = src_layer[i];	
	layer[s[0]] = new L.LayerGroup();
	overlays['<big>'+s[1]+'</big>'] = layer[s[0]];
 };

var markerIconTypes = [];
for (var i in src_layer){
	var icon = src_layer[i][0];
	markerIconTypes[i] = L.icon({
		iconUrl: 'images/markers/' + icon.replace(/ /g, "") + '.png',
		iconSize: src_layer[i][2],
		iconAnchor: [12, 30],
		popupAnchor: [0, -30]
		});
	};

L.CRS.Wall = L.extend({}, L.CRS.Simple, {
	transformation: new L.Transformation(1, 0, 1, 0)});	

var map = L.map('map', {
		crs: L.CRS.Wall,
		minZoom: 3,
		maxZoom: 8,
//	        layers: [layerBaseMap, layer["Cave"], layer["Base"], layer["Artefact"], layer["Note"]]
		}).setView([50, 50], 3);


// вторая горизонталь


var bounds = [[-2.4,-1.4], [101.3,99.5]];
var layerBaseMap = L.imageOverlay('Valguero_Map.jpg', bounds).addTo(map);
map.fitBounds(bounds);


var hash = new L.Hash(map);
L.control.layers(overlays).addTo(map);




 var array_markers= [
[1, 10, 10, "10-10",''],
[1, 90, 90, "90-90",''],
[2, 46.8, 87.2, "Артефакт",' темно крюки'],
[0, 34.1, 51.5, "Пещера с артефактом",' Утеса, лут, крюки, лава'],
[0, 38.0, 57.5, "Аберация",''],
[5, 84.8, 40.1, "Металл",''],

];
for (var i in array_markers){// перебераем строки
   var s = array_markers[i];	// s текущая строка
   L.marker({lat:s[1],lng:s[2]},{title:s[3]+" "+s[1]+" "+s[2],icon:markerIconTypes[s[0]]})
//   .bindPopup("<font color='#636363'>"+s[3]+"</font><br>"+s[4]+"<br> "+s[1]+" "+s[2]).addTo(map);

   .bindPopup("<font color='#636363'>"+s[3]+"</font><br>"+s[4]+"<br> "+s[1]+" "+s[2]).addTo(map);
//alert( s[0] );layer["Cave"]
};



/*
// ===============================================================
        	map.on('click', function (e) {
	            var lat = Math.abs(e.latlng.lat);
	            var long = e.latlng.lng;
	
	            message = "<font color='#636363'> GPS:</font> <br>" + //mlat(lat).toFixed(1) + " - "  + mlon(long).toFixed(1)
				 +"<br><font color='#636363'> Lat: "+ lat + " <br> Lon: "+ long + "</font>"
				 ;
//	            message = "<font color='#636363'>РЁРёСЂРѕС‚Р°:</font> " + Math.round(llat) +" <font color='#636363'>|</font> " + 	                       "<font color='#636363'>Р”РѕР»РіРѕС‚Р°:</font> " + Math.round(llong) +
//				"<br><font color='#636363'> Lat: "+ lat.toFixed(3) + " <br> Lon: "+ long + '</font>';
	            popup.setLatLng(e.latlng).setContent(message).openOn(map);
		});
// ===============================================================*		
*/

//	Для Coordinates
	var c = new L.Control.Coordinates();
	c.addTo(map);
	function onMapClick(e) {c.setCoordinates(e);}
	map.on('click', onMapClick);	
