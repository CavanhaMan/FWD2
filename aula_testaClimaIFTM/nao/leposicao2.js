var geocoder;
var chaveG;

function insertGoogleScript() {
  //A chave do google foi armazenada em um arquivo local 'google.key'
  //Este arquivo foi incluido no .gitignore para não ser enviado para o github
  jQuery.get('google.key', function (chaveG) {
    console.log("chaveG = " + typeof (chaveG));

    var google_api = document.createElement('script'), api_key = chaveG;
    // Inject the script for Google's API and reference the initGoogleAPI
    // function as a callback.
    google_api.src = 'https://maps.googleapis.com/maps/api/js?key=' + api_key + '&callback=initMap';
    document.body.appendChild(google_api);


    function initialize() {
      geocoder = new google.maps.Geocoder();
    }

    //src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBZVcmBGEMpqjC1MQXhGFh-hzijyGABYoo&callback=initMap"

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(successFunction, errorFunction);
    }
    //Get the latitude and the longitude;
    function successFunction(position) {
      var lat = position.coords.latitude;
      var lng = position.coords.longitude;
      codeLatLng(lat, lng)
    }

    function errorFunction() {
      console.log("Geocoder failed");
    }

    function codeLatLng(lat, lng) {
      var latlng = new google.maps.LatLng(lat, lng);
      geocoder.geocode({ 'latLng': latlng }, function (results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
          console.log(results)
          if (results[1]) {//formatted address
            console.log(results[0].formatted_address)
            //find country name
            for (var i = 0; i < results[0].address_components.length; i++) {
              for (var b = 0; b < results[0].address_components[i].types.length; b++) {
                //there are different types that might hold a city admin_area_lvl_1 usually does in come cases looking for sublocality type will be more appropriate
                if (results[0].address_components[i].types[b] == "administrative_area_level_1") {
                  //this is the object you are looking for
                  city = results[0].address_components[i];
                  break;
                }
              }
            }
            //city data
            console.log(city.short_name + " " + city.long_name)
          } else
            console.log("No results found");
        } else
          console.log("Geocoder failed due to: " + status);
      });
    }

  });
}
