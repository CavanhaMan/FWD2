var num = 0;

var carros = [][];
carros[0][0] = "car0.jpg"
carros[0][1] = "car1.jpg"
carros[0][2] = "car2.jpg"
carros[1][0] = "Civic";
carros[1][1] = "Corola";
carros[1][2] = "Focus";
carros[2][0] = "140 cv";
carros[2][1] = "155 cv";
carros[2][2] = "172 cv";
carros[3][0] = "3 anos";
carros[3][1] = "3 anos";
carros[3][2] = "5 anos";
carros[4][0] = "9,2 km/l";
carros[4][1] = "não informado";
carros[4][2] = "8,5 km/l";

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
    imag.src = carros[0][num];
    vnome.innerHTML = carros[1][num];
    vpote.innerHTML = carros[2][num];
    vgara.innerHTML = carros[3][num];
    vcons.innerHTML = carros[4][num];

}
