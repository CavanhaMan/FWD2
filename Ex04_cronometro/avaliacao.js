var dhor = document.getElementById("txtH");
var dmin = document.getElementById("txtM");
var dseg = document.getElementById("txtS");

var play = document.getElementById("play");
var stop = document.getElementById("stop");
var pause = document.getElementById("pause");

var s;
var m;
var h;
var pausado;

function cronometro(){
    pausado=setTimeout("contaTempo()",1000);
}

function contaTempo() {    
	h=dhor.value;
	m=dmin.value;
	s=dseg.value;

	s++;
	if (s>60 || m>60 || h>24 || s=="" || m=="" || h==""){s=0; m=0; h=0;}
	if (s == 60)  { m++; s=0; }
	if (m == 60)  { h++; s=0; m=0; }
	if (h < 10) dhor.value = "0"+h; else dhor.value = h;
	if (s < 10) dseg.value = "0"+s; else dseg.value = s;
	if (m < 10) dmin.value = "0"+m; else dmin.value = m;
	cronometro();
}

function crPlay(){
    cronometro();
    play.disabled = true;
    pause.disabled = false;
    stop.disabled = false;
}

function crPause(){
    clearTimeout(pausado);
	
    play.disabled = false;
    pause.disabled = true;
    stop.disabled = false;
}

function crStop(){
    clearTimeout(pausado);

    play.disabled = false;
    pause.disabled = true;
    stop.disabled = true;

    h=0;
    m=0;
    s=0;

    dhor.value="00";
    dmin.value="00";
    dseg.value="00";
}