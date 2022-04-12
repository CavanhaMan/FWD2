const Http = new XMLHttpRequest();
function getLocation() {
    console.log("getLocation Called");
    var bdcApi = "https://api.bigdatacloud.net/data/reverse-geocode-client"

    navigator.geolocation.getCurrentPosition(
        (position) => {
            bdcApi = bdcApi
                + "?latitude=" + position.coords.latitude
                + "&longitude=" + position.coords.longitude
                + "&localityLanguage=pt-br";
            getApi(bdcApi);

        },
        (err) => { getApi(bdcApi); },
        {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0
        });
}
function getApi(bdcApi) {
    Http.open("GET", bdcApi);
    Http.send();
    Http.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("jsonresult").innerHTML = this.responseText;
            s1.innerHTML = bdcApi.city;
        }
    };
}
/*

c5.innerHTML = data.currently.summary;
c6.innerHTML = data.currently.precipIntensity + " mm por hora";
c7.innerHTML = Math.round(parseFloat(data.currently.precipProbability)) * 100 + "%";
c8.innerHTML = Math.round((parseFloat(data.currently.temperature) - 32) * 5 / 9) + "º celsius";
c9.innerHTML = Math.round((parseFloat(data.currently.apparentTemperature) - 32) * 5 / 9) + "º celsius";
c10.innerHTML = Math.round((parseFloat(data.currently.dewPoint) - 32) * 5 / 9) + "º celsius";
c11.innerHTML = data.currently.humidity + "%";
c12.innerHTML = (parseFloat(data.currently.pressure) / 1013).toFixed(2) + " atm";
c13.innerHTML = data.currently.windSpeed + " metros por segundo";
c14.innerHTML = data.currently.windGust + " metros por segundo";
c15.innerHTML = degToCompass(data.currently.windBearing);
//c15.innerHTML = data.currently.windBearing;
c16.innerHTML = data.currently.cloudCover;
c17.innerHTML = data.currently.uvIndex;
c18.innerHTML = data.currently.visibility + " kilometros";
c19.innerHTML = data.currently.ozone;
c20.innerHTML = data.offset;
*/