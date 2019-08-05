
			L.Projection.NoWrap = {
			    project: function (latlng) {
			        return new L.Point(latlng.lng, latlng.lat);
			    },
			
			    unproject: function (point, unbounded) {
			        return new L.LatLng(point.y, point.x, true);
			    }
			};
			
			L.CRS.Direct = L.Util.extend({}, L.CRS, {
			    code: 'Direct',
			
			    projection: L.Projection.NoWrap,
			    transformation: new L.Transformation(1, 0, 1, 0)
			});
			
			
		        var map = L.map('map',{worldCopyJump: false, crs: L.CRS.Direct}).setView([0.5, 0.5], 2);
		        L.tileLayer('http://space.ark-survival.net/map/{z}/{x}/{y}.png', {
		            minZoom: 1,
		            maxZoom: 6,
		            attribution: 'ARK: The Island',
		            tms: true,
		            continuousWorld: false,
		            noWrap: true,
		            detectRetina: true
		        }).addTo(map);
		        
		        
		    var lastClickedX;
			var lastClickedY;
			var popup = L.popup();

			
			function numonly(myfield, e, dec)
			{
				var key;
				var keychar;
				
				if (window.event)
				   key = window.event.keyCode;
				else if (e)
				   key = e.which;
				else
				   return true;
				keychar = String.fromCharCode(key);
				
				// control keys
				if ((key==null) || (key==0) || (key==8) || 
				    (key==9) || (key==13) || (key==27) )
				   return true;
				
				// numbers
				else if ((("0123456789").indexOf(keychar) > -1))
				   return true;
				
				// decimal point jump
				else if (dec && (keychar == "."))
				   {
				   myfield.form.elements[dec].focus();
				   return false;
				   }
				else
				   return false;
			}

			function rlat(mlat)
			{
				return (mlat - 8) / 84.0;
			}
			
			function rlon(mlon)
			{
				return (mlon - 10) / 79.5;
			}
			
			function mlat(lat)
			// Lat to GPS
			{
				return lat * 84.0 + 8;
			}
			
			function mlon(lon)
			{
				return lon * 79.5 + 10;
			}

			function Glat(mlat)
			{
				return (mlat - 8) / 84.0;
			}
			
			function Glon(mlon)
			{
				return (mlon - 10) / 79.5;
			}
			
			
			function getAObj(obj,name)
			{
				for(e in obj)
				{
					if(obj[e].name == name)
						return obj[e].value;
				}
				
				return 0;
			}
			
			
			
			function iconpref(value)
			{
				document.getElementById("iconprev").style.backgroundImage = "url("+markerIconTypes[value].options.iconUrl+")";
			}
			
// +++++++++++++++++++++++++++++++
        	map.on('click', function (e) {
	            var lat = Math.abs(e.latlng.lat);
	            var long = e.latlng.lng;

	            var llat = mlat(lat);
	            var llong = mlon(long);
	
	            message = "<font color='#636363'>Широта:</font> " + mlat(lat).toFixed(2) +" <font color='#636363'>|</font> " + "<font color='#636363'>Долгота:</font> " + mlon(long).toFixed(2) +
				"<br><font color='#636363'> Lat: "+ lat + " <br> Lon: "+ long + "</font>";

//	            message = "<font color='#636363'>Широта:</font> " + Math.round(llat) +" <font color='#636363'>|</font> " + "<font color='#636363'>Долгота:</font> " + Math.round(llong) +
//				"<br><font color='#636363'> Lat: "+ lat.toFixed(3) + " <br> Lon: "+ long + '</font>';
	            popup.setLatLng(e.latlng).setContent(message).openOn(map);

				});
        	
        	var mapIcons = [];
			mapIcons[0] = "Pin";
			mapIcons[1] = "Dungeon";
			mapIcons[2] = "Home";
			mapIcons[3] = "Target";
			mapIcons[4] = "Spawn";
			mapIcons[5] = "Enemy";
			mapIcons[6] = "Note";
			mapIcons[7] = "Carnivore";
			mapIcons[8] = "Herbivore";
			mapIcons[9] = "Berry";
			mapIcons[10] = "Metal";
			mapIcons[11] = "Wood";
			mapIcons[12] = "Mountain";
			mapIcons[13] = "Cave";
			mapIcons[14] = "Underwater";
			mapIcons[15] = "Obelisk";
			
			var markerIconTypes = [];
        	for (var i in mapIcons)
			{
			    var icon = mapIcons[i];
			        // make the icon while we are here
			        markerIconTypes[i] = L.icon({
			            iconUrl: 'map/images/' + icon.replace(/ /g, "") + '.png',
			            iconSize: [25, 41],
			            iconAnchor: [12, 30],
			            popupAnchor: [0, -30]
			        });
			}


//		var a = arr_markers[i];
//		var fullname  = a.nameRU+' ('+a.name+')';
//		//fullname = fullname+' ['+a.x+' ,'+a.y+']';
//		var fullpop  = Icon[a.type].name+': '+a.nameRU+' ('+a.name+')<br>'+a.title;
//		L.marker([(a.x),a.y],{title:fullname,icon:Icon[a.type]} ).bindPopup(fullpop).addTo(layer[a.type]);


 
 var label_layer= [
[0,0,'тест',1],
//[20,20,'тест 20',2],
[75.6,60.5,"Заметка #7 ???",6],
[44.4,23.7,">Заметка #10 ???",6],		
[89.2,24.4,"Заметка #13 ???",6],		

		
[75.8,78.2,"Досье: Ахатина lat  ",6],
[87.5,51.5,"Досье: Аммонит lat  ",6],
[24.6,40.1,"Досье: Удильщик lat  ",6],
[15.8,26.7,"Досье: Анкилозавр lat  ",6],
[18.7,42.8,"Досье: Археоптерикс lat  ",6],
[21.6,53.9,"Досье: Аргентавис lat  ",6],		

];

 for (var i = 0; i < label_layer.length; i++) {// перебераем строки
   var s = label_layer[i];	// s текущая строка
   L.marker({lat:Glat(s[0]),lng:Glon(s[1])},{title:s[2]+" "+s[0]+" "+s[1],icon:markerIconTypes[s[3]]} )
   .bindPopup("<font color='#636363'>"+s[2]+" lat: "+s[0]+" lon: "+s[1]+"</font>").addTo(map);
	
 //alert( 'Всем привет!' +s[0]+" "+s[1]+" "+s[2] );
	};
 

//L.marker([0.1,0.1],{title:"fullname",icon:markerIconTypes[6]} ).bindPopup("bindPopup").addTo(map);
	
 

		
	

//L.marker({lat:Glat(75.6),lng:Glon(60.5)},{title:"Заметка #7 ??? lat 75.6, lon 60.5",icon:markerIconTypes[6]} ).bindPopup("<font color='#636363'>Заметка #7 ??? lat 75.6, lon 60.5</font>").addTo(map);
var markers = new Array();
	
