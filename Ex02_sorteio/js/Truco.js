// sortear 12 cartas - 3 para cada jogador, com 4 jogadores
// não pode repetir cartas
$(document).ready(function () {
    var baralho = ['copas1', 'copas2', 'copas3', 'copas4', 'copas5', 'copas6', 'copas7', 'copas8', 'copas9', 'copas10', 'copas11', 'copas12', 'copas13', 'espadas1', 'espadas2', 'espadas3', 'espadas4', 'espadas5', 'espadas6', 'espadas7', 'espadas8', 'espadas9', 'espadas10', 'espadas11', 'espadas12', 'espadas13', 'ouros1', 'ouros2', 'ouros3', 'ouros4', 'ouros5', 'ouros6', 'ouros7', 'ouros8', 'ouros9', 'ouros10', 'ouros11', 'ouros12', 'ouros13', 'paus1', 'paus2', 'paus3', 'paus4', 'paus5', 'paus6', 'paus7', 'paus8', 'paus9', 'paus10', 'paus11', 'paus12', 'paus13'];
    var baralhosorteado = [];
    var sorteado;
    var x = baralho.length; //qual o tamanho do baralho
    for (var i = 12; i > 0; i--) {
        x--; //Atualiza o tamanho do baralho (sem o que ja foi sorteado)
        console.log('x= ', x);
        sorteado = Math.floor(Math.random() * (x));//sorteia entre 0 e o numero de participantes
        console.log('sorteado= ', sorteado);
        baralhosorteado.push(baralho[sorteado]);//insere o nome sorteado no novo baralho de resultado
        console.log('baralho novo= ', baralhosorteado);
        baralho.splice(sorteado, 1); //retira o nome sorteado do baralho para não repetir
        console.log('baralho velho= ', baralho);
        console.log('----------------------------------------------------');
    }
    for (var i = 0; i < 12; i++) //monta o baralho na tela
        document.getElementById("carta" + i).src = "cartas/" + baralhosorteado[i] + ".png";
});
