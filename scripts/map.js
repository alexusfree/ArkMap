
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
//		        L.tileLayer('map/{z}/{x}/{y}.png', {
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
/* [0,0,'тест',0],
[90,20,'тест',0],
[70,80,'тест',0],
[80,30,'тест',0],
//[20,20,'тест 20',2],
	
     */
[75.8,78.2,"Досье: Ахатина",6],
[87.5,51.5,"Досье: Аммонит",6],
[24.6,40.1,"Досье: Удильщик",6],
[15.8,26.7,"Досье: Анкилозавр",6],
[18.7,42.8,"Досье: Археоптерикс",6],
[21.6,53.9,"Досье: Аргентавис",6],
[14.2,69.1,"Досье: Артроплевра",6],
[30,78.1,"Досье: Барионикс",6],
[52.5,17.7,"Досье: Базилозавр",6],
[70.7,61.1,"Досье: Гигантская пчела",6],
[14.8,81.4,"Досье: Жаба",6],
[31.6,17.1,"Досье: Бронтозавр",6],
[33.3,41,"Досье: Карнотавр",6],
[25.1,71.8,"Досье: Кастороидес",6],
[31.3,28.9,"Досье: Халикотерий",6],
[37,49.9,"Досье: Латимерия",6],
[41.2,49.2,"Досье: Компсогнат",6],
[88.1,53,"Досье: Деодон",6],
[28.5,74.2,"Досье: Диметродон",6],
[26.6,70.6,"Досье: Диморфодон",6],
[27.6,82.6,"Досье: Диплокаулус",6],
[25.1,13.5,"Досье: Диплодок",6],
[40.4,83.8,"Досье: Свирепый медведь",6],
[42.5,20.8,"Досье: Лютоволк",6],
[56.7,21.4,"Досье: Додо",6],
[47,27.5,"Досье: Дедикурус",6],
[16.5,85,"Досье: Скарабей",6],
[44,55.2,"Досье: Дунклеостей",6],
[36.4,81.4,"Досье: Электрофорус",6],
[63.6,33.4,"Досье: Эквус",6],
[44.1,49,"Досье: Ракоскорпион",6],
[45.6,62.3,"Досье: Галлимим",6],
[44,66.4,"Досье: Гиганотозавр",6],
[26.6,23.6,"Досье: Гигантопитек",6],
[81.7,84.1,"Досье: Гесперорнис",6],
[80.9,81.9,"Досье: Гиенодон",6],
[72.8,64.5,"Досье: Ихтиорнис",6],
[52.9,79.8,"Досье: Ихтиозавр",6],
[62.4,24.7,"Досье: Игуанодон",6],
[42.5,79.6,"Досье: Кайруку",6],
[78.3,23.6,"Досье: Кентрозавр",6],
[83.1,23.5,"Досье: Лидсихтис",6],
[78.2,24.4,"Досье: Лиоплевродон",6],
[84.4,84.1,"Досье: Мегалания",6],
[54.3,41.4,"Досье: Стрекоза",6],
[68.1,67.6,"Досье: Пиранья",6],
[75,21.4,"Досье: Мегатерий",6],
[48.5,21.6,"Досье: Микрораптор",6],
[64.3,17.4,"Досье: Мосхопс",6],
[66.4,19.7,"Досье: Оник",6],
[35.7,59.1,"Досье: Выдра",6],
[58.9,23.1,"Досье: Овираптор",6],
[73.3,74.1,"Досье: Овис",6],
[65.5,40.8,"Досье: Пахицефалозавр",6],
[77.6,20.7,"Досье: Пахиринозавр",6],
[65.1,31.4,"Досье: Парацератерий",6],		
[71.5,32.1,"Досье: Паразавр",6],
[82.2,62.9,"Досье: Пегомастакс",6],
[71.3,47.2,"Досье: Пелагорнис",6],
[72.5,53.8,"Досье: Фиомия",6],
[68.4,59.5,"Досье: Плезиозавр",6],
[72.3,78.2,"Досье: Прокоптодон",6],
[66.9,76.8,"Досье: Птеранодон",6],
[80.6,61.9,"Досье: Скорпион",6],
[36.6,34.9,"Досье: Пурловия",6],
[87.4,23.3,"Досье: Кетцалькоатль",6],
[86.8,25,  "Досье: Раптор",6],
[77.1,26.1,"Досье: Саблезуб",6],
[87.5,52.5,"Досье: Саблезубый лосось",6],
[77.9,42.9,"Досье: Саркозух",6],
[75.7,79.8,"Досье: Спинозавр",6],
[78.3,79.1,"Досье: Стегозавр",6],
[67.6,48.5,"Досье: Теризинозавр",6],
[32.4,66.2,"Досье: Сумчатый лев",6],
[75,78.8,"Досье: Троодон",6],
[79.2,32.3,"Досье: Шерстистый носорог",6],
[73.9,23.6,"Досье: Ютираннус",6],
[81.5,44.7,"Заметка: Заметка Хелены #5",6],
[77.2,76.4,"Заметка: Заметка Хелены #6",6],
[78.8,27.7,"Заметка: Заметка Хелены #7",6],
[61.2,81.5,"Заметка: Заметка Хелены #8",6],
[52.4,59,"Заметка: Заметка Хелены #10",6],
[55.2,27.7,"Заметка: Заметка Хелены #13",6],
[26.3,62.9,"Заметка: Заметка Хелены #14",6],
[34.1,56.1,"Заметка: Заметка Хелены #15",6],
[40.7,26.1,"Заметка: Заметка Хелены #16",6],
[76.8,77.3,"Заметка: Заметка Хелены #17",6],
[76.6,70.7,"Заметка: Заметка Хелены #18",6],
[25.1,44.6,"Заметка: Заметка Хелены #19",6],
[19.2,49.9,"Заметка: Заметка Хелены #20",6],
[12.6,49.3,"Заметка: Заметка Хелены #21",6],
[24.9,60.9,"Заметка: Заметка Хелены #22",6],
[23.9,65.3,"Заметка: Заметка Хелены #23",6],
[28.9,23.2,"Заметка: Заметка Хелены #24",6],
[36.2,22.4,"Заметка: Заметка Хелены #25",6],
[27.7,56.4,"Заметка: Заметка Хелены #26",6],
[26,25.6,"Заметка: Заметка Хелены #27",6],
[22.3,23.4,"Заметка: Заметка Хелены #28",6],
[16.3,81.2,"Заметка: Заметка Хелены #29",6],
[25,18.9,"Заметка: Заметка Мей Инь #1",6],
[15.2,20.7,"Заметка: Заметка Мей Инь #2",6],
[15.8,52.5,"Заметка: Заметка Мей Инь #3",6],
[19.8,30.1,"Заметка: Заметка Мей Инь #4",6],
[26.6,16.4,"Заметка: Заметка Мей Инь #5",6],
[16.8,29,"Заметка: Заметка Мей Инь #6",6],
[21.3,30,"Заметка: Заметка Мей Инь #7",6],
[32.5,16.1,"Заметка: Заметка Мей Инь #8",6],
[27.3,43.9,"Заметка: Заметка Мей Инь #10",6],
[20.5,40.8,"Заметка: Заметка Мей Инь #11",6],
[12.8,54.5,"Заметка: Заметка Мей Инь #12",6],
[21.3,40.9,"Заметка: Заметка Мей Инь #13",6],
[15.3,53.2,"Заметка: Заметка Мей Инь #14",6],
[26.8,39.7,"Заметка: Заметка Мей Инь #15",6],
[34.4,29.4,"Заметка: Заметка Мей Инь #16",6],
[28,33.9,"Заметка: Заметка Мей Инь #17",6],
[26.6,51.7,"Заметка: Заметка Мей Инь #18",6],
[39,44.1,"Заметка: Заметка Мей Инь #19",6],
[39.1,71.1,"Заметка: Заметка Мей Инь #20",6],
[32.4,73.3,"Заметка: Заметка Мей Инь #21",6],
[30.1,82.4,"Заметка: Заметка Мей Инь #22",6],
[40.2,78.8,"Заметка: Заметка Мей Инь #23",6],
[50.5,23.3,"Заметка: Заметка Мей Инь #24",6],
[42.6,23,"Заметка: Заметка Мей Инь #25",6],
[52.4,17.4,"Заметка: Заметка Мей Инь #26",6],
[22.1,9.7,"Заметка: Заметка Мей Инь #27",6],
[23.5,37.8,"Заметка: Заметка Мей Инь #28",6],
[18.2,38,"Заметка: Заметка Мей Инь #29",6],
[39.9,40.6,"Заметка: Заметка Мей Инь #30",6],
[22.4,68.5,"Заметка: Заметка Нервы #1",6],
[35.7,78.1,"Заметка: Заметка Нервы #2",6],
[39.5,24.5,"Заметка: Заметка Нервы #3",6],
[41.2,68,"Заметка: Заметка Нервы #4",6],
[45.4,31.5,"Заметка: Заметка Нервы #5",6],
[49.4,79,"Заметка: Заметка Нервы #6",6],
[47.8,60.9,"Заметка: Заметка Нервы #7",6],
[52.5,49.1,"Заметка: Заметка Нервы #8",6],
[51.4,54.6,"Заметка: Заметка Нервы #10",6],
[82.7,27.1,"Заметка: Заметка Нервы #11",6],
[77.4,16.4,"Заметка: Заметка Нервы #12",6],
[69.6,84.6,"Заметка: Заметка Нервы #13",6],
[72.3,59.2,"Заметка: Заметка Нервы #14",6],
[62.1,20.4,"Заметка: Заметка Нервы #15",6],
[53.7,77.8,"Заметка: Заметка Нервы #16",6],
[43.3,69.3,"Заметка: Заметка Нервы #17",6],
[57.9,32.2,"Заметка: Заметка Нервы #18",6],
[43.4,31,"Заметка: Заметка Нервы #19",6],
[50.6,38.5,"Заметка: Заметка Нервы #20",6],
[54.8,70.8,"Заметка: Заметка Нервы #21",6],
[43.6,61,"Заметка: Заметка Нервы #22",6],
[45.4,68.4,"Заметка: Заметка Нервы #23",6],
[44.1,77,"Заметка: Заметка Нервы #24",6],
[55.2,75.9,"Заметка: Заметка Нервы #25",6],
[73.8,17.6,"Заметка: Заметка Нервы #26",6],
[56.2,51.1,"Заметка: Заметка Нервы #27",6],
[47.9,47.5,"Заметка: Заметка Нервы #28",6],
[71.2,58,"Заметка: Заметка Нервы #29",6],
[43,39.2,"Заметка: Заметка Нервы #30",6],
[25.3,73.1,"Заметка: Запись Роквелла #1",6],
[83.2,24.8,"Заметка: Запись Роквелла #2",6],
[54.8,13.8,"Заметка: Запись Роквелла #3",6],
[14.1,85.9,"Заметка: Запись Роквелла #4",6],
[21.3,69.2,"Заметка: Запись Роквелла #5",6],
[44.1,81.4,"Заметка: Запись Роквелла #7",6],
[64.5,34.1,"Заметка: Запись Роквелла #8",6],
[75.7,71.5,"Заметка: Запись Роквелла #10",6],
[80,67.1,"Заметка: Запись Роквелла #11",6],
[82.6,51.3,"Заметка: Запись Роквелла #12",6],
[64.1,61.6,"Заметка: Запись Роквелла #13",6],
[58.6,49,"Заметка: Запись Роквелла #14",6],
[70.2,32,"Заметка: Запись Роквелла #15",6],
[69.5,24.8,"Заметка: Запись Роквелла #16",6],
[83.8,27.7,"Заметка: Запись Роквелла #19",6],
[86.4,26.7,"Заметка: Запись Роквелла #20",6],
[77.1,31.6,"Заметка: Запись Роквелла #21",6],
[76,46.7,"Заметка: Запись Роквелла #22",6],
[75.5,74,"Заметка: Запись Роквелла #23",6],
[76.5,68.1,"Заметка: Запись Роквелла #24",6],
[75,65.6,"Заметка: Запись Роквелла #25",6],
[75.8,75.5,"Заметка: Запись Роквелла #26",6],
[20.1,85.9,"Заметка: Запись Роквелла #27",6],
[78.3,47.3,"Заметка: Запись Роквелла #28",6],


