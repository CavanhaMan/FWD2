/* Rodrigo Cavanhaman */
var texto = document.getElementById("txtA");
var tempo;
// Ao abrir a página, uma caixa de diálogo contendo a seguinte mensagem “Olá, seja bem-vindo!” deverá ser exibida ao usuário.
alert("Olá, seja bem-vindo!");

// Ao clicar sobre o botão “Ok” dessa caixa, uma segunda caixa de diálogo deverá ser exibida ao usuário, e nela deverá ser solicitado o primeiro nome da pessoa.
var nome = prompt("Digite seu primeiro nome: ");
console.log(nome);

/*Ao clicar sobre o botão “Ok” dessa caixa, deverá ser exibido no corpo do documento um formulário contendo um label (rótulo), uma caixa de texto e um botão.
O texto do rótulo deverá ser composto pela seguinte informação:
“Fulano, qual o seu sobrenome?”
sendo que o texto “Fulano” deverá ser substituído pelo nome informado pelo usuário na segunda caixa de diálogo */
texto.focus();
document.getElementById("labelA").innerHTML=(nome+", qual o seu sobrenome?");

/*O botão do formulário será utilizado para verificar, após clicar sobre ele, se a informação digitada dentro da caixa de texto respeita o seguinte padrão:
X Y (onde X deve ser uma sequência de 5 a 10 letras quaisquer – maiúscula ou minúscula,
seguido obrigatoriamente por um espaço em branco e, por último, 
um número pertencente ao intervalo [0, 999]).*/
document.getElementById("btOk").onclick = function() {
    var sobrenome = texto.value;
    console.log(sobrenome);
    if(/^[a-zA-Z]{5,10}\s\d{1,3}$/.test(sobrenome)){
        console.log("teste ok");
        //Caso o valor informado dentro da caixa de texto seja válido, após o processo de validação, a cor de fundo da caixa de texto deverá ser alterada para verde. 
        texto.style.backgroundColor="green";
        texto.focus();
    }
    else{
        console.log("teste fail");
        //Caso seja inválido, a cor deverá modificada para vermelho.
        texto.style.backgroundColor="red";
        texto.focus();
        //o texto de dentro da caixa de textos deverá ser limpo após 3 segundos
        //cor de fundo da caixa de texto deverá ser alterada para o status inicial (cor branco).
        tempo = setTimeout(function(){
            texto.value="";
            texto.style.backgroundColor="white";
        },3000);
    }
}