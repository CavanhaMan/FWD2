document.getElementById("btClique").onclick = function() {
    var dado = document.getElementById("txtDado").value;
    var padrao = /^\d\d\d$/;
    console.log(padrao.test(dado));
    if (padrao.test(dado))
        alert("A informação " + dado + " está dentro do padrão.");
    else
        alert("A informação " + dado + " está fora do padrão.");
};

document.getElementById("btClique2").onclick = function() {
    var dado2 = document.getElementById("txtDado2").value;
    var padrao2 = /^[a-z ]{5,50}$/i;
    console.log(padrao2.test(dado2));
    if (padrao2.test(dado2))
        alert("O nome " + dado2 + " está dentro do padrão.");
    else
        alert("O nome " + dado2 + " está fora do padrão.");
};

document.getElementById("btClique3").onclick = function() {
    var dado3 = document.getElementById("txtDado3").value;
    var padrao3 = /^\(\d{2}\)\d{4,5}-\d{4}$/;
    console.log(padrao3.test(dado3));
    if (padrao3.test(dado3))
        alert("O telefone " + dado3 + " está dentro do padrão.");
    else
        alert("O telefone " + dado3 + " está fora do padrão.");
};

document.getElementById("btClique4").onclick = function() {
    var dado4 = document.getElementById("txtDado4").value;
    var padrao4 = /^\d{2}\/\d{2}\/(\d{2}|\d{4})$/;
    console.log(padrao4.test(dado4));
    if (padrao4.test(dado4))
        alert("O telefone " + dado4 + " está dentro do padrão.");
    else
        alert("O telefone " + dado4 + " está fora do padrão.");
};

document.getElementById("btClique5").onclick = function() {
    var dado5 = document.getElementById("txtDado5").value;
    var padrao5 = /^[2-4][0-9]|5[0-4]$/;
    console.log(padrao5.test(dado5));
    if (padrao5.test(dado5))
        alert("O numero " + dado5 + " está dentro do intervalo.");
    else
        alert("O numero " + dado5 + " está fora do intervalo.");
};
