var flag=1;
var oper=1;
var result;
function calcular(operador){
    if(operador=="C"){
		flag=1;
        oper=1;
        document.getElementById("txtResultado").value="0";
    }
    else if(operador=="+" || operador=="-" || operador=="*" || operador=="/"){
		if(oper==0){
			document.getElementById("txtResultado").value+=operador;
			flag=0;
			oper=0;
		}
        else{
			oper=1;
        }
    }
    else if (operador=="="){
		flag=1;
		oper=0;
        result = document.getElementById("txtResultado").value;
        document.getElementById("txtResultado").value=eval(result);
    }
    else{
		if (flag==1){
			flag=0;
            oper=0;
            document.getElementById("txtResultado").value="";
            document.getElementById("txtResultado").value+=operador;
        }
		else{
			flag=0;
			oper=0;
			document.getElementById("txtResultado").value+=operador;
		}
    }
}