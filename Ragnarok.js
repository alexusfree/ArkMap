var src_layer= [['marker','marker',[23, 32],[11, 27]],
		['Cave','Пещера',[23, 32],[11, 27]],
		['Base','место под базу',[23, 32],[11, 27]],
		['Artefact','Артефакт',[23, 32],[11, 27]],
		['Note','Заметка',[23, 32],[11, 27]],
		['Metal','Металл',[25, 28],[12, 28]],
		['Crystal','Кристаллы',[25, 28],[12, 28]],
		['interest','Достопримечательность',[23, 32],[11, 27]],
		['Oil','Нефть',[25, 28],[12, 28]],
		['lut','Лут',[23, 32],[11, 27]],
];
//   alert( src_layer[0][2] );
var layer = {};
var overlays = {};
var layerSearch={};		
for (var i in src_layer){
        var s = src_layer[i];	
	layer[s[0]] = new L.LayerGroup();
	overlays['<big>'+s[1]+'</big>'] = layer[s[0]];
	layerSearch[i]=layer[s[0]];
 };

var layerSearch= L.layerGroup([
	layer["marker"], layer["Cave"], layer["Base"], layer["Artefact"], layer["Note"], layer["Metal"], layer["Crystal"], layer["interest"], layer["Oil"], layer["lut"]]);


var markerIconTypes = [];
for (var i in src_layer){
	var icon = src_layer[i][0];
	markerIconTypes[i] = L.icon({
		iconUrl: 'images/markers/' + icon.replace(/ /g, "") + '.png',
		iconSize: src_layer[i][2],
		iconAnchor: src_layer[i][3],
		popupAnchor: [0, -30]
		});
	};

L.CRS.Wall = L.extend({}, L.CRS.Simple, {
	transformation: new L.Transformation(1, 0, 1, 0)});	


var layerBaseMap = L.imageOverlay('map/Ragnarok_Map.png', [[-2,-1.7], [101,99.4]]);
var layerBaseMap2 = L.imageOverlay('map/Ragnarok_Topographic_Map.jpg', [[-2,-2], [102,102]]);



var map = L.map('map', {
		crs: L.CRS.Wall,
		minZoom: 3,
		maxZoom: 8,
	        layers:[layerBaseMap, layerSearch],
	        noWrap: true,
	fullscreenControl: true,
	fullscreenControlOptions: {position: 'topleft' },
		}).setView([50, 50], 3);


var baseMaps = { 

	'Основная карта': layerBaseMap,
	'Топографичечкая карта': layerBaseMap2,
};

//map.fitBounds([[0,0], [100,100]]);



L.control.layers(baseMaps, overlays).addTo(map);
var hash = new L.Hash(map);

	
var controlSearch = new L.Control.Search({
		position:'topright',
		layer: layerSearch,		
//		layer: [overlays],
		initial: false,
		zoom: 5,
		marker: false,
		textErr: 'Место не найдено',
		textCancel: 'Сбросить',			
		textPlaceholder: 'Поиск…       ',	
	});
