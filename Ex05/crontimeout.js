var cx= 0;
var s = 0;
var m = 0;
var h = 0;
var pausado=0;

var dhor = document.getElementById("hh");
var dmin = document.getElementById("mm");
var dseg = document.getElementById("ss");

var play = document.getElementById("play");
var stop = document.getElementById("stop");
var pause = document.getElementById("pause");
var clean = document.getElementById("clean");

function cronometro(){
    setTimeout(function() {
        if(pausado==0){
            if (s == 60)  { m++; s=0; }
            if (m == 60)  { h++; s=0; m=0; }
            if (h < 10) dhor.innerHTML = "0"+h; else dhor.innerHTML = h;
            if (s < 10) dseg.innerHTML = "0"+s; else dseg.innerHTML = s;
            if (m < 10) dmin.innerHTML = "0"+m; else dmin.innerHTML = m;
            s++;
			cronometro();
        }
		else pausado=0;
    },1000);
}

function crPlay(){
    if (pausado==0) cronometro();
    else pausado=0;

    play.disabled = true;
    pause.disabled = false;
    stop.disabled = false;
    clean.disabled = true;
}

function crStop(){
    pausado=1;

    play.disabled = true;
    pause.disabled = true;
    stop.disabled = true;
    clean.disabled = false;
}

function crPause(){
    pausado=1;
	
    play.disabled = false;
    pause.disabled = true;
    stop.disabled = false;
    clean.disabled = true;
}

function crClean(){
    play.disabled = false;
    pause.disabled = true;
    stop.disabled = true;
    clean.disabled = true;

    h=0;
    m=0;
    s=0;

    dhor.innerHTML="00";
    dmin.innerHTML="00";
    dseg.innerHTML="00";
}

/*window.onload=cronometro;*/