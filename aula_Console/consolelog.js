//alert("Abra o console (F12)");

console.log("É ASSIM QUE VOCE VERÁ AS MENSAGENS DO CONSOLE LOG:");
console.log("Hello world!");
console.log("____SOMANDO DOIS NÚMEROS:____");
console.log(2+2);
console.log("2 + 2 =",2+2);
console.log("____SOMANDO DOIS NÚMEROS USANDO VARIÁVEIS:____");
var A = 35;
var B = 2;
console.log(A+B);
console.log(A*B);
console.log("A x B =",A*B);
console.log("____SOMANDO NUMERO COM TEXTO:____");
B = "BALA";
console.log(B);
console.log(A+B);

console.log("____PEGANDO VALORES ATRAVÉS DO ID (JAVASCRIPT):____");
A = document.getElementById("titulo").innerHTML;
console.log(A);
B = document.getElementById("paragrafo").innerHTML;
console.log(B);
console.log(A+B);
console.log("Texto do título: "+A);
console.log("Texto do parágrafo: "+B);
console.log("____PEGANDO VALORES ATRAVÉS DO ID (JQUERY):____");
var C = $("#titulo").text();
console.log(C);

console.log("____PEGANDO VALORES NUMA TABELA ATRAVÉS DO ID (JQUERY):____");
var vr1 = $("#vr1").text();
console.log(vr1);
var vr2 = $("#vr2").text();
console.log(vr2);
console.log(vr1+vr2);
/*____INSERINDO VALORES ATRAVÉS DO ID (JQUERY):____*/
$("#result").text(vr1+vr2);

/***************************************************************/
$('#escolhenum').change(function(){
    console.log("____PEGANDO VALORES DE UMA DROPLIST (SELECT) COM JAVASCRIPT:____");
    var e = document.getElementById("escolhenum");
    var value = e.options[e.selectedIndex].value;
    console.log(value);
    var text = e.options[e.selectedIndex].text;
    console.log(text);
});

$('#escolhenum').change(function(){
    console.log("____PEGANDO VALORES DE UMA DROPLIST (SELECT) COM JQUERY:____");
    var x = $("#escolhenum :selected").text();
    console.log(x);
    var y = $("#escolhenum").val();
    console.log(y);
});

/***************************************************************/

$('#escolheuf').change(function(){
    console.log("____ESCOLHENDO O ESTADO EM UMA DROPLIST (SELECT) COM JQUERY:____");
    var w = $("#escolheuf").val();
    console.log(w);
});

/***************************************************************/

$("#pegatextao").click(function(){
console.log("____PEGANDO TEXTO DE UMA TEXTAREA:____");
var textao = $("#textao").val();
console.log(textao);
});

/***************************************************************/

$("#peganome").click(function(){
    console.log("____PEGANDO TEXTO DE UM INPUT TEXT:____");
    var nome = $("#nome").val();
    var sobrenome = $("#sobrenome").val();
    console.log("Nome completo: "+ nome + " " + sobrenome);
});

/***************************************************************/

$("#calcular").click(function(){
    console.log("____PEGANDO TEXTO DE UMA TEXTAREA :____");
    var n1 = $("#n1").val();
    var n2 = $("#n2").val();
    var op = $("#operacao").val();
    console.log("Operação: "+ n1 + " " + op + " " + n2);
    var res;
    if(op=='+')
        res = n1*1+n2*1;
    else if(op=='-')
        res = n1-n2;
    else if(op=='*')
        res = n1*n2;
    else if(op=='/')
        res = n1/n2;
    console.log(res);
    $("#res").val(res);
});

/*____CALCULADORA:____
$(".calc").click(function(){
    var n = $(".calc").attr("value");
    console.log(n);
    $("#tela").val("ok");
    $("#igual").val("ok");

});*/

function calcular(op){
    console.log(op);
    var result=0;
    if(op=='='){
        var aux = document.getElementById("tela").value;
        var results = aux.split(" ");
        console.log(results);
        $("#igual").val(results);
    }
    else
        document.getElementById("tela").value+=op;

    //$("#tela").val(op);
    //$("#igual").val(op);

};