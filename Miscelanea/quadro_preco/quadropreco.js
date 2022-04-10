var semana = ["Domingo", "Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sábado"];
var mes = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro",];
var d = new Date();
day = d.getDate();
diasemana =d.getDay();
dmes = d.getMonth();
document.getElementById("data_atual").innerHTML = semana[diasemana] + ", " + day + " de " + mes[dmes] + ", ";


/** FUNÇÃO PARA OBTER CIDADE *******************/
function preencherDados(dados) {
    document.getElementById("pegalocal").innerHTML = (dados.address.city);  
}



/** FUNÇÃO PARA OBTER CIDADE *******************
navigator.geolocation.getCurrentPosition(function(posicao) {
    var url = "http://nominatim.openstreetmap.org/reverse?lat="+posicao.coords.latitude+"&lon="+posicao.coords.longitude+"&format=json&json_callback=preencherDados";

    var script = document.createElement('script');
    script.src = url;
    document.body.appendChild(script);
});
function preencherDados(dados) {
  alert(dados.address.city);  
}
/** FIM FUNÇÃO PARA OBTER CIDADE *******************/