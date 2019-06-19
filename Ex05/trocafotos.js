var building = [];
building[0] = "logo1.jpg";
building[1] = "logo4.jpg";
building[2] = "logo5.jpg";
building[3] = "logo6.jpg";
var num = 0;
var pausado=0;

var play = document.getElementById("play");
var stop = document.getElementById("stop");
var pause = document.getElementById("pause");
var next = document.getElementById("next");
var back = document.getElementById("back");

function changePic(){
    if (num>=building.length-1) num=0;
    num++;
    document.buildingpic.src=building[num];
}

function changePicBack(){
    if (num<=0) num=4;
    num--;
    document.buildingpic.src=building[num];
}

function cronometro(){
    setInterval(function() {
        if(pausado==0)
            changePic()
    },1000);
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
    play.disabled = false;
    pause.disabled = true;
    stop.disabled = true;
}
