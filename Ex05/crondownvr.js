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

var entrada = document.getElementById("entrada");
var limpar = document.getElementById("limpaEntrada");
var en

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

function chegaFinal(){
    if(h==0 && m==0 && s==0 && c==0){
        crStop();
        alert("Fim da contagem!");
    }

}

function crPlay(){
    var dado = entrada.value;
    var padrao = /^([0-5][0-9]):([0-5][0-9]):([0-5][0-9]):([0-9][0-9][0-9])$/;
    if (padrao.test(dado)){
        var tempo = dado.split(":");
        h=tempo[0];
        m=tempo[1];
        s=tempo[2];
        c=tempo[3];
        
        console.log("H:"+h+" M:"+m+" S:"+s+" C:"+c);
        
        dhor.innerHTML=tempo[0];
        dmin.innerHTML=tempo[1];
        dseg.innerHTML=tempo[2];
        dcent.innerHTML=tempo[3];
    
        if (pausado==0) cronometro();
        else pausado=0;
        play.disabled = true;
        pause.disabled = false;
        stop.disabled = false;
        clean.disabled = true;
        limpar.disabled = true;
        entrada.disabled = true;
    }
    else{
        alert("Entrada de tempo Inválida!");
    }


}

function crStop(){
    pausado=1;

    play.disabled = true;
    pause.disabled = true;
    stop.disabled = true;
    clean.disabled = false;
    limpaCampo.disabled=true;
    limpar.disabled = true;
    entrada.disabled = true;
}

function crPause(){
    pausado=1;

    play.disabled = false;
    pause.disabled = true;
    stop.disabled = false;
    clean.disabled = true;
    limpar.disabled = true;
    entrada.disabled = true;
}

function crClean(){
    play.disabled = false;
    pause.disabled = true;
    stop.disabled = true;
    clean.disabled = true;

    h=00;
    m=00;
    s=00;
    c=000;

    dhor.innerHTML="00";
    dmin.innerHTML="00";
    dseg.innerHTML="00";
    dcent.innerHTML="000";
    entrada.value="";
    limpar.disabled = false;
    entrada.disabled = false;

}

function limpaCampo(){
    entrada.value="";
}

/***VERIFICA PADRÃO DE ENTRADA*******************************************************************/
//HH:MM:SS:CC (HH: hora, MM: minuto, SS: segundo, CC: centésimo de segundo).
//Valores permitidos para cada unidade de tempo: 
//(HH>=00 && HH<=23), 
//(MM>=00 && MM<=59),
//(SS>=00 && SS<=59) e
//(CC>=00 && CC<=999)
/*
function validaEntrada() {
		var dado = document.getElementById("entrada").value;
		var padrao = /^([0-1][0-9]|2[0-3])(:([0-5][0-9])){2}:([0-9][0-9][0-9])$/;
		if (padrao.test(dado)){
		}
		else{
			alert("Entrada de tempo Inválida!");
		}
};
*/