//Rodrigo Cavanhaman
var joao = document.getElementById("joaozinho");
var msg = document.getElementById("mensagem");
var aviso = document.getElementById("aviso");
var chat = document.getElementById("chat");
var timer;
var aux; 
var brabo;

/* Inicialmente garoto “Pensativo”*/
var dude="Pensativo";
//Pensativo     Assustado       Alegre      Nervoso
console.log(dude=="Pensativo");

function dudeOver(){
    clearTimeout(brabo);
    joao.className = "normal";
    //- mouse over Pensativo => deverá virar Assustado
    if (dude=="Pensativo"){
        joao.src="Imagens/Assustado.png";
        dude="Assustado";
        console.log("dude_over_Pensativo => ",dude);
    }
    //- mouse over Alegre => mensagem "Que bom que você voltou. Vamos brincar?" (IMAGEM NAO MUDA)
    else if(dude=="Alegre"){
        chat.src="Imagens/f_quebom.png";
        clearTimeout(timer);
        timer = setTimeout(function(){ chat.src="Imagens/f_quebom.png"; }, 4000);
         console.log("dude_over_Alegre: ",dude);
    }
    //- mouse over Nervoso => mensagem "Não suma mais. Gosto quando você interage comigo" =>
    //                     => depois deverá virar Alegre
    else if(dude=="Nervoso"){
        clearTimeout(timer);
        chat.src="Imagens/f_naosuma.png";
        timer = setTimeout(function(){ chat.src=""; }, 4000);
        joao.src="Imagens/Alegre.png";
        dude="Alegre";
         console.log("dude_over_Nervoso: ",dude);
    }
}

function dudeClick(){
    console.log("dude_clique ok: ",dude);
    //- clicar na Assustado => deverá virar Alegre + mensagem "Gosto quando você interage comigo" (4 segundos)
    if(dude=="Assustado"){
        console.log("dude_clique_Assustado => ",dude);
        joao.src="Imagens/Alegre.png";
        dude="Alegre";
        chat.src="Imagens/f_gosto.png";
        timer = setTimeout(function(){ chat.src=""; }, 4000);
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
        clearTimeout(y);
        clearTimeout(z);
        var x =(Math.floor(Math.random()*15)+5);
        aux=x-1;
        console.log("tempo para ficar nervoso: "+x)
        brabo = setInterval(function(){aviso.innerHTML=("CUIDADO! Ficando nervoso em... "+aux--);},1000);
        aviso.style.visibility = "visible";
        timer = setTimeout(function(){ 
            clearTimeout(brabo);
            dude="Nervoso";
            joao.src="Imagens/Nervoso.png";
            chat.src="Imagens/f_ondeesta.png";
            timer = setTimeout(function(){ chat.src=""; }, 4000);
        }, x*1000);
        var y = setTimeout(function(){ aviso.style.visibility = "hidden"; }, x*1000);
        var z = setTimeout(function(){ 
            joao.src="Imagens/Irado.png";
            chat.src="Imagens/f_gr.png";
            joao.className = "irado";
        }, x*2000);
    }
}


/**********************************************************************/

//- mouse over Pensativo => deverá virar Assustado
//- mouse over Assustado e não clicar => deverá virar Pensativo
//- mouse over Alegre => mensagem "Que bom que você voltou. Vamos brincar?" (IMAGEM NAO MUDA)
//- mouse over Nervoso => mensagem "Não suma mais. Gosto quando você interage comigo" => depois deverá virar Alegre
//- clicar na Assustado => deverá virar Alegre + mensagem "Gosto quando você interage comigo" (4 segundos)
//- Alegre sem clicar nem over num intervalo de 5 e 15 segundos => Nervoso + mensagem "Onde está você? Brinque comigo!!!"

