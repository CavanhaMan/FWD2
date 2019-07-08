//Rodrigo Cavanhaman
var joao = document.getElementById("joaozinho");
console.log(joao);
var msg = document.getElementById("mensagem");
console.log(msg);
var timer=0;
var control=0;

/* Inicialmente garoto “Pensativo”*/
var dude="pensativo";
//pensativo     assustado       alegre      nervoso
console.log(dude=="pensativo");

function over(){
    //- mouse over PENSATIVO => deverá virar ASSUSTADO
    if (dude=="pensativo"){
        joao.src="Imagens/Assustado.png";
        dude="assustado";
        console.log("dude_over_pensativo: ",dude);
    }
    //- mouse over ALEGRE => mensagem "Que bom que você voltou. Vamos brincar?" (IMAGEM NAO MUDA)
    else if(dude=="alegre"){
		clearTimeout(timer);
        msg.innerHTML="Que bom que você voltou.<BR>Vamos brincar?";
        console.log("dude_over_alegre: ",dude);
    }
    //- mouse over NERVOSO => mensagem "Não suma mais. Gosto quando você interage comigo" =>
    //                     => depois deverá virar ALEGRE
    else if(dude=="nervoso"){
        msg.innerHTML="Não suma mais. Gosto quando você interage comigo";
        joao.src="Imagens/Alegre.png";
        dude="alegre";
        console.log("dude_over_nervoso: ",dude);
    }
    //- mouse over ASSUSTADO e não clicar => deverá virar PENSATIVO
    else if(dude=="assustado"){
        joao.src="Imagens/Pensativo.png";
        dude="pensativo";
        console.log("dude_over_assustado: ",dude);
    }
}

function click(){
    //- clicar na ASSUSTADO => deverá virar ALEGRE + mensagem "Gosto quando você interage comigo" (4 segundos)
    if(dude=="assustado"){
        joao.src="Imagens/Alegre.png";
        dude="alegre";
        setTimeout(function(){ msg.innerHTML="Gosto quando você interage comigo"; }, 4000);
        console.log("dude_clicado_assustado: ",dude);
    }
}

function leave(){
    if(dude=="alegre"){
        timer = setTimeout(function(){
			setTimeout(msg.innerHTML="",4000);
			joao.src="Imagens/Nervoso.png";
			dude="nervoso";
			console.log("dude_over_alegre: ",dude);
		}, 5000);
    }
    else if(dude=="assustado"){
		g_personagem = "Pensativo";
        joao.src="Imagens/Pensativo.png";
        dude="pensativo";
    }
}


function timer(){
    //- ALEGRE sem clicar nem passar num intervalo de 5 e 15 segundos => NERVOSO + mensagem "Onde está você? Brinque comigo!!!"
    var x =(Math.floor(Math.random()*15)+5);
    var tempo = setTimeout(function(){ msg.innerHTML="Onde está você? Brinque comigo!!!"; }, x);
}




/******************************************* */
//        setTimeout(function(){ joao.src="Imagens/Pensativo.png"; }, 4000);
//        clearTimeout();



function leave(){
    control=1;
}
/**********************************************************************/

//- mouse over PENSATIVO => deverá virar ASSUSTADO
//- mouse over ASSUSTADO e não clicar => deverá virar PENSATIVO
//- mouse over ALEGRE => mensagem "Que bom que você voltou. Vamos brincar?" (IMAGEM NAO MUDA)
//- mouse over NERVOSO => mensagem "Não suma mais. Gosto quando você interage comigo" => depois deverá virar ALEGRE
//- clicar na ASSUSTADO => deverá virar ALEGRE + mensagem "Gosto quando você interage comigo" (4 segundos)
//- ALEGRE sem clicar nem over num intervalo de 5 e 15 segundos => NERVOSO + mensagem "Onde está você? Brinque comigo!!!"