map.addControl( controlSearch );



 var array_markers= [
 /*[0, 10, 10, "test ",''],
[0, 20, 20, "test ",''],
[0, 90, 90, "test ",''],
[0, 80, 80, "test ",''],
*/
[0, 35.0,  85.7, 'Красный обелиск ', ''],
[0, 18.1,  17.3, 'Синий обелиск ', ''],
[0, 57.0,  38.1, 'Зелёный обелиск ', ''],

[1, 10.5,  24.0, 'Логово Маски ', ''],
[1, 20.4,  24.0, 'Пиратская пещера ', ''],
[1, 19.1,  23.0, 'Пиратская пещера (водный вход) ', ''],
[1, 21.5,  24.6, 'Пиратская пещера (воздушный вход) ', ''],
[1, 20.0,  27.5, 'Пещера джунглей Олуфа ', ''],
[1, 20.5,  27.5, 'Пещера джунглей Олуфа ', ''],
[1, 24.1,  27.7, 'Пещера Кури ', ''],
[1, 23.4,  28.1, 'Пещера Кури ', ''],
[1, 24.4,  28.5, 'Пещера Кури ', ''],
[1, 18.2,  28.4, 'Вход в пруд в джунглях ', ''],
[1, 18.7,  27.8, 'Вход в подземелье джунглей ', ''],
[1, 21.5,  26.9, 'Лава Элементаль Арена (внутри джунглей Dungeon) ', ''],
[1, 20.5,  29.1, 'Пещера каньона Скеллет ', ''],
[1, 22.7,  30.4, 'Пещера Камака ', ''],
[1, 26.2,  26.9, 'Запретный грот ', ''],
[1, 26.9,  27.4, 'Запретный грот ', ''],
[1, 24.6,  25.0, 'Головоломка Обезьяны ', ''],
[1, 35.4,  24.1, 'Metal Cave за добываемыми камн¤ми ', ''],
[1, 30.2,  34.9, 'Ледниковая пещера ', ''],
[1, 30.2,  34.0, 'Ледниковая пещера ', ''],
[1, 30.8,  32.8, 'Ледниковая пещера ', ''],
[1, 31.5,  33.0, 'Ледниковая пещера ', ''],
[1, 33.1,  33.7, 'Ледниковая пещера ', ''],
[1, 31.1,  35.6, 'Ледниковая пещера ', ''],
[1, 31.3,  33.7, 'Вход через водопад (внутри ледниковой пещеры) ', ''],
[1, 30.9,  37.8, 'Frozen Dungeon воздушный вход ', ''],
[1, 33.6,  40.5, 'Арена Королевы Ледяного Червя (Frozen Dungeon) ', ''],
[1, 17.7,  42.4, 'Хищные пещеры вход на склоне холма ', ''],
[1, 21.1,  40.4, 'Замок плотоядных пещер с привидениями вход через воду ', ''],
[1, 21.8,  42.2, 'Вход в Кингс-Галч плотоядных пещер ', ''],
[1, 20.4,  33.1, 'Опаловая пещера ', ''],
[1, 21.8,  33.3, 'Вход в бухту Викингов из Водотоннелей ', ''],
[1, 21.9,  40.7, 'Вход в пещеру Watertunnels Wide Lightless ', ''],
[1, 20.3,  45.0, 'Вход в Узкую Светлую Пещеру Водотоннелей ', ''],
[1, 27.9,  47.4, 'Пещера Водопадов Уайтдув ', ''],
[1, 32.4,  44.2, 'Бобровая пещера ', ''],
[1, 35.4,  50.1, 'Пещера Центрального Каньона 1 ', ''],
[1, 36.2,  49.2, 'Пещера Центрального Каньона 1 ', ''],
[1, 36.7,  39.6, 'Пещера Центрального Каньона 2 ', ''],
[1, 41.4,  42.2, 'Пещера Центрального Каньона 3 ', ''],
[1, 35.0,  38.4, 'Пещера Центрального Каньона 4 ', ''],
[1, 36.0,  37.8, 'Пещера Центрального Каньона 4 ', ''],
[1, 36.0,  36.9, 'Пещера Центрального Каньона 4 ', ''],
[1, 46.3,  34.4, 'Пещера Хидана ', ''],
[1, 45.3,  32.5, 'Пещера Хидана ', ''],
[1, 23.0,  86.4, 'Скрытая пещера ', ''],
[1, 19.8,  78.3, 'Шотландская хрустальная пещера ', ''],
[1, 18.2,  78.8, 'Пещера Шотландского водопада ', ''],
[1, 21.4,  77.2, 'Пещера Натазьель Шпили ', ''],
[1, 34.2,  78.9, 'Пещера Редвуд Редвуд ', ''],
[1, 34.6,  77.8, 'Пещера Редвуд Редвуд ', ''],
[1, 35.9,  77.0, 'Пещера Редвуд Редвуд ', ''],
[1, 40.0,  62.7, 'Пещера Снежного Кристалла ', ''],
[1, 37.6,  58.9, 'Пещера Снежного Кристалла ', ''],
[1, 42.2,  56.5, 'Снежная пещера 2 ', ''],
[1, 24.9,  57.9, 'Туннель Вулкано ', ''],
[1, 25.0,  59.8, 'Туннель Вулкано ', ''],
[1, 19.6,  65.3, 'Грот Дракона ', ''],
[1, 17.8,  67.2, 'Туннель Дракона ', ''],
[1, 20.9,  67.8, 'Туннель Дракона ', ''],
[1, 24.0,  70.6, 'Туннель Дракона ', ''],
[1, 21.5,  68.8, 'Туннель Дракона ', ''],
[1, 26.4,  67.1, 'Пещера Фафнира ', ''],
[1, 25.9,  68.7, 'Пещера Фафнира ', ''],
[1, 25.6,  69.1, 'Пещера Фафнира ', ''],
[1, 57.5,  19.3, 'Шахтный ствол ', ''],
[1, 86.9,  39.1, 'Пещера Южного острова ', ''],
[1, 86.4,  38.9, 'Пещера Южного острова ', ''],
[1, 68.7,  42.0, 'Пещера Вверн ', ''],
[1, 72.7,  40.3, 'Арка Хрустальная пещера ', ''],
[1, 72.9,  41.8, 'Арка Хрустальная пещера ', ''],
[1, 69.0,  42.4, 'Арка Пещера ', ''],
[1, 69.8,  43.7, 'Арка Пещера ', ''],
[1, 69.9,  44.6, 'Арка Пещера ', ''],
[1, 68.6,  45.4, 'Арочная пещера ', ''],
[1, 68.1,  45.0, 'Арка Пещера ', ''],
[1, 85.8,  51.2, 'Пещера плато Fifer ', ''],
[1, 80.1,  61.8, 'Грот Джатеиш ', ''],
[1, 79.8,  63.2, 'Грот Джатеиш ', ''],
[1, 68.5,  61.2, 'Пещера Скрытых Источников I ', ''],
[1, 66.4,  60.8, 'Пещера Скрытых Источников II ', ''],
[1, 67.6,  61.3, 'Пещера Скрытых Источников II ', ''],


[3, 20.3, 46,'Артефакт Хитрости', ''],
[3, 21.5, 27.2,'Артефакт Охотника', ''],
[3, 23.7, 44.6,'Артефакт Неуязвимости', ''],
[3, 24.8, 24.7,'Артефакт Силы', ''],
[3, 33.6, 43.4,'Артефакт Стаи', ''],
[3, 35.2, 78.3,'Артефакт Жестокости', ''],
[3, 47.4, 2.3,'Артефакт Пожирателя', ''],
[3, 47.7, 78.9,'Артефакт Небесного лорда', ''],
[3, 48, 78.6,'Артефакт Мудрости', ''],
[3, 49, 79.5,'Артефакт Бродяги', ''],
[3, 48.9, 79.4,'Артефакт Целостности', 'вход 51.6 77.5'],

];

for (var i in array_markers){// перебераем строки
   var s = array_markers[i];	// s текущая строка
   L.marker({lat:s[1],lng:s[2]},{title:s[3]+" "+s[1]+" "+s[2],icon:markerIconTypes[s[0]]})
   .bindPopup("<font color='#636363'>"+s[3]+"</font><br>"+s[4]+"<br> "+s[1]+" "+s[2]).addTo(layer[src_layer[s[0]][0]]);
};


//	Для Coordinates
	var c = new L.Control.Coordinates();
	c.addTo(map);
	function onMapClick(e) {c.setCoordinates(e);}
	map.on('click', onMapClick);	