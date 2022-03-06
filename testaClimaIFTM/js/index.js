$("#tabela").hide();
$("#figurinha").hide();
var chaveD;
var lati;
var longi;
var cidade;
var api_call;
//_____________________________________________________________________
var latitude;
var longitude;
var chaveG;
var x = document.getElementById("saida");
var result;

// ===PARTE DO GOOGLE:====================================================
//A chave do google foi armazenada em um arquivo local 'google.key'
//Este arquivo foi incluido no .gitignore para não ser enviado para o github
jQuery.get('google.key', function (chaveG) {
	console.log("chaveG = " + typeof (chaveG));
	var google_api = document.createElement('script'), api_key = chaveG;
	
	// Inject the script for Google's API and reference the initGoogleAPI
	// function as a callback.
  	google_api.src = 'https://maps.googleapis.com/maps/api/js?key=' + api_key + '&callback=initGoogleAPI&libraries=places,geometry';
	document.body.appendChild(google_api);
});

//ativa-desativa botão OK de acordo com o checkbox:
$("#usarLocal").click(function() {
    $("#localOk").attr("disabled", !this.checked);
  });

//ativa-destiva botão OBTER CLIMA de acordo com textbox:
$(function () {
	$("#city-search").keyup(function () {
		var btn = $("#obterClima");
		if ($(this).val().trim() != "") {
			btn.removeAttr("disabled");
		} else {
			btn.attr("disabled", "disabled");
		}
	});
});

// =======================================================================
//FREE REVERSE GEOCODING API
//<script src="https://cdn.jsdelivr.net/gh/bigdatacloudapi/js-reverse-geocode-client@latest/bigdatacloud_reverse_geocode.min.js" type="text/javascript"></script>
function geoCode(){
	/* Initialise Reverse Geocode API Client */
    var reverseGeocoder=new BDCReverseGeocode();
	/* You can also set the locality language as needed */
    reverseGeocoder.localityLanguage='pt';
    /* Get the current user's location information, based on the coordinates provided by their browser */
    /* Fetching coordinates requires the user to be accessing your page over HTTPS and to allow the location prompt. */
    reverseGeocoder.getClientLocation(function(result) {
    	console.log("Free Reverse Geocode API:")
        console.log(result);
        saida.innerHTML="Latitude: " + result.latitude +
        "<br>Longitude: " + result.longitude +
        "<br>Cidade: " + result.city +
        " - " + result.principalSubdivision +
        " - " + result.countryName;
		latitude = result.latitude;
		longitude = result.longitude;
		cidade = result.city;
	});
}
/*****************************************************************/
geoCode();

// SearchBox Method
function initGoogleAPI() {
	var autocomplete = new google.maps.places.SearchBox(document.querySelector("#city-search"));
	autocomplete.addListener('places_changed', function () {
		var place = autocomplete.getPlaces()[0];
		latitude = place.geometry.location.lat();
		console.log("A= " + latitude);
		longitude = place.geometry.location.lng();
		console.log("A= " + longitude);
		cidade=$('#city-search').val();
		console.log(cidade);
	});
}

//_____________________________________________________________________
$("#usarLocal").on('change', function () {
	if ($(this).prop('checked')) 
		geoCode();
});

