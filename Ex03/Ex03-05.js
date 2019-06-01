function calcular(operador){
	//var valor1 = document.getElementById('txtValor1').value;
	//var valor2 = document.getElementById('txtValor2').value;
	//var result = eval(valor1+operador+valor2);
	//document.getElementById('txtResultado').value = result;
	document.getElementById('txtResultado').value = eval(document.getElementById('txtValor1').value + operador + document.getElementById('txtValor2').value);
}