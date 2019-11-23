var num = 0;

var carros0 = [];
var carros1 = [];
var carros2 = [];
var carros3 = [];
var carros4 = [];
carros0[0] = "image/car0.jpg"
carros0[1] = "image/car1.jpg"
carros0[2] = "image/car2.jpg"
carros1[0] = "Civic";
carros1[1] = "Corola";
carros1[2] = "Focus";
carros2[0] = "140 cv";
carros2[1] = "155 cv";
carros2[2] = "172 cv";
carros3[0] = "3 anos";
carros3[1] = "3 anos";
carros3[2] = "5 anos";
carros4[0] = "9,2 km/l";
carros4[1] = "não informado";
carros4[2] = "8,5 km/l";

var imag = document.getElementById("imag");
var vnome = document.getElementById("nome");
var vpote = document.getElementById("potencia");
var vgara = document.getElementById("garantia");
var vcons = document.getElementById("consumo");

setInterval(function () {
    mudaCarro()
}, 2000);

function mudaCarro() {
    if (num >= 2) num = 0;
    else num++;
    imag.src = carros0[num];
    vnome.innerHTML = carros1[num];
    vpote.innerHTML = carros2[num];
    vgara.innerHTML = carros3[num];
    vcons.innerHTML = carros4[num];

}
