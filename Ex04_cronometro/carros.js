var num = 0;

var carr = [];
carr[0] = "car0.jpg"
carr[1] = "car1.jpg"
carr[2] = "car2.jpg"

var nome = [];
nome[0] = "Civic";
nome[1] = "Corola";
nome[2] = "Focus";

var pote = [];
pote[0] = "140 cv";
pote[1] = "155 cv";
pote[2] = "172 cv";

var gara = [];
gara[0] = "3 anos";
gara[1] = "3 anos";
gara[2] = "5 anos";

var cons = [];
cons[0] = "9,2 km/l";
cons[1] = "não informado";
cons[2] = "8,5 km/l";

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
    imag.src = carr[num];
    vnome.innerHTML = nome[num];
    vpote.innerHTML = pote[num];
    vgara.innerHTML = gara[num];
    vcons.innerHTML = cons[num];
    console.log(imag);
    console.log(nome);
    console.log(pote);
    console.log(gara);
    console.log(cons);
}
