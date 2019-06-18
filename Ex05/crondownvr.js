var c = 1000;
var cx= 100;
var s = 59;
var m = 59;
var h = 59;
var pausado=0;

var dhor = document.getElementById("hh");
var dmin = document.getElementById("mm");
var dseg = document.getElementById("ss");
var dcent= document.getElementById("ccc");

var play = document.getElementById("play");
var stop = document.getElementById("stop");
var pause = document.getElementById("pause");
var clean = document.getElementById("clean");

function cronometro(){
    setInterval(function() {
        if(pausado==0){
            if (c == 0) c=999;
            if (cx == 0){ s--; cx=99; }
            if (s == 0)  { m--; s=59; }
            if (m == 0)  { h--; s=59; m=59; }
            if (h < 10) dhor.innerHTML = "0"+h; else dhor.innerHTML = h;
            if (s < 10) dseg.innerHTML = "0"+s; else dseg.innerHTML = s;
            if (m < 10) dmin.innerHTML = "0"+m; else dmin.innerHTML = m;
            if (c < 10) dcent.innerHTML = "00"+c; else if (c < 100) dcent.innerHTML = "0"+c; else dcent.innerHTML = c;
            c--;
            cx--;
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

    h=59;
    m=59;
    s=59;
    c=999;

    dhor.innerHTML="59";
    dmin.innerHTML="59";
    dseg.innerHTML="59";
    dcent.innerHTML="999";
}

/*window.onload=cronometro;*/