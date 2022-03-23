var result = document.getElementById("json-result");
var saida = document.getElementById("saida");
var latitude;
var longitude;
var cidade;

const Http = new XMLHttpRequest();
function getLocation() {
	console.log("getLocation Called");
    var bdcApi = "https://api.bigdatacloud.net/data/reverse-geocode-client"
    
    navigator.geolocation.getCurrentPosition(
		(position) => {
			bdcApi = bdcApi
            + "?latitude=" + position.coords.latitude
            + "&longitude=" + position.coords.longitude
            + "&localityLanguage=en";
            getApi(bdcApi);
            
            latitude = position.coords.latitude;
            console.log(latitude);
        	longitude = position.coords.longitude;
            console.log(longitude);
            cidade = bdcApi.city;
            console.log(cidade);
	
		},
        (err) => { getApi(bdcApi); },
        {
			enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0
        }
	);
}
function getApi(bdcApi) {
	Http.open("GET", bdcApi);
    Http.send();
    Http.onreadystatechange = function () {
		if (this.readyState == 4 && this.status == 200){
			result.innerHTML = this.responseText;
        }
    };
}

