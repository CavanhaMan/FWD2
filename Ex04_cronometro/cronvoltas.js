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
var volta = document.getElementById("volta");

var tabela = document.getElementById("tabVoltas");
var tabCorpo = document.getElementById("tabCorpo");

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
    volta.disabled = false;
}

function crStop(){
    pausado=1;
    play.disabled = true;
    pause.disabled = true;
    stop.disabled = true;
    clean.disabled = false;
    volta.disabled = true;
}

function crPause(){
    pausado=1;
    play.disabled = false;
    pause.disabled = true;
    stop.disabled = false;
    clean.disabled = true;
    volta.disabled = true;
}

function crClean(){
    play.disabled = false;
    pause.disabled = true;
    stop.disabled = true;
    clean.disabled = true;
    volta.disabled = true;

    h=0;
    m=0;
    s=0;
    c=0;

    dhor.innerHTML="00";
    dmin.innerHTML="00";
    dseg.innerHTML="00";
    dcent.innerHTML="000";

    $("#tabCorpo").empty();
    contaVolta=0;
}

var contaVolta=0;
var ha=0;
var ma=0;
var sa=0;
var ca=0;
function crVolta(){
    contaVolta++;
    var row = tabCorpo.insertRow(contaVolta-1);
    var cell0 = row.insertCell(0);
    var cell1 = row.insertCell(1);
    var cell2 = row.insertCell(2);
    cell0.innerHTML = contaVolta;
    cell1.innerHTML = mod(h,ha)+":"+mod(m,ma)+":"+mod(s,sa)+":"+mod(c,ca);
    cell2.innerHTML = h+":"+m+":"+s+":"+c;
    ha=h;
    ma=m;
    sa=s;
    ca=c;
}

function mod(n,na){
    if (n>na) return (n-na);
    else if (n<na) return (na-n);
    else return 0;
}