/*
var newMarker;
newMarker = L.marker({lat:  Glat(75.6), lng: Glon(60.5)},{icon: markerIconTypes[6]});
newMarker.bindPopup("<font color='#636363'>Заметка #7 ??? lat 75.6, lon 60.5</font>");
newMarker.addTo(map); 


var newMarker;
newMarker = L.marker({lat:  Glat(44.4), lng: Glon(23.7)},{icon: markerIconTypes[6]});
newMarker.bindPopup("<font color='#636363'>Заметка #10 ??? lat 44.4, lon 23.7</font>");
newMarker.addTo(map);

var newMarker;
newMarker = L.marker({lat:  Glat(89.2), lng: Glon(24.4)},{icon: markerIconTypes[6]});
newMarker.bindPopup("<font color='#636363'>Заметка #13 ??? lat 89.2, lon 24.4</font>");
newMarker.addTo(map);

var newMarker;
newMarker = L.marker({lat:  Glat(90), lng: Glon(90)},{icon: markerIconTypes[6]});
newMarker.bindPopup("<font color='#636363'>Заметка #27 Nerva lat 56.2, lon 51.1</font>");
newMarker.addTo(map);

var newMarker;
newMarker = L.marker({lat:  Glat(90), lng: Glon(90)},{icon: markerIconTypes[6]});
newMarker.bindPopup("<font color='#636363'>Заметка #28 Nerva lat 47.9, lon 47.5</font>");
newMarker.addTo(map);

var newMarker;
newMarker = L.marker({lat:  Glat(90), lng: Glon(90)},{icon: markerIconTypes[6]});
newMarker.bindPopup("<font color='#636363'>Заметка #29 Nerva lat 71.2, lon 58</font>");
newMarker.addTo(map);

var newMarker;
newMarker = L.marker({lat:  Glat(90), lng: Glon(90)},{icon: markerIconTypes[6]});
newMarker.bindPopup("<font color='#636363'>Заметка #30 Nerva lat 43, lon 39.2</font>");
newMarker.addTo(map);


var newMarker;
newMarker = L.marker({lat:  Glat(90), lng: Glon(90)},{icon: markerIconTypes[6]});
newMarker.bindPopup("<font color='#636363'>Досье: Ахатина lat 75.8, lon 78.2</font>");
newMarker.addTo(map);

var newMarker;
newMarker = L.marker({lat:  Glat(90), lng: Glon(90)},{icon: markerIconTypes[6]});
newMarker.bindPopup("<font color='#636363'>Досье: Аммонит lat 87.5, lon 51.5</font>");
newMarker.addTo(map);

var newMarker;
newMarker = L.marker({lat:  Glat(90), lng: Glon(90)},{icon: markerIconTypes[6]});
newMarker.bindPopup("<font color='#636363'>Досье: Удильщик lat 24.6, lon 40.1</font>");
newMarker.addTo(map);

var newMarker;
newMarker = L.marker({lat:  Glat(90), lng: Glon(90)},{icon: markerIconTypes[6]});
newMarker.bindPopup("<font color='#636363'>Досье: Анкилозавр lat 15.8, lon 26.7</font>");
newMarker.addTo(map);

var newMarker;
newMarker = L.marker({lat:  Glat(90), lng: Glon(90)},{icon: markerIconTypes[6]});
newMarker.bindPopup("<font color='#636363'>Досье: Археоптерикс lat 18.7, lon 42.8</font>");
newMarker.addTo(map);

var newMarker;
newMarker = L.marker({lat:  Glat(90), lng: Glon(90)},{icon: markerIconTypes[6]});
newMarker.bindPopup("<font color='#636363'>Досье: Аргентавис lat 21.6, lon 53.9</font>");
newMarker.addTo(map);

var newMarker;
newMarker = L.marker({lat:  Glat(90), lng: Glon(90)},{icon: markerIconTypes[6]});
newMarker.bindPopup("<font color='#636363'>Досье: Артроплевра lat 14.2, lon 69.1</font>");
newMarker.addTo(map);

var newMarker;
newMarker = L.marker({lat:  Glat(90), lng: Glon(90)},{icon: markerIconTypes[6]});
newMarker.bindPopup("<font color='#636363'>Досье: Барионикс lat 30, lon 78.1</font>");
newMarker.addTo(map);

var newMarker;
newMarker = L.marker({lat:  Glat(90), lng: Glon(90)},{icon: markerIconTypes[6]});
newMarker.bindPopup("<font color='#636363'>Досье: Базилозавр lat 52.5, lon 17.7</font>");
newMarker.addTo(map);

var newMarker;
newMarker = L.marker({lat:  Glat(90), lng: Glon(90)},{icon: markerIconTypes[6]});
newMarker.bindPopup("<font color='#636363'>Досье: Гигантская пчела lat 70.7, lon 61.1</font>");
newMarker.addTo(map);

var newMarker;
newMarker = L.marker({lat:  Glat(90), lng: Glon(90)},{icon: markerIconTypes[6]});
newMarker.bindPopup("<font color='#636363'>Досье: Жаба lat 14.8, lon 81.4</font>");
newMarker.addTo(map);

var newMarker;
newMarker = L.marker({lat:  Glat(90), lng: Glon(90)},{icon: markerIconTypes[6]});
newMarker.bindPopup("<font color='#636363'>Досье: Бронтозавр lat 31.6, lon 17.1</font>");
newMarker.addTo(map);

var newMarker;
newMarker = L.marker({lat:  Glat(90), lng: Glon(90)},{icon: markerIconTypes[6]});
newMarker.bindPopup("<font color='#636363'>Досье: Карнотавр lat 33.3, lon 41</font>");
newMarker.addTo(map);

var newMarker;
newMarker = L.marker({lat:  Glat(90), lng: Glon(90)},{icon: markerIconTypes[6]});
newMarker.bindPopup("<font color='#636363'>Досье: Кастороидес lat 25.1, lon 71.8</font>");
newMarker.addTo(map);

var newMarker;
newMarker = L.marker({lat:  Glat(90), lng: Glon(90)},{icon: markerIconTypes[6]});
newMarker.bindPopup("<font color='#636363'>Досье: Халикотерий lat 31.3, lon 28.9</font>");
newMarker.addTo(map);

var newMarker;
newMarker = L.marker({lat:  Glat(90), lng: Glon(90)},{icon: markerIconTypes[6]});
newMarker.bindPopup("<font color='#636363'>Досье: Латимерия lat 37, lon 49.9</font>");
newMarker.addTo(map);

var newMarker;
newMarker = L.marker({lat:  Glat(90), lng: Glon(90)},{icon: markerIconTypes[6]});
newMarker.bindPopup("<font color='#636363'>Досье: Компсогнат lat 41.2, lon 49.2</font>");
newMarker.addTo(map);

var newMarker;
newMarker = L.marker({lat:  Glat(90), lng: Glon(90)},{icon: markerIconTypes[6]});
newMarker.bindPopup("<font color='#636363'>Досье: Деодон lat 88.1, lon 53</font>");
newMarker.addTo(map);

var newMarker;
newMarker = L.marker({lat:  Glat(90), lng: Glon(90)},{icon: markerIconTypes[6]});
newMarker.bindPopup("<font color='#636363'>Досье: Диметродон lat 28.5, lon 74.2</font>");
newMarker.addTo(map);

var newMarker;
newMarker = L.marker({lat:  Glat(90), lng: Glon(90)},{icon: markerIconTypes[6]});
newMarker.bindPopup("<font color='#636363'>Досье: Диморфодон lat 26.6, lon 70.6</font>");
newMarker.addTo(map);

var newMarker;
newMarker = L.marker({lat:  Glat(90), lng: Glon(90)},{icon: markerIconTypes[6]});
newMarker.bindPopup("<font color='#636363'>Досье: Диплокаулус lat 27.6, lon 82.6</font>");
newMarker.addTo(map);

var newMarker;
newMarker = L.marker({lat:  Glat(90), lng: Glon(90)},{icon: markerIconTypes[6]});
newMarker.bindPopup("<font color='#636363'>Досье: Диплодок lat 25.1, lon 13.5</font>");
newMarker.addTo(map);

var newMarker;
newMarker = L.marker({lat:  Glat(90), lng: Glon(90)},{icon: markerIconTypes[6]});
newMarker.bindPopup("<font color='#636363'>Досье: Свирепый медведь lat 40.4, lon 83.8</font>");
newMarker.addTo(map);

var newMarker;
newMarker = L.marker({lat:  Glat(90), lng: Glon(90)},{icon: markerIconTypes[6]});
newMarker.bindPopup("<font color='#636363'>Досье: Лютоволк lat 42.5, lon 20.8</font>");
newMarker.addTo(map);

var newMarker;
newMarker = L.marker({lat:  Glat(90), lng: Glon(90)},{icon: markerIconTypes[6]});
newMarker.bindPopup("<font color='#636363'>Досье: Додо lat 56.7, lon 21.4</font>");
newMarker.addTo(map);

var newMarker;
newMarker = L.marker({lat:  Glat(90), lng: Glon(90)},{icon: markerIconTypes[6]});
newMarker.bindPopup("<font color='#636363'>Досье: Дедикурус lat 47, lon 27.5</font>");
newMarker.addTo(map);

var newMarker;
newMarker = L.marker({lat:  Glat(90), lng: Glon(90)},{icon: markerIconTypes[6]});
newMarker.bindPopup("<font color='#636363'>Досье: Скарабей lat 16.5, lon 85</font>");
newMarker.addTo(map);

var newMarker;
newMarker = L.marker({lat:  Glat(90), lng: Glon(90)},{icon: markerIconTypes[6]});
newMarker.bindPopup("<font color='#636363'>Досье: Дунклеостей lat 44, lon 55.2</font>");
newMarker.addTo(map);

var newMarker;
newMarker = L.marker({lat:  Glat(90), lng: Glon(90)},{icon: markerIconTypes[6]});
newMarker.bindPopup("<font color='#636363'>Досье: Электрофорус lat 36.4, lon 81.4</font>");
newMarker.addTo(map);

var newMarker;
newMarker = L.marker({lat:  Glat(90), lng: Glon(90)},{icon: markerIconTypes[6]});
newMarker.bindPopup("<font color='#636363'>Досье: Эквус lat 63.6, lon 33.4</font>");
newMarker.addTo(map);

var newMarker;
newMarker = L.marker({lat:  Glat(90), lng: Glon(90)},{icon: markerIconTypes[6]});
newMarker.bindPopup("<font color='#636363'>Досье: Ракоскорпион lat 44.1, lon 49</font>");
newMarker.addTo(map);

var newMarker;
newMarker = L.marker({lat:  Glat(90), lng: Glon(90)},{icon: markerIconTypes[6]});
newMarker.bindPopup("<font color='#636363'>Досье: Галлимим lat 45.6, lon 62.3</font>");
newMarker.addTo(map);

var newMarker;
newMarker = L.marker({lat:  Glat(90), lng: Glon(90)},{icon: markerIconTypes[6]});
newMarker.bindPopup("<font color='#636363'>Досье: Гиганотозавр lat 44, lon 66.4</font>");
newMarker.addTo(map);

var newMarker;
newMarker = L.marker({lat:  Glat(90), lng: Glon(90)},{icon: markerIconTypes[6]});
newMarker.bindPopup("<font color='#636363'>Досье: Гигантопитек lat 26.6, lon 23.6</font>");
newMarker.addTo(map);

var newMarker;
newMarker = L.marker({lat:  Glat(90), lng: Glon(90)},{icon: markerIconTypes[6]});
newMarker.bindPopup("<font color='#636363'>Досье: Гесперорнис lat 81.7, lon 84.1</font>");
newMarker.addTo(map);

var newMarker;
newMarker = L.marker({lat:  Glat(90), lng: Glon(90)},{icon: markerIconTypes[6]});
newMarker.bindPopup("<font color='#636363'>Досье: Гиенодон lat 80.9, lon 81.9</font>");
newMarker.addTo(map);

var newMarker;
newMarker = L.marker({lat:  Glat(90), lng: Glon(90)},{icon: markerIconTypes[6]});
newMarker.bindPopup("<font color='#636363'>Досье: Ихтиорнис lat 72.8, lon 64.5</font>");
newMarker.addTo(map);

var newMarker;
newMarker = L.marker({lat:  Glat(90), lng: Glon(90)},{icon: markerIconTypes[6]});
newMarker.bindPopup("<font color='#636363'>Досье: Ихтиозавр lat 52.9, lon 79.8</font>");
newMarker.addTo(map);

var newMarker;
newMarker = L.marker({lat:  Glat(90), lng: Glon(90)},{icon: markerIconTypes[6]});
newMarker.bindPopup("<font color='#636363'>Досье: Игуанодон lat 62.4, lon 24.7</font>");
newMarker.addTo(map);

var newMarker;
newMarker = L.marker({lat:  Glat(90), lng: Glon(90)},{icon: markerIconTypes[6]});
newMarker.bindPopup("<font color='#636363'>Досье: Кайруку lat 42.5, lon 79.6</font>");
newMarker.addTo(map);

var newMarker;
newMarker = L.marker({lat:  Glat(90), lng: Glon(90)},{icon: markerIconTypes[6]});
newMarker.bindPopup("<font color='#636363'>Досье: Кентрозавр lat 78.3, lon 23.6</font>");
newMarker.addTo(map);

var newMarker;
newMarker = L.marker({lat:  Glat(90), lng: Glon(90)},{icon: markerIconTypes[6]});
newMarker.bindPopup("<font color='#636363'>Досье: Лидсихтис lat 83.1, lon 23.5</font>");
newMarker.addTo(map);

var newMarker;
newMarker = L.marker({lat:  Glat(90), lng: Glon(90)},{icon: markerIconTypes[6]});
newMarker.bindPopup("<font color='#636363'>Досье: Лиоплевродон lat 78.2, lon 24.4</font>");
newMarker.addTo(map);

var newMarker;
newMarker = L.marker({lat:  Glat(90), lng: Glon(90)},{icon: markerIconTypes[6]});
newMarker.bindPopup("<font color='#636363'>Досье: Мегалания lat 84.4, lon 84.1</font>");
newMarker.addTo(map);

var newMarker;
newMarker = L.marker({lat:  Glat(90), lng: Glon(90)},{icon: markerIconTypes[6]});
newMarker.bindPopup("<font color='#636363'>Досье: Стрекоза lat 54.3, lon 41.4</font>");
newMarker.addTo(map);

var newMarker;
newMarker = L.marker({lat:  Glat(90), lng: Glon(90)},{icon: markerIconTypes[6]});
newMarker.bindPopup("<font color='#636363'>Досье: Пиранья lat 68.1, lon 67.6</font>");
newMarker.addTo(map);

var newMarker;
newMarker = L.marker({lat:  Glat(90), lng: Glon(90)},{icon: markerIconTypes[6]});
newMarker.bindPopup("<font color='#636363'>Досье: Мегатерий lat 75, lon 21.4</font>");
newMarker.addTo(map);

var newMarker;
newMarker = L.marker({lat:  Glat(90), lng: Glon(90)},{icon: markerIconTypes[6]});
newMarker.bindPopup("<font color='#636363'>Досье: Микрораптор lat 48.5, lon 21.6</font>");
newMarker.addTo(map);

var newMarker;
newMarker = L.marker({lat:  Glat(90), lng: Glon(90)},{icon: markerIconTypes[6]});
newMarker.bindPopup("<font color='#636363'>Досье: Мосхопс lat 64.3, lon 17.4</font>");
newMarker.addTo(map);

var newMarker;
newMarker = L.marker({lat:  Glat(90), lng: Glon(90)},{icon: markerIconTypes[6]});
newMarker.bindPopup("<font color='#636363'>Досье: Оник lat 66.4, lon 19.7</font>");
newMarker.addTo(map);

var newMarker;
newMarker = L.marker({lat:  Glat(90), lng: Glon(90)},{icon: markerIconTypes[6]});
newMarker.bindPopup("<font color='#636363'>Досье: Выдра lat 35.7, lon 59.1</font>");
newMarker.addTo(map);

var newMarker;
newMarker = L.marker({lat:  Glat(90), lng: Glon(90)},{icon: markerIconTypes[6]});
newMarker.bindPopup("<font color='#636363'>Досье: Овираптор lat 58.9, lon 23.1</font>");
newMarker.addTo(map);

var newMarker;
newMarker = L.marker({lat:  Glat(90), lng: Glon(90)},{icon: markerIconTypes[6]});
newMarker.bindPopup("<font color='#636363'>Досье: Овис lat 73.3, lon 74.1</font>");
newMarker.addTo(map);

var newMarker;
newMarker = L.marker({lat:  Glat(90), lng: Glon(90)},{icon: markerIconTypes[6]});
newMarker.bindPopup("<font color='#636363'>Досье: Пахицефалозавр lat 65.5, lon 40.8</font>");
newMarker.addTo(map);

var newMarker;
newMarker = L.marker({lat:  Glat(90), lng: Glon(90)},{icon: markerIconTypes[6]});
newMarker.bindPopup("<font color='#636363'>Досье: Пахиринозавр lat 77.6, lon 20.7</font>");
newMarker.addTo(map);

var newMarker;
newMarker = L.marker({lat:  Glat(90), lng: Glon(90)},{icon: markerIconTypes[6]});
newMarker.bindPopup("<font color='#636363'>Досье: Парацератерий lat 65.1, lon 31.4</font>");
newMarker.addTo(map);

var newMarker;
newMarker = L.marker({lat:  Glat(90), lng: Glon(90)},{icon: markerIconTypes[6]});
newMarker.bindPopup("<font color='#636363'>Досье: Паразавр lat 71.5, lon 32.1</font>");
newMarker.addTo(map);

var newMarker;
newMarker = L.marker({lat:  Glat(90), lng: Glon(90)},{icon: markerIconTypes[6]});
newMarker.bindPopup("<font color='#636363'>Досье: Пегомастакс lat 82.2, lon 62.9</font>");
newMarker.addTo(map);

var newMarker;
newMarker = L.marker({lat:  Glat(90), lng: Glon(90)},{icon: markerIconTypes[6]});
newMarker.bindPopup("<font color='#636363'>Досье: Пелагорнис lat 71.3, lon 47.2</font>");
newMarker.addTo(map);

var newMarker;
newMarker = L.marker({lat:  Glat(90), lng: Glon(90)},{icon: markerIconTypes[6]});
newMarker.bindPopup("<font color='#636363'>Досье: Фиомия lat 72.5, lon 53.8</font>");
newMarker.addTo(map);

var newMarker;
newMarker = L.marker({lat:  Glat(90), lng: Glon(90)},{icon: markerIconTypes[6]});
newMarker.bindPopup("<font color='#636363'>Досье: Плезиозавр lat 68.4, lon 59.5</font>");
newMarker.addTo(map);

var newMarker;
newMarker = L.marker({lat:  Glat(90), lng: Glon(90)},{icon: markerIconTypes[6]});
newMarker.bindPopup("<font color='#636363'>Досье: Прокоптодон lat 72.3, lon 78.2</font>");
newMarker.addTo(map);

var newMarker;
newMarker = L.marker({lat:  Glat(90), lng: Glon(90)},{icon: markerIconTypes[6]});
newMarker.bindPopup("<font color='#636363'>Досье: Птеранодон lat 66.9, lon 76.8</font>");
newMarker.addTo(map);

var newMarker;
newMarker = L.marker({lat:  Glat(90), lng: Glon(90)},{icon: markerIconTypes[6]});
newMarker.bindPopup("<font color='#636363'>Досье: Скорпион lat 80.6, lon 61.9</font>");
newMarker.addTo(map);

var newMarker;
newMarker = L.marker({lat:  Glat(90), lng: Glon(90)},{icon: markerIconTypes[6]});
newMarker.bindPopup("<font color='#636363'>Досье: Пурловия lat 36.6, lon 34.9</font>");
newMarker.addTo(map);

var newMarker;
newMarker = L.marker({lat:  Glat(87.4), lng: Glon(23.3)},{icon: markerIconTypes[6]});
newMarker.bindPopup("<font color='#636363'>Досье: Кетцалькоатль lat 87.4, lon 23.3</font>");
newMarker.addTo(map);

var newMarker;
newMarker = L.marker({lat:  Glat(86.8), lng: Glon(25)},{icon: markerIconTypes[6]});
newMarker.bindPopup("<font color='#636363'>Досье: Раптор lat 86.8, lon 25</font>");
newMarker.addTo(map);

var newMarker;
newMarker = L.marker({lat:  Glat(90), lng: Glon(90)},{icon: markerIconTypes[6]});
newMarker.bindPopup("<font color='#636363'>Досье: Саблезуб lat 77.1, lon 26.1</font>");
newMarker.addTo(map);

var newMarker;
newMarker = L.marker({lat:  Glat(87.5), lng: Glon(52.5)},{icon: markerIconTypes[6]});
newMarker.bindPopup("<font color='#636363'>Досье: Саблезубый лосось lat 87.5, lon 52.5</font>");
newMarker.addTo(map);

var newMarker;
newMarker = L.marker({lat:  Glat(90), lng: Glon(90)},{icon: markerIconTypes[6]});
newMarker.bindPopup("<font color='#636363'>Досье: Саркозух lat 77.9, lon 42.9</font>");
newMarker.addTo(map);

var newMarker;
newMarker = L.marker({lat:  Glat(90), lng: Glon(90)},{icon: markerIconTypes[6]});
newMarker.bindPopup("<font color='#636363'>Досье: Спинозавр lat 75.7, lon 79.8</font>");
newMarker.addTo(map);

var newMarker;
newMarker = L.marker({lat:  Glat(90), lng: Glon(90)},{icon: markerIconTypes[6]});
newMarker.bindPopup("<font color='#636363'>Досье: Стегозавр lat 78.3, lon 79.1</font>");
newMarker.addTo(map);

var newMarker;
newMarker = L.marker({lat:  Glat(67.6), lng: Glon(48.5)},{icon: markerIconTypes[6]});
newMarker.bindPopup("<font color='#636363'><b>Досье: Теризинозавр lat 67.6, lon 48.5</b></font>");
newMarker.addTo(map);

var newMarker;
newMarker = L.marker({lat:  Glat(90), lng: Glon(90)},{icon: markerIconTypes[6]});
newMarker.bindPopup("<font color='#636363'>Досье: Сумчатый лев lat 32.4, lon 66.2</font>");
newMarker.addTo(map);

var newMarker;
newMarker = L.marker({lat:  Glat(90), lng: Glon(90)},{icon: markerIconTypes[6]});
newMarker.bindPopup("<font color='#636363'>Досье: Троодон lat 75, lon 78.8</font>");
newMarker.addTo(map);

var newMarker;
newMarker = L.marker({lat:  Glat(90), lng: Glon(90)},{icon: markerIconTypes[6]});
newMarker.bindPopup("<font color='#636363'>Досье: Шерстистый носорог lat 79.2, lon 32.3</font>");
newMarker.addTo(map);

var newMarker;
newMarker = L.marker({lat:  Glat(90), lng: Glon(90)},{icon: markerIconTypes[6]});
newMarker.bindPopup("<font color='#636363'>Досье: Ютираннус lat 73.9, lon 23.6</font>");
newMarker.addTo(map);

var newMarker;
newMarker = L.marker({lat:  Glat(90), lng: Glon(90)},{icon: markerIconTypes[6]});
newMarker.bindPopup("<font color='#636363'>Заметка: Заметка Хелены #5 lat 81.5, lon 44.7</font>");
newMarker.addTo(map);

var newMarker;
newMarker = L.marker({lat:  Glat(90), lng: Glon(90)},{icon: markerIconTypes[6]});
newMarker.bindPopup("<font color='#636363'>Заметка: Заметка Хелены #6 lat 77.2, lon 76.4</font>");
newMarker.addTo(map);

var newMarker;
newMarker = L.marker({lat:  Glat(90), lng: Glon(90)},{icon: markerIconTypes[6]});
newMarker.bindPopup("<font color='#636363'>Заметка: Заметка Хелены #7 lat 78.8, lon 27.7</font>");
newMarker.addTo(map);

var newMarker;
newMarker = L.marker({lat:  Glat(90), lng: Glon(90)},{icon: markerIconTypes[6]});
newMarker.bindPopup("<font color='#636363'>Заметка: Заметка Хелены #8 lat 61.2, lon 81.5</font>");
newMarker.addTo(map);

var newMarker;
newMarker = L.marker({lat:  Glat(90), lng: Glon(90)},{icon: markerIconTypes[6]});
newMarker.bindPopup("<font color='#636363'>Заметка: Заметка Хелены #10 lat 52.4, lon 59</font>");
newMarker.addTo(map);

var newMarker;
newMarker = L.marker({lat:  Glat(90), lng: Glon(90)},{icon: markerIconTypes[6]});
newMarker.bindPopup("<font color='#636363'>Заметка: Заметка Хелены #13 lat 55.2, lon 27.7</font>");
newMarker.addTo(map);

var newMarker;
newMarker = L.marker({lat:  Glat(90), lng: Glon(90)},{icon: markerIconTypes[6]});
newMarker.bindPopup("<font color='#636363'>Заметка: Заметка Хелены #14 lat 26.3, lon 62.9</font>");
newMarker.addTo(map);

var newMarker;
newMarker = L.marker({lat:  Glat(90), lng: Glon(90)},{icon: markerIconTypes[6]});
newMarker.bindPopup("<font color='#636363'>Заметка: Заметка Хелены #15 lat 34.1, lon 56.1</font>");
newMarker.addTo(map);

var newMarker;
newMarker = L.marker({lat:  Glat(90), lng: Glon(90)},{icon: markerIconTypes[6]});
newMarker.bindPopup("<font color='#636363'>Заметка: Заметка Хелены #16 lat 40.7, lon 26.1</font>");
newMarker.addTo(map);

var newMarker;
newMarker = L.marker({lat:  Glat(90), lng: Glon(90)},{icon: markerIconTypes[6]});
newMarker.bindPopup("<font color='#636363'>Заметка: Заметка Хелены #17 lat 76.8, lon 77.3</font>");
newMarker.addTo(map);

var newMarker;
newMarker = L.marker({lat:  Glat(90), lng: Glon(90)},{icon: markerIconTypes[6]});
newMarker.bindPopup("<font color='#636363'>Заметка: Заметка Хелены #18 lat 76.6, lon 70.7</font>");
newMarker.addTo(map);

var newMarker;
newMarker = L.marker({lat:  Glat(90), lng: Glon(90)},{icon: markerIconTypes[6]});
newMarker.bindPopup("<font color='#636363'>Заметка: Заметка Хелены #19 lat 25.1, lon 44.6</font>");
newMarker.addTo(map);

var newMarker;
newMarker = L.marker({lat:  Glat(90), lng: Glon(90)},{icon: markerIconTypes[6]});
newMarker.bindPopup("<font color='#636363'>Заметка: Заметка Хелены #20 lat 19.2, lon 49.9</font>");
newMarker.addTo(map);

var newMarker;
newMarker = L.marker({lat:  Glat(90), lng: Glon(90)},{icon: markerIconTypes[6]});
newMarker.bindPopup("<font color='#636363'>Заметка: Заметка Хелены #21 lat 12.6, lon 49.3</font>");
newMarker.addTo(map);

var newMarker;
newMarker = L.marker({lat:  Glat(90), lng: Glon(90)},{icon: markerIconTypes[6]});
newMarker.bindPopup("<font color='#636363'>Заметка: Заметка Хелены #22 lat 24.9, lon 60.9</font>");
newMarker.addTo(map);

var newMarker;
newMarker = L.marker({lat:  Glat(90), lng: Glon(90)},{icon: markerIconTypes[6]});
newMarker.bindPopup("<font color='#636363'>Заметка: Заметка Хелены #23 lat 23.9, lon 65.3</font>");
newMarker.addTo(map);

var newMarker;
newMarker = L.marker({lat:  Glat(90), lng: Glon(90)},{icon: markerIconTypes[6]});
newMarker.bindPopup("<font color='#636363'>Заметка: Заметка Хелены #24 lat 28.9, lon 23.2</font>");
newMarker.addTo(map);

var newMarker;
newMarker = L.marker({lat:  Glat(90), lng: Glon(90)},{icon: markerIconTypes[6]});
newMarker.bindPopup("<font color='#636363'>Заметка: Заметка Хелены #25 lat 36.2, lon 22.4</font>");
newMarker.addTo(map);

var newMarker;
newMarker = L.marker({lat:  Glat(90), lng: Glon(90)},{icon: markerIconTypes[6]});
newMarker.bindPopup("<font color='#636363'>Заметка: Заметка Хелены #26 lat 27.7, lon 56.4</font>");
newMarker.addTo(map);

var newMarker;
newMarker = L.marker({lat:  Glat(90), lng: Glon(90)},{icon: markerIconTypes[6]});
newMarker.bindPopup("<font color='#636363'>Заметка: Заметка Хелены #27 lat 26, lon 25.6</font>");
newMarker.addTo(map);

var newMarker;
newMarker = L.marker({lat:  Glat(90), lng: Glon(90)},{icon: markerIconTypes[6]});
newMarker.bindPopup("<font color='#636363'>Заметка: Заметка Хелены #28 lat 22.3, lon 23.4</font>");
newMarker.addTo(map);

var newMarker;
newMarker = L.marker({lat:  Glat(90), lng: Glon(90)},{icon: markerIconTypes[6]});
newMarker.bindPopup("<font color='#636363'>Заметка: Заметка Хелены #29 lat 16.3, lon 81.2</font>");
newMarker.addTo(map);

var newMarker;
newMarker = L.marker({lat:  Glat(90), lng: Glon(90)},{icon: markerIconTypes[6]});
newMarker.bindPopup("<font color='#636363'>Заметка: Заметка Мей Инь #1 lat 25, lon 18.9</font>");
newMarker.addTo(map);

var newMarker;
newMarker = L.marker({lat:  Glat(90), lng: Glon(90)},{icon: markerIconTypes[6]});
newMarker.bindPopup("<font color='#636363'>Заметка: Заметка Мей Инь #2 lat 15.2, lon 20.7</font>");
newMarker.addTo(map);

var newMarker;
newMarker = L.marker({lat:  Glat(90), lng: Glon(90)},{icon: markerIconTypes[6]});
newMarker.bindPopup("<font color='#636363'>Заметка: Заметка Мей Инь #3 lat 15.8, lon 52.5</font>");
newMarker.addTo(map);

var newMarker;
newMarker = L.marker({lat:  Glat(90), lng: Glon(90)},{icon: markerIconTypes[6]});
newMarker.bindPopup("<font color='#636363'>Заметка: Заметка Мей Инь #4 lat 19.8, lon 30.1</font>");
newMarker.addTo(map);

var newMarker;
newMarker = L.marker({lat:  Glat(90), lng: Glon(90)},{icon: markerIconTypes[6]});
newMarker.bindPopup("<font color='#636363'>Заметка: Заметка Мей Инь #5 lat 26.6, lon 16.4</font>");
newMarker.addTo(map);

var newMarker;
newMarker = L.marker({lat:  Glat(90), lng: Glon(90)},{icon: markerIconTypes[6]});
newMarker.bindPopup("<font color='#636363'>Заметка: Заметка Мей Инь #6 lat 16.8, lon 29</font>");
newMarker.addTo(map);

var newMarker;
newMarker = L.marker({lat:  Glat(90), lng: Glon(90)},{icon: markerIconTypes[6]});
newMarker.bindPopup("<font color='#636363'>Заметка: Заметка Мей Инь #7 lat 21.3, lon 30</font>");
newMarker.addTo(map);

var newMarker;
newMarker = L.marker({lat:  Glat(90), lng: Glon(90)},{icon: markerIconTypes[6]});
newMarker.bindPopup("<font color='#636363'>Заметка: Заметка Мей Инь #8 lat 32.5, lon 16.1</font>");
newMarker.addTo(map);

var newMarker;
newMarker = L.marker({lat:  Glat(90), lng: Glon(90)},{icon: markerIconTypes[6]});
newMarker.bindPopup("<font color='#636363'>Заметка: Заметка Мей Инь #10 lat 27.3, lon 43.9</font>");
newMarker.addTo(map);

var newMarker;
newMarker = L.marker({lat:  Glat(90), lng: Glon(90)},{icon: markerIconTypes[6]});
newMarker.bindPopup("<font color='#636363'>Заметка: Заметка Мей Инь #11 lat 20.5, lon 40.8</font>");
newMarker.addTo(map);

var newMarker;
newMarker = L.marker({lat:  Glat(90), lng: Glon(90)},{icon: markerIconTypes[6]});
newMarker.bindPopup("<font color='#636363'>Заметка: Заметка Мей Инь #12 lat 12.8, lon 54.5</font>");
newMarker.addTo(map);

var newMarker;
newMarker = L.marker({lat:  Glat(90), lng: Glon(90)},{icon: markerIconTypes[6]});
newMarker.bindPopup("<font color='#636363'>Заметка: Заметка Мей Инь #13 lat 21.3, lon 40.9</font>");
newMarker.addTo(map);

var newMarker;
newMarker = L.marker({lat:  Glat(90), lng: Glon(90)},{icon: markerIconTypes[6]});
newMarker.bindPopup("<font color='#636363'>Заметка: Заметка Мей Инь #14 lat 15.3, lon 53.2</font>");
newMarker.addTo(map);

var newMarker;
newMarker = L.marker({lat:  Glat(90), lng: Glon(90)},{icon: markerIconTypes[6]});
newMarker.bindPopup("<font color='#636363'>Заметка: Заметка Мей Инь #15 lat 26.8, lon 39.7</font>");
newMarker.addTo(map);

var newMarker;
newMarker = L.marker({lat:  Glat(90), lng: Glon(90)},{icon: markerIconTypes[6]});
newMarker.bindPopup("<font color='#636363'>Заметка: Заметка Мей Инь #16 lat 34.4, lon 29.4</font>");
newMarker.addTo(map);

var newMarker;
newMarker = L.marker({lat:  Glat(90), lng: Glon(90)},{icon: markerIconTypes[6]});
newMarker.bindPopup("<font color='#636363'>Заметка: Заметка Мей Инь #17 lat 28, lon 33.9</font>");
newMarker.addTo(map);

var newMarker;
newMarker = L.marker({lat:  Glat(90), lng: Glon(90)},{icon: markerIconTypes[6]});
newMarker.bindPopup("<font color='#636363'>Заметка: Заметка Мей Инь #18 lat 26.6, lon 51.7</font>");
newMarker.addTo(map);

var newMarker;
newMarker = L.marker({lat:  Glat(90), lng: Glon(90)},{icon: markerIconTypes[6]});
newMarker.bindPopup("<font color='#636363'>Заметка: Заметка Мей Инь #19 lat 39, lon 44.1</font>");
newMarker.addTo(map);

var newMarker;
newMarker = L.marker({lat:  Glat(90), lng: Glon(90)},{icon: markerIconTypes[6]});
newMarker.bindPopup("<font color='#636363'>Заметка: Заметка Мей Инь #20 lat 39.1, lon 71.1</font>");
newMarker.addTo(map);

var newMarker;
newMarker = L.marker({lat:  Glat(90), lng: Glon(90)},{icon: markerIconTypes[6]});
newMarker.bindPopup("<font color='#636363'>Заметка: Заметка Мей Инь #21 lat 32.4, lon 73.3</font>");
newMarker.addTo(map);

var newMarker;
newMarker = L.marker({lat:  Glat(90), lng: Glon(90)},{icon: markerIconTypes[6]});
newMarker.bindPopup("<font color='#636363'>Заметка: Заметка Мей Инь #22 lat 30.1, lon 82.4</font>");
newMarker.addTo(map);

var newMarker;
newMarker = L.marker({lat:  Glat(90), lng: Glon(90)},{icon: markerIconTypes[6]});
newMarker.bindPopup("<font color='#636363'>Заметка: Заметка Мей Инь #23 lat 40.2, lon 78.8</font>");
newMarker.addTo(map);

var newMarker;
newMarker = L.marker({lat:  Glat(90), lng: Glon(90)},{icon: markerIconTypes[6]});
newMarker.bindPopup("<font color='#636363'>Заметка: Заметка Мей Инь #24 lat 50.5, lon 23.3</font>");
newMarker.addTo(map);

var newMarker;
newMarker = L.marker({lat:  Glat(90), lng: Glon(90)},{icon: markerIconTypes[6]});
newMarker.bindPopup("<font color='#636363'>Заметка: Заметка Мей Инь #25 lat 42.6, lon 23</font>");
newMarker.addTo(map);

var newMarker;
newMarker = L.marker({lat:  Glat(90), lng: Glon(90)},{icon: markerIconTypes[6]});
newMarker.bindPopup("<font color='#636363'>Заметка: Заметка Мей Инь #26 lat 52.4, lon 17.4</font>");
newMarker.addTo(map);

var newMarker;
newMarker = L.marker({lat:  Glat(90), lng: Glon(90)},{icon: markerIconTypes[6]});
newMarker.bindPopup("<font color='#636363'>Заметка: Заметка Мей Инь #27 lat 22.1, lon 9.7</font>");
newMarker.addTo(map);

var newMarker;
newMarker = L.marker({lat:  Glat(90), lng: Glon(90)},{icon: markerIconTypes[6]});
newMarker.bindPopup("<font color='#636363'>Заметка: Заметка Мей Инь #28 lat 23.5, lon 37.8</font>");
newMarker.addTo(map);

var newMarker;
newMarker = L.marker({lat:  Glat(90), lng: Glon(90)},{icon: markerIconTypes[6]});
newMarker.bindPopup("<font color='#636363'>Заметка: Заметка Мей Инь #29 lat 18.2, lon 38</font>");
newMarker.addTo(map);

var newMarker;
newMarker = L.marker({lat:  Glat(90), lng: Glon(90)},{icon: markerIconTypes[6]});
newMarker.bindPopup("<font color='#636363'>Заметка: Заметка Мей Инь #30 lat 39.9, lon 40.6</font>");
newMarker.addTo(map);

var newMarker;
newMarker = L.marker({lat:  Glat(90), lng: Glon(90)},{icon: markerIconTypes[6]});
newMarker.bindPopup("<font color='#636363'>Заметка: Заметка Нервы #1 lat 22.4, lon 68.5</font>");
newMarker.addTo(map);

var newMarker;
newMarker = L.marker({lat:  Glat(90), lng: Glon(90)},{icon: markerIconTypes[6]});
newMarker.bindPopup("<font color='#636363'>Заметка: Заметка Нервы #2 lat 35.7, lon 78.1</font>");
newMarker.addTo(map);

var newMarker;
newMarker = L.marker({lat:  Glat(90), lng: Glon(90)},{icon: markerIconTypes[6]});
newMarker.bindPopup("<font color='#636363'>Заметка: Заметка Нервы #3 lat 39.5, lon 24.5</font>");
newMarker.addTo(map);

var newMarker;
newMarker = L.marker({lat:  Glat(90), lng: Glon(90)},{icon: markerIconTypes[6]});
newMarker.bindPopup("<font color='#636363'>Заметка: Заметка Нервы #4 lat 41.2, lon 68</font>");
newMarker.addTo(map);

var newMarker;
newMarker = L.marker({lat:  Glat(90), lng: Glon(90)},{icon: markerIconTypes[6]});
newMarker.bindPopup("<font color='#636363'>Заметка: Заметка Нервы #5 lat 45.4, lon 31.5</font>");
newMarker.addTo(map);

var newMarker;
newMarker = L.marker({lat:  Glat(90), lng: Glon(90)},{icon: markerIconTypes[6]});
newMarker.bindPopup("<font color='#636363'>Заметка: Заметка Нервы #6 lat 49.4, lon 79</font>");
newMarker.addTo(map);

var newMarker;
newMarker = L.marker({lat:  Glat(90), lng: Glon(90)},{icon: markerIconTypes[6]});
newMarker.bindPopup("<font color='#636363'>Заметка: Заметка Нервы #7 lat 47.8, lon 60.9</font>");
newMarker.addTo(map);

var newMarker;
newMarker = L.marker({lat:  Glat(90), lng: Glon(90)},{icon: markerIconTypes[6]});
newMarker.bindPopup("<font color='#636363'>Заметка: Заметка Нервы #8 lat 52.5, lon 49.1</font>");
newMarker.addTo(map);

var newMarker;
newMarker = L.marker({lat:  Glat(90), lng: Glon(90)},{icon: markerIconTypes[6]});
newMarker.bindPopup("<font color='#636363'>Заметка: Заметка Нервы #10 lat 51.4, lon 54.6</font>");
newMarker.addTo(map);

var newMarker;
newMarker = L.marker({lat:  Glat(90), lng: Glon(90)},{icon: markerIconTypes[6]});
newMarker.bindPopup("<font color='#636363'>Заметка: Заметка Нервы #11 lat 82.7, lon 27.1</font>");
newMarker.addTo(map);

var newMarker;
newMarker = L.marker({lat:  Glat(90), lng: Glon(90)},{icon: markerIconTypes[6]});
newMarker.bindPopup("<font color='#636363'>Заметка: Заметка Нервы #12 lat 77.4, lon 16.4</font>");
newMarker.addTo(map);

var newMarker;
newMarker = L.marker({lat:  Glat(90), lng: Glon(90)},{icon: markerIconTypes[6]});
newMarker.bindPopup("<font color='#636363'>Заметка: Заметка Нервы #13 lat 69.6, lon 84.6</font>");
newMarker.addTo(map);

var newMarker;
newMarker = L.marker({lat:  Glat(90), lng: Glon(90)},{icon: markerIconTypes[6]});
newMarker.bindPopup("<font color='#636363'>Заметка: Заметка Нервы #14 lat 72.3, lon 59.2</font>");
newMarker.addTo(map);

var newMarker;
newMarker = L.marker({lat:  Glat(90), lng: Glon(90)},{icon: markerIconTypes[6]});
newMarker.bindPopup("<font color='#636363'>Заметка: Заметка Нервы #15 lat 62.1, lon 20.4</font>");
newMarker.addTo(map);

var newMarker;
newMarker = L.marker({lat:  Glat(90), lng: Glon(90)},{icon: markerIconTypes[6]});
newMarker.bindPopup("<font color='#636363'>Заметка: Заметка Нервы #16 lat 53.7, lon 77.8</font>");
newMarker.addTo(map);

var newMarker;
newMarker = L.marker({lat:  Glat(90), lng: Glon(90)},{icon: markerIconTypes[6]});
newMarker.bindPopup("<font color='#636363'>Заметка: Заметка Нервы #17 lat 43.3, lon 69.3</font>");
newMarker.addTo(map);

var newMarker;
newMarker = L.marker({lat:  Glat(90), lng: Glon(90)},{icon: markerIconTypes[6]});
newMarker.bindPopup("<font color='#636363'>Заметка: Заметка Нервы #18 lat 57.9, lon 32.2</font>");
newMarker.addTo(map);

var newMarker;
newMarker = L.marker({lat:  Glat(90), lng: Glon(90)},{icon: markerIconTypes[6]});
newMarker.bindPopup("<font color='#636363'>Заметка: Заметка Нервы #19 lat 43.4, lon 31</font>");
newMarker.addTo(map);

var newMarker;
newMarker = L.marker({lat:  Glat(90), lng: Glon(90)},{icon: markerIconTypes[6]});
newMarker.bindPopup("<font color='#636363'>Заметка: Заметка Нервы #20 lat 50.6, lon 38.5</font>");
newMarker.addTo(map);

var newMarker;
newMarker = L.marker({lat:  Glat(90), lng: Glon(90)},{icon: markerIconTypes[6]});
newMarker.bindPopup("<font color='#636363'>Заметка: Заметка Нервы #21 lat 54.8, lon 70.8</font>");
newMarker.addTo(map);

var newMarker;
newMarker = L.marker({lat:  Glat(90), lng: Glon(90)},{icon: markerIconTypes[6]});
newMarker.bindPopup("<font color='#636363'>Заметка: Заметка Нервы #22 lat 43.6, lon 61</font>");
newMarker.addTo(map);

var newMarker;
newMarker = L.marker({lat:  Glat(90), lng: Glon(90)},{icon: markerIconTypes[6]});
newMarker.bindPopup("<font color='#636363'>Заметка: Заметка Нервы #23 lat 45.4, lon 68.4</font>");
newMarker.addTo(map);

var newMarker;
newMarker = L.marker({lat:  Glat(90), lng: Glon(90)},{icon: markerIconTypes[6]});
newMarker.bindPopup("<font color='#636363'>Заметка: Заметка Нервы #24 lat 44.1, lon 77</font>");
newMarker.addTo(map);

var newMarker;
newMarker = L.marker({lat:  Glat(90), lng: Glon(90)},{icon: markerIconTypes[6]});
newMarker.bindPopup("<font color='#636363'>Заметка: Заметка Нервы #25 lat 55.2, lon 75.9</font>");
newMarker.addTo(map);

var newMarker;
newMarker = L.marker({lat:  Glat(90), lng: Glon(90)},{icon: markerIconTypes[6]});
newMarker.bindPopup("<font color='#636363'>Заметка: Заметка Нервы #26 lat 73.8, lon 17.6</font>");
newMarker.addTo(map);

var newMarker;
newMarker = L.marker({lat:  Glat(90), lng: Glon(90)},{icon: markerIconTypes[6]});
newMarker.bindPopup("<font color='#636363'>Заметка: Заметка Нервы #27 lat 56.2, lon 51.1</font>");
newMarker.addTo(map);

var newMarker;
newMarker = L.marker({lat:  Glat(90), lng: Glon(90)},{icon: markerIconTypes[6]});
newMarker.bindPopup("<font color='#636363'>Заметка: Заметка Нервы #28 lat 47.9, lon 47.5</font>");
newMarker.addTo(map);

var newMarker;
newMarker = L.marker({lat:  Glat(90), lng: Glon(90)},{icon: markerIconTypes[6]});
newMarker.bindPopup("<font color='#636363'>Заметка: Заметка Нервы #29 lat 71.2, lon 58</font>");
newMarker.addTo(map);

var newMarker;
newMarker = L.marker({lat:  Glat(90), lng: Glon(90)},{icon: markerIconTypes[6]});
newMarker.bindPopup("<font color='#636363'>Заметка: Заметка Нервы #30 lat 43, lon 39.2</font>");
newMarker.addTo(map);

var newMarker;
newMarker = L.marker({lat:  Glat(90), lng: Glon(90)},{icon: markerIconTypes[6]});
newMarker.bindPopup("<font color='#636363'>Заметка: Запись Роквелла #1 lat 25.3, lon 73.1</font>");
newMarker.addTo(map);

var newMarker;
newMarker = L.marker({lat:  Glat(90), lng: Glon(90)},{icon: markerIconTypes[6]});
newMarker.bindPopup("<font color='#636363'>Заметка: Запись Роквелла #2 lat 83.2, lon 24.8</font>");
newMarker.addTo(map);

var newMarker;
newMarker = L.marker({lat:  Glat(90), lng: Glon(90)},{icon: markerIconTypes[6]});
newMarker.bindPopup("<font color='#636363'>Заметка: Запись Роквелла #3 lat 54.8, lon 13.8</font>");
newMarker.addTo(map);

var newMarker;
newMarker = L.marker({lat:  Glat(90), lng: Glon(90)},{icon: markerIconTypes[6]});
newMarker.bindPopup("<font color='#636363'>Заметка: Запись Роквелла #4 lat 14.1, lon 85.9</font>");
newMarker.addTo(map);

var newMarker;
newMarker = L.marker({lat:  Glat(90), lng: Glon(90)},{icon: markerIconTypes[6]});
newMarker.bindPopup("<font color='#636363'>Заметка: Запись Роквелла #5 lat 21.3, lon 69.2</font>");
newMarker.addTo(map);

var newMarker;
newMarker = L.marker({lat:  Glat(90), lng: Glon(90)},{icon: markerIconTypes[6]});
newMarker.bindPopup("<font color='#636363'>Заметка: Запись Роквелла #7 lat 44.1, lon 81.4</font>");
newMarker.addTo(map);

var newMarker;
newMarker = L.marker({lat:  Glat(90), lng: Glon(90)},{icon: markerIconTypes[6]});
newMarker.bindPopup("<font color='#636363'>Заметка: Запись Роквелла #8 lat 64.5, lon 34.1</font>");
newMarker.addTo(map);

var newMarker;
newMarker = L.marker({lat:  Glat(90), lng: Glon(90)},{icon: markerIconTypes[6]});
newMarker.bindPopup("<font color='#636363'>Заметка: Запись Роквелла #10 lat 75.7, lon 71.5</font>");
newMarker.addTo(map);

var newMarker;
newMarker = L.marker({lat:  Glat(90), lng: Glon(90)},{icon: markerIconTypes[6]});
newMarker.bindPopup("<font color='#636363'>Заметка: Запись Роквелла #11 lat 80, lon 67.1</font>");
newMarker.addTo(map);

var newMarker;
newMarker = L.marker({lat:  Glat(90), lng: Glon(90)},{icon: markerIconTypes[6]});
newMarker.bindPopup("<font color='#636363'>Заметка: Запись Роквелла #12 lat 82.6, lon 51.3</font>");
newMarker.addTo(map);

var newMarker;
newMarker = L.marker({lat:  Glat(90), lng: Glon(90)},{icon: markerIconTypes[6]});
newMarker.bindPopup("<font color='#636363'>Заметка: Запись Роквелла #13 lat 64.1, lon 61.6</font>");
newMarker.addTo(map);

var newMarker;
newMarker = L.marker({lat:  Glat(90), lng: Glon(90)},{icon: markerIconTypes[6]});
newMarker.bindPopup("<font color='#636363'>Заметка: Запись Роквелла #14 lat 58.6, lon 49</font>");
newMarker.addTo(map);

var newMarker;
newMarker = L.marker({lat:  Glat(90), lng: Glon(90)},{icon: markerIconTypes[6]});
newMarker.bindPopup("<font color='#636363'>Заметка: Запись Роквелла #15 lat 70.2, lon 32</font>");
newMarker.addTo(map);





var newMarker;
newMarker = L.marker({lat:  Glat(69.5), lng: Glon(24.8)},{icon: markerIconTypes[6]});
newMarker.bindPopup("<font color='#636363'>Заметка: Запись Роквелла #16 lat 69.5, lon 24.8</font>");
newMarker.addTo(map);

var newMarker;
newMarker = L.marker({lat:  Glat(83.8), lng: Glon(27.7)},{icon: markerIconTypes[6]});
newMarker.bindPopup("<font color='#636363'>Заметка: Запись Роквелла #19 lat 83.8, lon 27.7</font>");
newMarker.addTo(map);

var newMarker;
newMarker = L.marker({lat:  Glat(86.4), lng: Glon(26.7)},{icon: markerIconTypes[6]});
newMarker.bindPopup("<font color='#636363'>Заметка: Запись Роквелла #20 lat 86.4, lon 26.7</font>");
newMarker.addTo(map);

var newMarker;
newMarker = L.marker({lat:  Glat(77.1), lng: Glon(31.6)},{icon: markerIconTypes[6]});
newMarker.bindPopup("<font color='#636363'>Заметка: Запись Роквелла #21 lat 77.1, lon 31.6</font>");
newMarker.addTo(map);

var newMarker;
newMarker = L.marker({lat:  Glat(76), lng: Glon(46.7)},{icon: markerIconTypes[6]});
newMarker.bindPopup("<font color='#636363'>Заметка: Запись Роквелла #22 lat 76, lon 46.7</font>");
newMarker.addTo(map);

var newMarker;
newMarker = L.marker({lat:  Glat(75.5), lng: Glon(74)},{icon: markerIconTypes[6]});
newMarker.bindPopup("<font color='#636363'>Заметка: Запись Роквелла #23 lat 75.5, lon 74</font>");
newMarker.addTo(map);

var newMarker;
newMarker = L.marker({lat:  Glat(76.5), lng: Glon(68.1)},{icon: markerIconTypes[6]});
newMarker.bindPopup("<font color='#636363'>Заметка: Запись Роквелла #24 lat 76.5, lon 68.1</font>");
newMarker.addTo(map);

var newMarker;
newMarker = L.marker({lat:  Glat(75), lng: Glon(65.6)},{icon: markerIconTypes[6]});
newMarker.bindPopup("<font color='#636363'>Заметка: Запись Роквелла #25 lat 75, lon 65.6</font>");
newMarker.addTo(map);

var newMarker;
newMarker = L.marker({lat:  Glat(75.8), lng: Glon(75.5)},{icon: markerIconTypes[6]});
newMarker.bindPopup("<font color='#636363'>Заметка: Запись Роквелла #26 lat 75.8, lon 75.5</font>");
newMarker.addTo(map);

var newMarker;
newMarker = L.marker({lat:  Glat(20.1), lng: Glon(85.9)},{icon: markerIconTypes[6]});
newMarker.bindPopup("<font color='#636363'>Заметка: Запись Роквелла #27 lat 20.1, lon 85.9</font>");
newMarker.addTo(map);

var newMarker;
newMarker = L.marker({lat:  Glat(78.3), lng: Glon(47.3)},{icon: markerIconTypes[6]});
newMarker.bindPopup("<font color='#636363'>Заметка: Запись Роквелла #28 lat 78.3, lon 47.3</font>");
newMarker.addTo(map);

var newMarker;
newMarker = L.marker({lat:  Glat(79.8), lng: Glon(17.4)},{icon: markerIconTypes[6]});
newMarker.bindPopup("<font color='#636363'>Крастный Обелиск lat 79.8, lon 17.4</font>");
newMarker.addTo(map);

var newMarker;
newMarker = L.marker({lat:  Glat(25.5), lng: Glon(25.6)},{icon: markerIconTypes[6]});
newMarker.bindPopup("<font color='#636363'>Синий Обелиск lat 25.5, lon 25.6</font>");
newMarker.addTo(map);

var newMarker;
newMarker = L.marker({lat:  Glat(59), lng: Glon(72.3)},{icon: markerIconTypes[6]});
newMarker.bindPopup("<font color='#636363'>Зеленый Обелиск lat 59.0, lon 72.3</font>");
newMarker.addTo(map);

*/
			
        			        		var newMarker;
		        		newMarker = L.marker({lat: 0.8547619047619047, lng: 0.09308176100628929},{icon: markerIconTypes[15]});
		        		newMarker.bindPopup("<b>Yellow Obelsik</b><br><span style='font-size:8px'>lat: "+Math.round(mlat(0.8547619047619047))+" - lng: "+Math.round(mlon(0.09308176100628929))+"</span><br>Here you can Summon a Boss");
						newMarker.addTo(map);
						markers.push(newMarker);
		        			        		var newMarker;
		        		newMarker = L.marker({lat: 0.20833333333333334, lng: 0.19622641509433963},{icon: markerIconTypes[15]});
		        		newMarker.bindPopup("<b>Red Obelisk</b><br><span style='font-size:8px'>lat: "+Math.round(mlat(0.20833333333333334))+" - lng: "+Math.round(mlon(0.19622641509433963))+"</span><br>Here you can summon a Boss");
						newMarker.addTo(map);
						markers.push(newMarker);
		        			        		var newMarker;
		        		newMarker = L.marker({lat: 0.39257142857142857, lng: 0.46706918238993705},{icon: markerIconTypes[13]});
		        		newMarker.bindPopup("<b>Vulcano Cave</b><br><span style='font-size:8px'>lat: "+Math.round(mlat(0.39257142857142857))+" - lng: "+Math.round(mlon(0.46706918238993705))+"</span><br>A very small Cave with low Temperatures and all Kinds of Cavemobs. ");
						newMarker.addTo(map);
						markers.push(newMarker);
		        			        		var newMarker;
		        		newMarker = L.marker({lat: 0.13864285714285715, lng: 0.08647798742138364},{icon: markerIconTypes[13]});
		        		newMarker.bindPopup("<b>North Western Cave</b><br><span style='font-size:8px'>lat: "+Math.round(mlat(0.13864285714285715))+" - lng: "+Math.round(mlon(0.08647798742138364))+"</span><br>Be careful if you trie to reach the entrance<br>");
						newMarker.addTo(map);
						markers.push(newMarker);
		        			        		var newMarker;
		        		newMarker = L.marker({lat: 0.7170952380952381, lng: 0.5835974842767295},{icon: markerIconTypes[13]});
		        		newMarker.bindPopup("<b>Southern Cave</b><br><span style='font-size:8px'>lat: "+Math.round(mlat(0.7170952380952381))+" - lng: "+Math.round(mlon(0.5835974842767295))+"</span><br>A Cave with low Temeratures and deep Ravines, so you should bring a Parachute and lots of Food with you.");
						newMarker.addTo(map);
						markers.push(newMarker);
		        			        		var newMarker;
		        		newMarker = L.marker({lat: 0.09523809523809523, lng: 0.0012578616352201214},{icon: markerIconTypes[14]});
		        		newMarker.bindPopup("<b>Northern Underwatercave</b><br><span style='font-size:8px'>lat: "+Math.round(mlat(0.09523809523809523))+" - lng: "+Math.round(mlon(0.0012578616352201214))+"</span><br>An Underwatercave in the North-West");
						newMarker.addTo(map);
						markers.push(newMarker);
		        			        		var newMarker;
		        		newMarker = L.marker({lat: 0.6033214285714286, lng: 0.7759748427672956},{icon: markerIconTypes[15]});
		        		newMarker.bindPopup("<b>Blue Obelisk</b><br><span style='font-size:8px'>lat: "+Math.round(mlat(0.6033214285714286))+" - lng: "+Math.round(mlon(0.7759748427672956))+"</span><br>Here you can summon a boss.");
						newMarker.addTo(map);
						markers.push(newMarker);
		        			        		var newMarker;
		        		newMarker = L.marker({lat: 0.7464166666666666, lng: 0.9366666666666668},{icon: markerIconTypes[13]});
		        		newMarker.bindPopup("<b>Southern Cave</b><br><span style='font-size:8px'>lat: "+Math.round(mlat(0.7464166666666666))+" - lng: "+Math.round(mlon(0.9366666666666668))+"</span><br>A big Cave in the South-East with very high Temperatures and lots of lava. You should bringt much of water with you.");
						newMarker.addTo(map);
						markers.push(newMarker);
		        			        		var newMarker;
		        		newMarker = L.marker({lat: 0.07205952380952382, lng: 0.9288427672955976},{icon: markerIconTypes[13]});
		        		newMarker.bindPopup("<b>Northern Cave</b><br><span style='font-size:8px'>lat: "+Math.round(mlat(0.07205952380952382))+" - lng: "+Math.round(mlon(0.9288427672955976))+"</span><br>A cave in the North-East on a small Island.");
						newMarker.addTo(map);
						markers.push(newMarker);
		        			        		var newMarker;
		        		newMarker = L.marker({lat: 0.8631309523809524, lng: 0.5449937106918239},{icon: markerIconTypes[13]});
		        		newMarker.bindPopup("<b>Southern Cave</b><br><span style='font-size:8px'>lat: "+Math.round(mlat(0.8631309523809524))+" - lng: "+Math.round(mlon(0.5449937106918239))+"</span><br>A Cave in the South of the Isalnd.");
						newMarker.addTo(map);
						markers.push(newMarker);
		        			        		var newMarker;
		        		newMarker = L.marker({lat: 0.8631309523809524, lng: 0.5449937106918239},{icon: markerIconTypes[13]});
		        		newMarker.bindPopup("<b>Southern Cave</b><br><span style='font-size:8px'>lat: "+Math.round(mlat(0.8631309523809524))+" - lng: "+Math.round(mlon(0.5449937106918239))+"</span><br>A Cave in the South of the Isalnd.");
						newMarker.addTo(map);
						markers.push(newMarker);
		        			        		var newMarker;
		        		newMarker = L.marker({lat: 0.40165476190476185, lng: 0.36435220125786166},{icon: markerIconTypes[12]});
		        		newMarker.bindPopup("<b>Vulcano</b><br><span style='font-size:8px'>lat: "+Math.round(mlat(0.40165476190476185))+" - lng: "+Math.round(mlon(0.36435220125786166))+"</span><br>Here you can find lots of Metal an Obisidan.");
						newMarker.addTo(map);
						markers.push(newMarker);
		        			        		var newMarker;
		        		newMarker = L.marker({lat: 0.5, lng: 0.012578616352201259},{icon: markerIconTypes[14]});
		        		newMarker.bindPopup("<b>Western Underwatercave</b><br><span style='font-size:8px'>lat: "+Math.round(mlat(0.5))+" - lng: "+Math.round(mlon(0.012578616352201259))+"</span><br>Description");
						newMarker.addTo(map);
						markers.push(newMarker);
		        			        		var newMarker;
		        		newMarker = L.marker({lat: 0.8928571428571429, lng: 0},{icon: markerIconTypes[14]});
		        		newMarker.bindPopup("<b>Southern Underwatercave</b><br><span style='font-size:8px'>lat: "+Math.round(mlat(0.8928571428571429))+" - lng: "+Math.round(mlon(0))+"</span><br>Description");
						newMarker.addTo(map);
						markers.push(newMarker);
		        			        		var newMarker;
		        		newMarker = L.marker({lat: 0.9880952380952381, lng: 0.050314465408805034},{icon: markerIconTypes[14]});
		        		newMarker.bindPopup("<b>Southern Underwatercave</b><br><span style='font-size:8px'>lat: "+Math.round(mlat(0.9880952380952381))+" - lng: "+Math.round(mlon(0.050314465408805034))+"</span><br>");
						newMarker.addTo(map);
						markers.push(newMarker);
		        			        		var newMarker;
		        		newMarker = L.marker({lat: 0.9761904761904762, lng: 0.33962264150943394},{icon: markerIconTypes[14]});
		        		newMarker.bindPopup("<b>Southern Underwatercave</b><br><span style='font-size:8px'>lat: "+Math.round(mlat(0.9761904761904762))+" - lng: "+Math.round(mlon(0.33962264150943394))+"</span><br>");
						newMarker.addTo(map);
						markers.push(newMarker);
		        			        		var newMarker;
		        		newMarker = L.marker({lat: 0.9761904761904762, lng: 0.7672955974842768},{icon: markerIconTypes[14]});
		        		newMarker.bindPopup("<b>Southern Underwatercave</b><br><span style='font-size:8px'>lat: "+Math.round(mlat(0.9761904761904762))+" - lng: "+Math.round(mlon(0.7672955974842768))+"</span><br>");
						newMarker.addTo(map);
						markers.push(newMarker);
		        			        		var newMarker;
		        		newMarker = L.marker({lat: 0.9464285714285714, lng: 1.0025157232704403},{icon: markerIconTypes[14]});
		        		newMarker.bindPopup("<b>Eastern Underwatercave</b><br><span style='font-size:8px'>lat: "+Math.round(mlat(0.9464285714285714))+" - lng: "+Math.round(mlon(1.0025157232704403))+"</span><br>");
						newMarker.addTo(map);
						markers.push(newMarker);
		        			        		var newMarker;
		        		newMarker = L.marker({lat: 0.9464285714285714, lng: 1.0025157232704403},{icon: markerIconTypes[14]});
		        		newMarker.bindPopup("<b>Eastern Underwatercave</b><br><span style='font-size:8px'>lat: "+Math.round(mlat(0.9464285714285714))+" - lng: "+Math.round(mlon(1.0025157232704403))+"</span><br>");
						newMarker.addTo(map);
						markers.push(newMarker);
		        			        		var newMarker;
		        		newMarker = L.marker({lat: 0.023809523809523808, lng: 2.5786163522012577},{icon: markerIconTypes[14]});
		        		newMarker.bindPopup("<b>Northern Underwatercave</b><br><span style='font-size:8px'>lat: "+Math.round(mlat(0.023809523809523808))+" - lng: "+Math.round(mlon(2.5786163522012577))+"</span><br>");
						newMarker.addTo(map);
						markers.push(newMarker);
		        			        		var newMarker;
		        		newMarker = L.marker({lat: 0.023809523809523808, lng: 0.14465408805031446},{icon: markerIconTypes[14]});
		        		newMarker.bindPopup("<b>Northern Underwatercave</b><br><span style='font-size:8px'>lat: "+Math.round(mlat(0.023809523809523808))+" - lng: "+Math.round(mlon(0.14465408805031446))+"</span><br>");
						newMarker.addTo(map);
						markers.push(newMarker);
		        			        		var newMarker;
		        		newMarker = L.marker({lat: 0.49755952380952384, lng: 0.08115723270440253},{icon: markerIconTypes[0]});
		        		newMarker.bindPopup("<b>Oil</b><br><span style='font-size:8px'>lat: "+Math.round(mlat(0.49755952380952384))+" - lng: "+Math.round(mlon(0.08115723270440253))+"</span><br>You can find a little bit of Oil along the western Beach in the water.");
						newMarker.addTo(map);
						markers.push(newMarker);
		        			        		var newMarker;
		        		newMarker = L.marker({lat: 0.18438095238095237, lng: 0.22665408805031445},{icon: markerIconTypes[10]});
		        		newMarker.bindPopup("<b>Ores</b><br><span style='font-size:8px'>lat: "+Math.round(mlat(0.18438095238095237))+" - lng: "+Math.round(mlon(0.22665408805031445))+"</span><br>Very huge amount of Metal, Obsidian and Crystals.");
						newMarker.addTo(map);
						markers.push(newMarker);
		        			        		var newMarker;
		        		newMarker = L.marker({lat: 0.9065476190476192, lng: 0.1851572327044025},{icon: markerIconTypes[0]});
		        		newMarker.bindPopup("<font color='#636363'><b>Тихое местечко</b></font><br><span style='font-size:10px'><font color='#636363'>широта:</font> "+Math.round(mlat(0.9065476190476192))+" - <font color='#636363'>долгота:</font> "+Math.round(mlon(0.1851572327044025))+"</span><br><font color='#636363'>Очень спокойное место для проживания на этом огромном острове.</font>");
						newMarker.addTo(map);
						markers.push(newMarker);


var newMarker;
newMarker = L.marker({lat: 0.9065476190476192, lng: 0.1851572327044025},{icon: markerIconTypes[0]});
newMarker.bindPopup("<font color='#636363'><b>Тихое местечко</b></font><br><span style='font-size:10px'><font color='#636363'>широта:</font> "+Math.round(mlat(0.9065476190476192))+Math.round(mlat(0.9065476190476192))+" - <font color='#636363'>долгота:</font> "+Math.round(mlon(0.1851572327044025))+"</span><br><font color='#636363'>Очень спокойное место для проживания на этом огромном острове.</font>");
newMarker.addTo(map);
markers.push(newMarker);

						