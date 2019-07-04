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
    /* Ao posicionar o cursor do mouse sobre a imagem do garoto “Pensativo”,
   ela deverá ser substituída pela imagem do garoto “Assustado”.*/
    joao.src="Imagens/Assustado.png";
    if(dude=="assustado")
        setTimeout(function(){ joao.src="Imagens/Pensativo.png"; }, 4000);

    else if(dude=="alegre")
        clearTimeout();
    else
        dude="asustado";
}

function click(){
    /* Porém, se o usuário clicar sobre ela, a mesma deverá ser substituída pela
       imagem do garoto “Alegre” e, em seguida, deverá ser exibida a mensagem
       “Gosto quando você interage comigo” (4 seg)*/
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
    /*entre 5 e 15 segundos, ela deverá ser alterada para a imagem do garoto “Nervoso” e a mensagem
“Onde está você? Brinque comigo!!!”*/
}

// setTimeout(function(){ alert("Hello"); }, 3000);

/************************************************************************/
/* Ao posicionar o cursor do mouse sobre a imagem e caso ela seja a do
   garoto “Alegre”, a seguinte mensagem
   “Que bom que você voltou. Vamos brincar?”
   deverá ser exibida logo abaixo da imagem. Neste cenário, a imagem não
   deverá ser alterada.*/
/* Se o usuário não passar o cursor do mouse sobre a imagem do garoto 
   “Alegre”, após um intervalo de tempo que pode variar entre 5 e 15 segundos,
   ela deverá ser alterada para a imagem do garoto “Nervoso” e a mensagem
   “Onde está você? Brinque comigo!!!”
   deverá ser exibida logo abaixo da imagem;*/
/* Ao posicionar o cursor do mouse sobre a imagem e caso ela seja a do 
   garoto “Nervoso”, a seguinte mensagem “Não suma mais. Gosto quando 
   você interage comigo” deverá ser exibida logo abaixo da imagem.
   Em seguida, a imagem deverá ser alterada para a do garoto “Alegre”.
*/


/**********************************************************************/
/*
- mouse over PENSATIVO => deverá virar ASSUSTADO
- movimentar mouse sobre a ASSUSTADO e não clicar => deverá virar PENSATIVO
- clicar na ASSUSTADO => deverá virar ALEGRE + mensagem "Gosto quando você interage comigo" (4 segundos)
- mouse sobre ALEGRE => mensagem "Que bom que você voltou. Vamos brincar?" (IMAGEM NAO MUDA)
- ALEGRE sem clicar nem passar num intervalo de 5 e 15 segundos => NERVOSO + mensagem "Onde está você? Brinque comigo!!!"
- mouse sobre NERVOSO => mensagem "Não suma mais. Gosto quando você interage comigo" => depois deverá virar ALEGRE
*/
