document.getElementById("btClique").onclick = function() {
    var dado = document.getElementById("txtDado").value;
    var padrao = /^\d\d\d$/;
    console.log(padrao.test(dado));
    if (padrao.test(dado))
        alert("A informação " + dado + " está dentro do padrão.");
    else
        alert("A informação " + dado + " está fora do padrão.");
};