var src_layer= [['marker-icon','marker',[25, 41]],
		['Cave','Пещера',[25, 41]],
		['Base','место под базу',[23, 32]],
		['Artefact','Артефакт',[23, 32]],
		['Note','Заметка',[23, 32]],
		['Metal','Металл',[25, 28]],
		['Crystal','Кристаллы',[25, 28]],
		['interest','Достопримечательность',[23, 32]],
		['Oil','Нефть',[25, 28]],
		['lut','Лут',[23, 32]],
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
[6, 84.8, 40.1, "Металл",''],

[3, 13.4, 72.7, 'Артефакт', 'Небесного лорда'],
[3, 14.5, 26.3, 'Артефакт', 'Хитрости'],
[3, 35.0, 52.2, 'Артефакт Утеса', 'Ящики с лутом, крюки, лава'],
[3, 47.7, 88.0, 'Артефакт', 'темно крюки'],
[3, 48.0, 58.9, 'Артефакт', ''],
[3, 48.7, 90.3, 'Артефакт', ''],
[3, 67.0, 89.1, 'Артефакт', 'Разрушителя'],
[3, 70.1, 39.2, 'Артефакт', 'Сила или стая'],
[3, 72.2, 36.5, 'Артефакт', 'Сила или стая'],
[3, 74.3, 35.8, 'Артефакт', 'Неуязвимости'],

[1, 8.9, 78.8, 'Вход в пещеру', ''],
[1, 9.3, 71.0, 'Вход в пещеру', ''],
[1, 15.5, 27.3, 'Вход в пещеру', ''],
[1, 30.8, 94.0, 'Вход в пещеру', 'Аберация'],
[1, 31.8, 9.3, 'Вход в пещеру', ''],
[1, 32.0, 8.3, 'Вход в пещеру', ''],
[1, 32.2, 92.4, 'Вход в пещеру', ''],
[1, 32.8, 9.4, 'Вход в пещеру', ''],
[1, 33.3, 10.3, 'Вход в пещеру', ''],
[1, 33.4, 9.6, 'Вход в пещеру', ''],
[1, 33.6, 9.1, 'Вход в пещеру', ''],
[1, 34.3, 51.4, 'Вход в пещеру', ''],
[1, 34.9, 89.7, 'Вход в пещеру', ''],
[1, 37.0, 90.9, 'Вход в пещеру', ''],
[1, 37.5, 90.3, 'Вход в пещеру', ''],
[1, 37.9, 57.4, 'Вход в пещеру Аберация', ''],
[1, 38.9, 89.3, 'Вход в пещеру', ''],
[1, 39.9, 89.9, 'Вход в пещеру', ''],
[1, 45.4, 34.0, 'Вход в пещеру', ''],
[1, 46.9, 87.5, 'Вход в пещеру', 'темно крюки'],
[1, 47.4, 75.7, 'Вход в пещеру', ''],
[1, 48.2, 76.0, 'Вход в пещеру', ''],
[1, 48.5, 75.6, 'Вход в пещеру', ''],
[1, 51.5, 86.3, 'Вход в пещеру', ''],
[1, 53.2, 12.6, 'Вход в пещеру', ''],
[1, 53.6, 87.8, 'Вход в пещеру', ''],
[1, 55.1, 13.8, 'Вход в пещеру', ''],
[1, 63.9, 73.3, 'Вход в пещеру', ''],
[1, 73.1, 40.6, 'Вход в пещеру Паучихи', 'Нужен противогаз'],
[1, 96.1, 20.6, 'Вход в пещеру', ''],

[0, 76.1, 17.1, 'Red Obelisk', ''],
[0, 09.3, 17.2, 'Blue Obelisk', ''],
[0, 48.8, 76.1, 'Green Obelisk', '<img src="images/location/test.jpg" width="270" height="169">'],

[7, 14.4, 60.2, 'Достопримечательность', ''],
[7, 25.8, 42.0, 'Достопримечательность', ''],
[7, 32.3, 52.8, 'Достопримечательность', ''],
[7, 33.0, 21.3, 'Достопримечательность', ''],
[7, 33.3, 42.2, 'Достопримечательность', ''],
[7, 33.5, 46.2, 'Достопримечательность', ''],
[7, 34.5, 89.3, 'Достопримечательность', ''],
[7, 36.4, 82.8, 'Достопримечательность', ''],
[7, 36.8, 81.5, 'Достопримечательность', ''],
[7, 37.9, 90.4, 'Достопримечательность', ''],
[7, 40.3, 25.9, 'Достопримечательность', ''],
[7, 40.5, 67.2, 'Достопримечательность', ''],
[7, 43.4, 84.5, 'Достопримечательность', ''],
[7, 44.9, 82.1, 'Достопримечательность', ''],
[7, 45.6, 68.7, 'Достопримечательность', ''],
[7, 49.6, 10.0, 'Достопримечательность', ''],
[7, 54.6, 52.8, 'Достопримечательность', ''],
[7, 60.4, 9.8, 'Достопримечательность', ''],
[7, 77.6, 49.6, 'Достопримечательность', ''],
[7, 79.8, 67.0, 'Достопримечательность', ''],
[7, 80.5, 18.3, 'Достопримечательность', ''],
[7, 84.6, 17.1, 'Достопримечательность', ''],
[7, 85.5, 18.3, 'Достопримечательность', ''],
[7, 86.1, 90.5, 'Достопримечательность', ''],
[7, 87.8, 11.1, 'Достопримечательность', ''],
[7, 88.2, 36.3, 'Достопримечательность', ''],
[7, 91.0, 87.9, 'Достопримечательность', ''],
[7, 91.5, 29.8, 'Достопримечательность', ''],
[7, 95.7, 39.6, 'Достопримечательность', ''],

[9, 48.7, 35.6, 'Лут', ''],
[9, 36.2, 18.6, 'Лут', ''],
[9, 39.8, 17.9, 'Лут', ''],
[9, 35.7, 33.8, 'Лут', ''],
[9, 54.3, 30.6, 'Лут', ''],
[9, 46.2, 32.8, 'Лут', ''],
[9, 41.3, 37.2, 'Лут', ''],
[9, 39.8, 29.8, 'Лут', ''],
[9, 38.1, 25.0, 'Лут', ''],
[9, 34.2, 39.0, 'Лут', ''],

/*
[0, 94.7, 88.3, 'Гнездо Дейнонихус', ''],
[0, 94.5, 88.9, 'Гнездо Дейнонихус', ''],
[0, 92.2, 90.8, 'Гнездо Дейнонихус', ''],
[0, 91.9, 91.5, 'Гнездо Дейнонихус', ''],
[0, 91.2, 87.8, 'Гнездо Дейнонихус', ''],
[0, 91.2, 87.4, 'Гнездо Дейнонихус', ''],
[0, 90.8, 87.4, 'Гнездо Дейнонихус', ''],
[0, 90.8, 86.9, 'Гнездо Дейнонихус', ''],
[0, 90.6, 86.6, 'Гнездо Дейнонихус', ''],
[0, 90.5, 87.5, 'Гнездо Дейнонихус', ''],
[0, 90.1, 88.9, 'Гнездо Дейнонихус', ''],
[0, 90.1, 89.2, 'Гнездо Дейнонихус', ''],
[0, 90, 89.4, 'Гнездо Дейнонихус', ''],
[0, 89.6, 89.6, 'Гнездо Дейнонихус', ''],
[0, 96.2, 82.4, 'Гнездо Дейнонихус', ''],
[0, 96.1, 81.3, 'Гнездо Дейнонихус', ''],
[0, 95.4, 81.2, 'Гнездо Дейнонихус', ''],
[0, 95.6, 78.8, 'Гнездо Дейнонихус', ''],
[0, 91.9, 79, 'Гнездо Дейнонихус', ''],
[0, 91.8, 78.6, 'Гнездо Дейнонихус', ''],
[0, 91.5, 79.5, 'Гнездо Дейнонихус', ''],
[0, 90, 76.9, 'Гнездо Дейнонихус', ''],
[0, 89.3, 76.5, 'Гнездо Дейнонихус', ''],
[0, 88.9, 76.9, 'Гнездо Дейнонихус', ''],
[0, 85.7, 85.7, 'Гнездо Дейнонихус', ''],
[0, 85.4, 85.5, 'Гнездо Дейнонихус', ''],
[0, 85.2, 86.8, 'Гнездо Дейнонихус', ''],
[0, 84.8, 85.7, 'Гнездо Дейнонихус', ''],
[0, 84.6, 86.7, 'Гнездо Дейнонихус', ''],
[0, 83.8, 85.6, 'Гнездо Дейнонихус', ''],
[0, 83.7, 85, 'Гнездо Дейнонихус', ''],
[0, 78.7, 72.6, 'Гнездо Дейнонихус', ''],
[0, 75.4, 71.6, 'Гнездо Дейнонихус', ''],
[0, 72.3, 70.9, 'Гнездо Дейнонихус', ''],
[0, 72.1, 70.9, 'Гнездо Дейнонихус', ''],
[0, 71.7, 70.8, 'Гнездо Дейнонихус', ''],
[0, 75.4, 67.8, 'Гнездо Дейнонихус', ''],
[0, 75.3, 67.3, 'Гнездо Дейнонихус', ''],
[0, 75.6, 67.1, 'Гнездо Дейнонихус', ''],
[0, 76.5, 64.2, 'Гнездо Дейнонихус', ''],
[0, 76.5, 63.7, 'Гнездо Дейнонихус', ''],
[0, 77, 63.4, 'Гнездо Дейнонихус', ''],
[0, 77.3, 63.3, 'Гнездо Дейнонихус', ''],
[0, 74.6, 62.9, 'Гнездо Дейнонихус', ''],
[0, 74.6, 63.2, 'Гнездо Дейнонихус', ''],
[0, 74.1, 63, 'Гнездо Дейнонихус', ''],
[0, 72.7, 60.6, 'Гнездо Дейнонихус', ''],
[0, 73, 60.4, 'Гнездо Дейнонихус', ''],
[0, 73, 61, 'Гнездо Дейнонихус', ''],
[0, 72.7, 60.6, 'Гнездо Дейнонихус', ''],
[0, 73.2, 63.8, 'Гнездо Дейнонихус', ''],
[0, 73.3, 65, 'Гнездо Дейнонихус', ''],
[0, 72.7, 64.8, 'Гнездо Дейнонихус', ''],
[0, 72.4, 63.8, 'Гнездо Дейнонихус', ''],
[0, 70.4, 63.4, 'Гнездо Дейнонихус', ''],
[0, 70.3, 63.7, 'Гнездо Дейнонихус', ''],
[0, 69.7, 63.1, 'Гнездо Дейнонихус', ''],
[0, 73.9, 79.5, 'Гнездо Дейнонихус', ''],
[0, 73.6, 80.2, 'Гнездо Дейнонихус', ''],
[0, 77.8, 87.4, 'Гнездо Дейнонихус', ''],
[0, 76.8, 87.9, 'Гнездо Дейнонихус', ''],
[0, 77, 88.6, 'Гнездо Дейнонихус', ''],
[0, 80.4, 89.8, 'Гнездо Дейнонихус', ''],
[0, 80.8, 90.1, 'Гнездо Дейнонихус', ''],
[0, 80.6, 90.7, 'Гнездо Дейнонихус', ''],
[0, 81.3, 90.7, 'Гнездо Дейнонихус', ''],
[0, 81.3, 91.2, 'Гнездо Дейнонихус', ''],
[0, 82.2, 95.5, 'Гнездо Дейнонихус', ''],
[0, 82.3, 95, 'Гнездо Дейнонихус', ''],
[0, 83.2, 94.6, 'Гнездо Дейнонихус', ''],
[0, 83.3, 95.1, 'Гнездо Дейнонихус', ''],
[0, 83.2, 95.3, 'Гнездо Дейнонихус', ''],
[0, 70.4, 94.6, 'Гнездо Дейнонихус', ''],
[0, 70.4, 94.1, 'Гнездо Дейнонихус', ''],
[0, 69.7, 94, 'Гнездо Дейнонихус', ''],
[0, 69.3, 94.3, 'Гнездо Дейнонихус', ''],
[0, 68.5, 92.4, 'Гнездо Дейнонихус', ''],
[0, 68, 92.5, 'Гнездо Дейнонихус', ''],
[0, 67.4, 92.6, 'Гнездо Дейнонихус', ''],
[0, 68, 92.1, 'Гнездо Дейнонихус', ''],
[0, 67.8, 91.8, 'Гнездо Дейнонихус', ''],
[0, 67.6, 91.4, 'Гнездо Дейнонихус', ''],
[0, 67.3, 91.4, 'Гнездо Дейнонихус', ''],
[0, 59, 78.1, 'Гнездо Дейнонихус', ''],
[0, 58.9, 78.4, 'Гнездо Дейнонихус', ''],
[0, 58.5, 78.5, 'Гнездо Дейнонихус', ''],
[0, 55, 94.3, 'Гнездо Дейнонихус', ''],
[0, 54.7, 94.1, 'Гнездо Дейнонихус', ''],
[0, 54.6, 94.4, 'Гнездо Дейнонихус', ''],
[0, 52.9, 92.1, 'Гнездо Дейнонихус', ''],
[0, 52.9, 91.8, 'Гнездо Дейнонихус', ''],
[0, 52.6, 92, 'Гнездо Дейнонихус', ''],
[0, 50.7, 93.6, 'Гнездо Дейнонихус', ''],
[0, 50.4, 93.8, 'Гнездо Дейнонихус', ''],
[0, 50.5, 93.9, 'Гнездо Дейнонихус', ''],
[0, 47.4, 78.5, 'Гнездо Дейнонихус', ''],
[0, 47.1, 78.7, 'Гнездо Дейнонихус', ''],
[0, 47.1, 79.1, 'Гнездо Дейнонихус', ''],

[0, 7.4, 76.8, 'Гнездо виверны', ''],
[0, 7.6, 78.2, 'Гнездо виверны', ''],
[0, 7.7, 73.3, 'Гнездо виверны', ''],
[0, 7.9, 72.4, 'Гнездо виверны', ''],
[0, 08.8, 75.9, 'Гнездо виверны', ''],
[0, 08.8, 75.8, 'Гнездо виверны', ''],
[0, 08.9, 73.4, 'Гнездо виверны', ''],
[0, 08.6, 77.1, 'Гнездо виверны', ''],
[0, 09.5, 72.3, 'Гнездо виверны', ''],
[0, 09.6, 72, 'Гнездо виверны', ''],
[0, 11, 71.5, 'Гнездо виверны', ''],
[0, 11.8, 73, 'Гнездо виверны', ''],
[0, 11.1, 71.6, 'Гнездо виверны', ''],
[0, 11.8, 73, 'Гнездо виверны', ''],
[0, 12.3, 77.9, 'Гнездо виверны', ''],
[0, 12.5, 76.9, 'Гнездо виверны', ''],
[0, 12.2, 69.4, 'Гнездо виверны', ''],
[0, 12.2, 69.3, 'Гнездо виверны', ''],
[0, 12.4, 76.9, 'Гнездо виверны', ''],
[0, 12.3, 77.8, 'Гнездо виверны', ''],
[0, 13.2, 81.8, 'Гнездо виверны', ''],
[0, 13.1, 75, 'Гнездо виверны', ''],
[0, 13.3, 71.6, 'Гнездо виверны', ''],
[0, 13.2, 81.9, 'Гнездо виверны', ''],
[0, 13.1, 75, 'Гнездо виверны', ''],
[0, 14.9, 75.4, 'Гнездо виверны', ''],
[0, 14.4, 75.7, 'Гнездо виверны', ''],
[0, 14, 70.1, 'Гнездо виверны', ''],
[0, 14, 70, 'Гнездо виверны', ''],
[0, 14.9, 75.4, 'Гнездо виверны', ''],
[0, 15.3, 73, 'Гнездо виверны', ''],
[0, 15.5, 71.5, 'Гнездо виверны', ''],
[0, 16.4, 71.7, 'Гнездо виверны', ''],*/
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
