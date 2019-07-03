//Rodrigo Cavanhaman
var joao = document.getElementById("joaozinho");
console.log(joao);
var msg = document.getElementById("mensagem");
console.log(msg);
var timer=0;
var dude=0;

function over(){
    joao.src="Imagens/Assustado.png";
    dude="assustado";
    if(dude=="assustado")
        setTimeout(function(){ joao.src="Imagens/Pensativo.png"; }, 4000);
    if(dude=="alegre")
    else
        clearTimeout;
}

function click(){
    if(dude=="alegre"){
        msg.innerHTML="Que bom que você voltou.<BR>Vamos brincar?";
        dude="alegre";
    }
    else{
        joao.src="Imagens/Alegre.png";
        dude="alegre";
        msg.innerHTML="Gosto quando você<BR>interage comigo";
        setTimeout(function(){ msg.innerHTML=""; }, 4000);
    }
}

function leave(){
    
}

// setTimeout(function(){ alert("Hello"); }, 3000);