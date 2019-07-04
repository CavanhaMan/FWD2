var dhor = document.getElementById("hh");
var dmin = document.getElementById("mm");
var dseg = document.getElementById("ss");
var dcent= document.getElementById("ccc");

function completa(t){
    if(t < 10) return "0" + String(t);
    else return String(t);
}
function completaM(t){
    if(t < 100) return "0" + String(t);
    else if(t < 10) return "00" + String(t);
    else return String(t);
}

function relogio(){
    setInterval(function() {
        var agora = new Date();
        dhor.innerHTML = completa(agora.getHours());
        dmin.innerHTML = completa(agora.getMinutes());
        dseg.innerHTML = completa(agora.getSeconds());
        dcent.innerHTML = completaM(agora.getMilliseconds());
    },10);
}

window.onload=relogio();