[75.6,60.5,"Заметка #7 ???",6],
[44.4,23.7,"Заметка #10 ???",6],		
[89.2,24.4,"Заметка #13 ???",6],		
[79.8,17.4,"Красный Обелиск",6],
[25.5,25.6,"Синий Обелиск",6],
[59.0,72.3,"Зеленый Обелиск",6],
/*	 */



[54.9,14.1,'Место под базу - "Под деревом у берега"',2],
[47.9,20,'Место под базу - Водопад <br>(мало места)',2],
[46,61.6,'Место под базу - Поваленное дерево',2],
[27,42,'Место под базу - Водопад<br> "Нычка" места мизер',2],
[18.4,42.7,'Место под базу - Водопад<br>Холодное место',2],
[26.6,23.6,'Место под базу - Лощина у Синего обелиска<br>Записка рядом гигантопитек. Холод.',2],
//[19.2,23.6,'Место под базу - Пещера с водой. не удобна в застройке',2], // походу рагнарек
//[46,77.6,'Место под базу - 4 камня в деревьях',2],
//[47,20,'Место под базу - Водопад<br>',2]
//[,,'Место под базу - ',2],
];

 for (var i = 0; i < label_layer.length; i++) {// перебераем строки
   var s = label_layer[i];	// s текущая строка
   L.marker({lat:Glat(s[0]),lng:Glon(s[1])},{title:s[2]+" "+s[0]+" "+s[1],icon:markerIconTypes[s[3]]} )
   .bindPopup("<font color='#636363'>"+s[2]+"<br> lat: "+s[0]+" lon: "+s[1]+"</font>").addTo(map);

	};

//L.marker([0.1,0.1],{title:"fullname",icon:markerIconTypes[6]} ).bindPopup("bindPopup").addTo(map);
//L.marker({lat:Glat(75.6),lng:Glon(60.5)},{title:"Заметка #7 ??? lat 75.6, lon 60.5",icon:markerIconTypes[6]} ).bindPopup("<font color='#636363'>Заметка #7 ??? lat 75.6, lon 60.5</font>").addTo(map);

                                        var markers = new Array();
			
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

						