function get() {
	jQuery.get('darksky.key', function (chaveD) {
		console.log("chaveD = " + typeof (chaveD));

		//Desmarca usar a localização atual
		$("#usarLocal").prop("checked", false);
		//Desabilita o botão ok
		$("#localOk").attr("disabled", true);
		//Limpa o textbox do campo de pesquisa
		$("#city-search").val("");

        url = 'https://api.darksky.net/forecast/',
		//lati = "-18.923519134521484",
		//longi = "-48.26726150512695",
		opcoes = "?exclude=minutely,hourly,daily,flags,alerts";

		api_call = url + chaveD + "/" + latitude + "," + longitude + opcoes;

		//$.get("https://api.darksky.net/forecast/8eeafa93fa171bb970bfac9b03caa3a3/-18.9127749,-48.2755227?exclude=minutely,hourly,daily,flags,alerts", function( data ) {
		$.get(api_call, function (data) {

			var clima = data;
			//console.log( data ); // HTML content of the jQuery.ajax page
			//console.log( clima );

			let icone = data.currently.icon;
			get_icon(icone);
			//icon.innerHTML = get_icon(icone);
			//icon.innerHTML = data.currently.icon;
			//c1.innerHTML = data.timezone.split("/")[1];
			c1.innerHTML = cidade;
			c2.innerHTML = data.latitude;
			c3.innerHTML = data.longitude;
			//c4.innerHTML = new Date(data.currently.time * 1000).toISOString().slice(0, 19).replace('T', ' ');
			mostraData();
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

			function degToCompass(num) {
				var val = Math.floor((num / 22.5) + 0.5);
				var arr = ["Norte", "Nor-nordeste", "Nordeste", "Les–nordeste", "Leste", "Les–sudeste", "Sudeste", "Sul-sudeste", "Sul", "Sul-sudoeste", "Sudoeste", "Oes-sudoeste", "Oeste", "Oes-noroeste", "Noroeste", "Nor-noroeste"];
				return arr[(val % 16)];
			}

			function mostraData() {
				var date = new Date(data.currently.time * 1000);
				console.log(date);
				var dd = (date + ' ').split(' ');
				console.log(dd);
				const weekday = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sabado"]
				var dia = weekday[date.getDay()]; console.log(dia + '-feira');
				var mes;
				if (dd[1] == 'Feb') mes = 'Fevereiro';
				if (dd[1] == 'Mar') mes = 'Março';
				if (dd[1] == 'Apr') mes = 'Abril';
				if (dd[1] == 'May') mes = 'Maio';
				if (dd[1] == 'June') mes = 'Junho';
				if (dd[1] == 'July') mes = 'Julho';
				if (dd[1] == 'Aug') mes = 'Agosto';
				if (dd[1] == 'Sept') mes = 'Setembro';
				if (dd[1] == 'Oct') mes = 'Outubro';
				if (dd[1] == 'Nov') mes = 'Novembro';
				if (dd[1] == 'Dec') mes = 'Dezembro';
				var pegaData = dia + '-feira, ' + dd[2] + ' de ' + mes + ' de ' + dd[3] + ' - ' + dd[4];
				console.log(pegaData);
				console.log(dia + '-feira, ' + dd[2] + ' de ' + mes + ' de ' + dd[3] + ' - ' + dd[4]);
				c4.innerHTML = pegaData;
			}


			function get_icon(icone) {
				console.log(icone);
				if (icone === 'clear-day') {
					icon.innerHTML = '<i class="wi wi-day-sunny"></i>';
					$("#clima").html("Dia claro");
				}
				else if (icone === 'clear-night') {
					icon.innerHTML = '<i class="wi wi-night-clear"></i>';
					$("#clima").html("Noite clara");
				}
				else if (icone === 'partly-cloudy-day') {
					icon.innerHTML = '<i class="wi wi-day-cloudy"></i>';
					$("#clima").html("Dia parcialmente nublado");
				}
				else if (icone === 'partly-cloudy-night') {
					icon.innerHTML = '<i class="wi wi-night-alt-cloudy"></i>'
					$("#clima").html("Noite parcialmente nublada");
				}
				else if (icone === 'cloudy') {
					icon.innerHTML = '<i class="wi wi-cloudy"></i>';
					$("#clima").html("Nublado");
				}
				else if (icone === 'rain') {
					icon.innerHTML = '<i class="wi wi-rain"></i>';
					$("#clima").html("Chuvoso");
				}
				else if (icone === 'sleet') {
					icon.innerHTML = '<i class="wi wi-sleet"></i>';
					$("#clima").html("Granizo");
				}
				else if (icone === 'snow') {
					icon.innerHTML = '<i class="wi wi-snow"></i>';
					$("#clima").html("Neve");
				}
				else if (icone === 'wind') {
					icon.innerHTML = '<i class="wi wi-strong-wind"></i>';
					$("#clima").html("Ventos fortes");
				}
				else if (icone === 'fog') {
					icon.innerHTML = '<i class="wi wi-fog"></i>';
					$("#clima").html("Neblina");
				}
			}
		});
		$("#tabela").show();
		$("#figurinha").show();
	});

}
