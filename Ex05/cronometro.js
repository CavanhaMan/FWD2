var c = 0;
var cx= 0;
var s = 0;
var m = 0;
var h = 0;
var pausado=0;

var dhor = document.getElementById("hh");
var dmin = document.getElementById("mm");
var dseg = document.getElementById("ss");
var dcent= document.getElementById("ccc");

var play = document.getElementById("play");
var stop = document.getElementById("stop");
var pause = document.getElementById("pause");
var clean = document.getElementById("clean");
var cresce = document.getElementById("cresce");
var decresce = document.getElementById("decresce");

function cronometro(){
    setInterval(function() {
        if(pausado==0){
            if (c == 1000) c=0;
            if (cx == 100){ s++; cx=0; }
            if (s == 60)  { m++; s=0; }
            if (m == 60)  { h++; s=0; m=0; }
            if (h < 10) dhor.innerHTML = "0"+h; else dhor.innerHTML = h;
            if (s < 10) dseg.innerHTML = "0"+s; else dseg.innerHTML = s;
            if (m < 10) dmin.innerHTML = "0"+m; else dmin.innerHTML = m;
            if (c < 10) dcent.innerHTML = "00"+c; else if (c < 100) dcent.innerHTML = "0"+c; else dcent.innerHTML = c;
            c++;
            cx++;
        }
    },10);
}

function crPlay(){
    if (pausado==0) cronometro();
    else pausado=0;

    play.disabled = true;
    pause.disabled = false;
    stop.disabled = false;
    clean.disabled = true;
    cresce.disabled = true;
    decresce.disabled = true;

}

function crStop(){
    pausado=1;

    play.disabled = true;
    pause.disabled = true;
    stop.disabled = true;
    clean.disabled = false;
    cresce.disabled = false;
    decresce.disabled = false;
}

function crPause(){
    pausado=1;

    play.disabled = false;
    pause.disabled = true;
    stop.disabled = false;
    clean.disabled = true;
    cresce.disabled = true;
    decresce.disabled = true;
}

function crClean(){
    play.disabled = false;
    pause.disabled = true;
    stop.disabled = true;
    clean.disabled = true;
    cresce.disabled = false;
    decresce.disabled = false;

    h=0;
    m=0;
    s=0;
    c=0;

    dhor.innerHTML="00";
    dmin.innerHTML="00";
    dseg.innerHTML="00";
    dcent.innerHTML="000";
}

function crCrescente(){

}

function crDescrescente(){

}

/*window.onload=cronometro;*/