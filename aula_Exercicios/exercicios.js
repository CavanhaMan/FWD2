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
        $("#total"+i).html(salario);
    }
    $('.tdr').mask('#.##0,00', {reverse: true});
});
/*** QUESTAO 2 ********************************************/
/*** QUESTAO 3 ********************************************/
/*** QUESTAO 4 ********************************************/
function batg(){document.getElementById("batman").src="hero/batman12g.png";}
function bat(){document.getElementById("batman").src="hero/batman12.png";}
function wong(){document.getElementById("wwoman").src="hero/wonderwoman8g.png";}
function won(){document.getElementById("wwoman").src="hero/wonderwoman8.png";}
function supg(){document.getElementById("superm").src="hero/superman2g.png";}
function sup(){document.getElementById("superm").src="hero/superman2.png";}

function tesg(){
    document.getElementById("batman").src="hero/batman12g.png";
    document.getElementById("wwoman").src="hero/wonderwoman8g.png";
    document.getElementById("superm").src="hero/superman2g.png";
}
function tres(){
    document.getElementById("batman").src="hero/batman12.png";
    document.getElementById("wwoman").src="hero/wonderwoman8.png";
    document.getElementById("superm").src="hero/superman2.png";
}

/*** QUESTAO 5 ********************************************/
/*** QUESTAO 6 ********************************************/
/*** QUESTAO 7 ********************************************/
/*** QUESTAO 8 ********************************************/
/*** QUESTAO 9 ********************************************/
/*** QUESTAO 10********************************************/
