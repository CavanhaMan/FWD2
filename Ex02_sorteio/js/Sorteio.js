$(document).ready(function () {
    var grupo = ['Joao', 'Matheus', 'Gabriel', 'Maclopes', 'Breno', 'Keylane', 'Jordana', 'Cavanha', 'Cavanha', 'Eloah', 'Roberto'];
    //var n = prompt("Quantas pessoas serão?");
    //var grupo = new Array(n);
    //for (var i=0 ; i<n ; i++)
    //	grupo[i] = prompt("Nome da pessoa "+ (i+1) + ": ");
    $.each(grupo, function (index, value) {
        $("#mostragrupo").append((index + 1) + "º) " + value + '<br><hr>');
    });
});
