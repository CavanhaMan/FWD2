//Rodrigo Cavanhaman
var joao = document.getElementById("joaozinho");
console.log(joao);
var msg = document.getElementById("mensagem");
console.log(msg);
var aviso = document.getElementById("aviso");
var timer;
var control=0;
var aux; 
var brabo;

/* Inicialmente garoto “Pensativo”*/
var dude="Pensativo";
//Pensativo     Assustado       Alegre      Nervoso
console.log(dude=="Pensativo");

function dudeOver(){
    clearTimeout(brabo);

    //- mouse over Pensativo => deverá virar Assustado
    if (dude=="Pensativo"){
        joao.src="Imagens/Assustado.png";
        dude="Assustado";
        console.log("dude_over_Pensativo => ",dude);
    }
    //- mouse over Alegre => mensagem "Que bom que você voltou. Vamos brincar?" (IMAGEM NAO MUDA)
    else if(dude=="Alegre"){
        msg.innerHTML="Que bom que você voltou.<BR>Vamos brincar?";
        clearTimeout(timer);
        timer = setTimeout(function(){ msg.innerHTML=""; }, 4000);
    //     console.log("dude_over_Alegre: ",dude);
    }
    //- mouse over Nervoso => mensagem "Não suma mais. Gosto quando você interage comigo" =>
    //                     => depois deverá virar Alegre
    else if(dude=="Nervoso"){
        clearTimeout(timer);
        msg.innerHTML="Não suma mais! Gosto quando você interage comigo";
        joao.src="Imagens/Alegre.png";
        dude="Alegre";
         console.log("dude_over_Nervoso: ",dude);
    }
    //- mouse over Assustado e não clicar => deverá virar Pensativo
/*    else if(dude=="Assustado"){
        joao.src="Imagens/Pensativo.png";
        dude="Pensativo";
        console.log("dude_over_Assustado: ",dude);
    }*/
}

function dudeClick(){
    console.log("dude_clique ok: ",dude);
    //- clicar na Assustado => deverá virar Alegre + mensagem "Gosto quando você interage comigo" (4 segundos)
    if(dude=="Assustado"){
        console.log("dude_clique_Assustado => ",dude);
        joao.src="Imagens/Alegre.png";
        dude="Alegre";
        msg.innerHTML="Gosto quando você interage comigo!";
        timer = setTimeout(function(){ msg.innerHTML=""; }, 4000);
        console.log("dude_clicado_Assustado: ",dude);
    }
}

function dudeOut(){
    if (dude=="Assustado"){
        joao.src="Imagens/Pensativo.png";
        dude="Pensativo";
        console.log("dude_over_Assustado => ",dude);
    }
    //- Alegre sem clicar nem passar num intervalo de 5 e 15 segundos => Nervoso + mensagem "Onde está você? Brinque comigo!!!"
    if (dude=="Alegre"){
        var x =(Math.floor(Math.random()*15)+5);
        aux=x-1;
        console.log("tempo para ficar nervoso: "+x)
        brabo = setInterval(function(){
            aviso.innerHTML=("CUIDADO! Ficando nervoso em... "+aux--);
        },1000);
        timer = setTimeout(function(){ 
            clearTimeout(brabo);
            dude="Nervoso";
            joao.src="Imagens/Nervoso.png";
            msg.innerHTML="Onde está você?<BR>Brinque comigo!!!"; 
        }, x*1000);
    }
    // if(dude=="Alegre"){
    //     timer = setTimeout(function(){
	// 		setTimeout(msg.innerHTML="",4000);
	// 		joao.src="Imagens/Nervoso.png";
	// 		dude="Nervoso";
	// 		console.log("dude_over_Alegre: ",dude);
	// 	}, 5000);
    // }
    // else if(dude=="Assustado"){
	// 	g_personagem = "Pensativo";
    //     joao.src="Imagens/Pensativo.png";
    //     dude="Pensativo";
    // }
}




/******************************************* */
//        setTimeout(function(){ joao.src="Imagens/Pensativo.png"; }, 4000);
//        clearTimeout();



function leave(){
    control=1;
}
/**********************************************************************/

//- mouse over Pensativo => deverá virar Assustado
//- mouse over Assustado e não clicar => deverá virar Pensativo
//- mouse over Alegre => mensagem "Que bom que você voltou. Vamos brincar?" (IMAGEM NAO MUDA)
//- mouse over Nervoso => mensagem "Não suma mais. Gosto quando você interage comigo" => depois deverá virar Alegre
//- clicar na Assustado => deverá virar Alegre + mensagem "Gosto quando você interage comigo" (4 segundos)
//- Alegre sem clicar nem over num intervalo de 5 e 15 segundos => Nervoso + mensagem "Onde está você? Brinque comigo!!!"

