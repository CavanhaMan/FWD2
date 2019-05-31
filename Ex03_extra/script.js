/*
O usuário deverá ter selecionado um livro
- Uma forma de pagamento deverá ter sido selecionada
- Pelo menos uma opção deverá ter sido selecionada em “Como você conheceu o nosso site?”
- O nome da pessoa não poderá estar em branco e deverá conter apenas letras
*/
function myFunction() {
  var x = document.getElementById("myRadio").required;
  document.getElementById("demo").innerHTML = x;
}