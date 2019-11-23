let tabela = [];
let tabTest = JSON.parse(localStorage.getItem("tabCadast"));

if (tabTest === null) {
    localStorage.setItem("tabCadast", JSON.stringify(tabela));
} else {
    tabela = tabTest.slice();
}

function cadastrarProd() {
    let produto = document.getElementById("nomeProd").value;
    let codigo = document.getElementById("codProd").value;
    let comboQtde = document.getElementById("comboQtde");
    let qtde = comboQtde.options[comboQtde.selectedIndex].value;
    if (produto !== "" && codigo !== "" && qtde !== "") {
        tabela.push({
            produto: produto,
            codigo: codigo,
            qtde: qtde
        });
        alert("Produto cadastrado");
        document.getElementById("nomeProd").value = "";
        document.getElementById("codProd").value = "";
        document.getElementById("comboQtde").options[comboQtde.selectedIndex].text = 3;

        localStorage.setItem("tabCadast", JSON.stringify(tabela));
    } else {
        alert("Preencha todos os campos!");
    }
    totalEstoque();
}

function limparCam() {
    document.getElementById("nomeProd").value = "";
    document.getElementById("codProd").value = "";
    document.getElementById("comboQtde").options[comboQtde.selectedIndex].text = 1;
}

function listaEstoque() {
    let tabTest = JSON.parse(localStorage.getItem("tabCadast"));
    document.write("<h1 style='padding: 10px; padding-top: 20px'>Estoque:</h1>");
    for (let i = 0; i < tabTest.length; i++) {
        if ((i + 1) != tabTest.length) {
            document.write("<div style='border-bottom: 1px solid gray; padding: 20px; padding-left: 10px; margin: 10px; padding-top: 10px'>");
            document.write("<ul>");
            document.write("<li>" + "Nome do Produto: " + tabTest[i].produto + "</li>");
            document.write("<li>" + "Código do Produto: " + tabTest[i].codigo + "</li>");
            document.write("<li>" + "Quantidade no Estoque: " + tabTest[i].qtde + "</li>");
            document.write("</ul>");
            document.write("</div>");
        } else {
            document.write("<div style='padding: 20px; padding-left: 10px; margin: 10px; padding-top: 10px'>");
            document.write("<ul>");
            document.write("<li>" + "Nome do Produto: " + tabTest[i].produto + "</li>");
            document.write("<li>" + "Código do Produto: " + tabTest[i].codigo + "</li>");
            document.write("<li>" + "Quantidade no Estoque: " + tabTest[i].qtde + "</li>");
            document.write("</ul>");
            document.write("</div>");
        }
    }
}

function totalEstoque() {
    let tabTest = JSON.parse(localStorage.getItem("tabCadast"));
    let totalEstoque = 0;
    if (tabTest === null) {
        totalEstoque = totalEstoque;
    } else {
        totalEstoque = tabTest.length;
    }
    document.getElementById("totalEstoque").innerHTML = totalEstoque;
}

totalEstoque();