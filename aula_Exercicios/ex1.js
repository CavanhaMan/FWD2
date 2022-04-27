/*** QUESTAO 1 ********************************************/

//document.getElementById("total1").innerHTML="teste";
/*
var horas = $("#total1").closest('td').prev('td').text();
console.log(horas);
var valor = $("#total1").closest('td').prev('td').prev('td').text();
console.log(valor);
//valor = valor.replace('R$ ','');
console.log(valor);
var salario = parseInt(horas)*parseFloat(valor);
console.log(salario);
//salario = 'R$ ' + salario + ',00';
console.log(salario);
//document.getElementById("total1").innerHTML=salario;
$("#total1").html(salario);
*/
$('document').ready(function(){
    for (var i=1 ; i<=10 ; i++){
        var horas = $("#total"+i).closest('td').prev('td').text();
        //console.log(horas);
        var valor = $("#total"+i).closest('td').prev('td').prev('td').text();
        //console.log(valor);
        var salario = parseFloat(horas)*parseFloat(valor);
        //console.log(salario);
        //$("#total"+i).text(salario);
        $("#total"+i).html(salario);
    }
    $('.tdr').mask('#.##0,00', {reverse: true});
});
