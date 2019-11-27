var building = [];
building[0] = "image/logo1.jpg";
building[1] = "image/logo2.jpg";
building[2] = "image/logo3.jpg";
building[3] = "image/logo4.jpg";
building[4] = "image/logo5.jpg";

var bolinhas = [];
bolinhas[0] = "image/5bolas1.png";
bolinhas[1] = "image/5bolas2.png";
bolinhas[2] = "image/5bolas3.png";
bolinhas[3] = "image/5bolas4.png";
bolinhas[4] = "image/5bolas5.png";

var num = 0;
var pausado=0;

var play = document.getElementById("play");
var stop = document.getElementById("stop");
var pause = document.getElementById("pause");
var next = document.getElementById("next");
var back = document.getElementById("back");

function changePic(){
    if (num>=4) num=0;
    else num++;
    document.buildingpic.src=building[num];
    document.bolas.src=bolinhas[num];
}

function changePicBack(){
    if (num<=0) num=4;
    else num--;
    document.buildingpic.src=building[num];
    document.bolas.src=bolinhas[num];
}

function cronometro(){
    setInterval(function() {
        if(pausado==0)
            changePic()
    },2000);
}

function crPlay(){
    if (pausado==0) cronometro();
    else pausado=0;
    play.disabled = true;
    pause.disabled = false;
    stop.disabled = false;
}

function crPause(){
    pausado=1;
    play.disabled = false;
    pause.disabled = true;
    stop.disabled = false;
}

function crStop(){
    pausado=1;
    document.buildingpic.src=building[0];
    document.bolas.src=bolinhas[0];
    play.disabled = false;
    pause.disabled = true;
    stop.disabled = true;
}
