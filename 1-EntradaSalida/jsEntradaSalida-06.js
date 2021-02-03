/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	var numeroUno;
	var numeroDos;
	var resultado;
	var respuesta;


	numeroUno=document.getElementById('txtIdNumeroUno').value;//" "
	numeroDos=document.getElementById('txtIdNumeroDos').value;
	
	numeroUno=parseInt(numeroUno);
	numeroDos=parseInt(numeroDos);


	//alert(numeroUno);
	resultado=numeroUno+numeroDos;
	respuesta="el resultado es: "+resultado;

	alert(respuesta);


}

