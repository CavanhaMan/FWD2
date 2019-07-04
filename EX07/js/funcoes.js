//Rodrigo Cavanhaman
var joao = document.getElementById("joaozinho");
console.log(joao);
var msg = document.getElementById("mensagem");
console.log(msg);
var timer=0;
var control=0;

/* Inicialmente garoto “Pensativo”*/
var dude="pensativo";


function over(){
    joao.src="Imagens/Assustado.png";
    if(dude=="assustado")
        setTimeout(function(){ joao.src="Imagens/Pensativo.png"; }, 4000);

    else if(dude=="alegre")
        clearTimeout();
    else
        dude="asustado";
}

function click(){
    if(dude=="assustado")
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
    control=1;
}

// setTimeout(function(){ alert("Hello"); }, 3000);



/**********************************************************************/
/*
- mouse over PENSATIVO => deverá virar ASSUSTADO
- movimentar mouse sobre a ASSUSTADO e não clicar => deverá virar PENSATIVO
- clicar na ASSUSTADO => deverá virar ALEGRE + mensagem "Gosto quando você interage comigo" (4 segundos)
- mouse sobre ALEGRE => mensagem "Que bom que você voltou. Vamos brincar?" (IMAGEM NAO MUDA)
- ALEGRE sem clicar nem passar num intervalo de 5 e 15 segundos => NERVOSO + mensagem "Onde está você? Brinque comigo!!!"
- mouse sobre NERVOSO => mensagem "Não suma mais. Gosto quando você interage comigo" => depois deverá virar ALEGRE
*/
