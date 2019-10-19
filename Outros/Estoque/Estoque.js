var produtos = new Array(3); 
var x = 0; 
var contaProduto=0;
var podeVerEstoque=false;

// Loop to create 2D array using 1D array 
for (var i = 0; i < produtos.length; i++) 
    produtos[i] = []; 

var carrinho = parseInt(document.getElementById("qtdCarrinho").innerHTML);

/*function testar(){
	carrinho++;
	document.getElementById("qtdCarrinho").innerHTML=carrinho;
}*/

function limparFormulario(){
	document.getElementById("novoProduto").reset();
}

function cadastrarProduto(){
	var nomep = document.novoProduto.nome.value;
	var codp = document.novoProduto.codigo.value;
	var quantp = document.novoProduto.quant.value;
	//alert(nomep);
	//alert(codp);
	//alert(quantp);
	//alert(carrinho);

	//TESTA SE O NOME ESTÁ VAZIO
	if(nomep=="" || nomep==" " || nomep.length < 1){
		alert("É necessário digitar o nome de um produto!" );
		document.formCad.nome.focus();
		return false;
	}
	//TESTA SE O NOME TEM NUMEROS
	else if(/[\d]/.test(nomep)){
		alert("O nome deve conter apenas letras!" );
		document.formCad.nome.focus();
		return false;
	}
	//TESTA SE O CÓDIGO ESTÁ VAZIO
	else if(codp=="" || codp==" " || codp.length < 1){
		alert("É necessário digitar um código!" );
		document.formCad.codigo.focus();
		return false;
	}
	alert("Produto cadastrado com sucesso!");
	podeVerEstoque=true;
	carrinho=contaProduto+1;
	document.getElementById("qtdCarrinho").innerHTML=carrinho;
	produtos[contaProduto][0]=nomep;
	produtos[contaProduto][1]=codp;
	produtos[contaProduto][2]=quantp;
	contaProduto++;
	for (var i = 0; i<contaProduto; i++)
		for (var j = 0; j<3; j++)
			console.log(produtos[i][j] + " "); 
	
	for (var i = 0; i<contaProduto; i++){
		console.log("Nome do produto: " + produtos[i][0] + " "); 
		console.log("Código do produto: " + produtos[i][1] + " "); 
		console.log("Quantidade no estoque: " + produtos[i][2] + " "); 
	}

	localStorage.setItem("temp",produtos);

	document.getElementById("novoProduto").reset();
	return true;

}

function verEstoque(){
	if(podeVerEstoque){
		var lista = document.getElementById("lista");
		document.getElementById("lista").innerHTML="";
	
		var node;
		var textnode;
		for (var i = 0; i<contaProduto; i++){
			node = document.createElement("LI");
			textnode = document.createTextNode("Nome do produto: " + produtos[i][0]);
			node.appendChild(textnode);
			document.getElementById("lista").appendChild(node);
			
			node = document.createElement("LI");
			textnode = document.createTextNode("Código do produto: " + produtos[i][1]);
			node.appendChild(textnode);
			document.getElementById("lista").appendChild(node);
			
			node = document.createElement("LI");
			textnode = document.createTextNode("Quantidade no estoque: " + produtos[i][2]); 
			node.appendChild(textnode);
			document.getElementById("lista").appendChild(node);

			var traco = document.createElement("hr");
			document.getElementById("lista").appendChild(traco);

			podeVerEstoque=false;
		}
	}
}

