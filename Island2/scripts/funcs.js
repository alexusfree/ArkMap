
var latScaleVal = 5000;
var longScaleVal = 5000;
var latScale = latScaleVal / 256;
var longScale = longScaleVal / 256;


var fixLat = function (currentClickLat) {
    if (currentClickLat > 0) { currentClickLat = -currentClickLat }
    else { currentClickLat = Math.abs(currentClickLat) };
    return currentClickLat;
}

var latLngToGPS = function(lat, long)
{
    var sc = 90 / 166;
    var newLat = (lat - 100) * sc;
    var newLong = (long + 10) * sc
    return { lat: newLat, long: newLong }
}


var gpsToLatLang = function(lat, long)
{
    //starts at 0, goes to 156
    var sc = 166 / 90;
    var newLat = (lat * sc) + 88;
    var newLong = (long * sc) - 10;
    return { lat: newLat, long: newLong }
}

var latLngToCoords = function(lat, long)
{

    var currentClickLat = (lat * latScale) - (latScaleVal / 2);
    var currentClickLng = (long * longScale) - (longScaleVal / 2);

    currentClickLat = fixLat(currentClickLat);

    return { x: Math.round(currentClickLat), y: Math.round(currentClickLng) }
}

var coordsToLatLng = function(x, y)
{
    x = fixLat(x);

    var lat = Math.round((x / latScale) + ((latScaleVal / 2) / latScale));
    var long = Math.round((y / longScale) + ((longScaleVal / 2) / longScale));

    //lat = fixLat(lat);

    return { lat: -lat, long: long };
}

var coordsToLatLngRaw = function (x, y) {
    x = fixLat(x);

    var lat = (x / latScale) + ((latScaleVal / 2) / latScale);
    var long = (y / longScale) + ((longScaleVal / 2) / longScale);

    //lat = fixLat(lat);

    return { lat: -lat, long: long };
}

var coordsToLatLngArray = function (x, y) {

    x = fixLat(x);

    var lat = Math.round((x / latScale) + ((latScaleVal / 2) / latScale));
    var long = Math.round((y / longScale) + ((longScaleVal / 2) / longScale));

    //lat = fixLat(lat);

    return [-lat, long];
}

var coordsToLatLngArrayRaw = function (x, y) {

    x = fixLat(x);

    var lat = (x / latScale) + ((latScaleVal / 2) / latScale);
    var long = (y / longScale) + ((longScaleVal / 2) / longScale);

    //lat = fixLat(lat);

    return [-lat, long];
}

