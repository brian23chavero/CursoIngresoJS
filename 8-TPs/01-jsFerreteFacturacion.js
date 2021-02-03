/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var num1;
    var num2;
    var num3;
	var resultado;
	num1 = parseInt(document.getElementById("txtIdPrecioUno").value);

	num2= parseInt(document.getElementById("txtIdPrecioDos").value);

    num3=parseInt(document.getElementById("txtIdPrecioTres").value);

	resultado = num1 + num2 + num3;

	alert("el resultado de la suma es " + resultado);
}
function Promedio () 
{
	var num1;
    var num2;
    var num3;
	var resultado;
	num1 = parseInt(document.getElementById("txtIdPrecioUno").value);

	num2= parseInt(document.getElementById("txtIdPrecioDos").value);

    num3=parseInt(document.getElementById("txtIdPrecioTres").value);

    resultado = num1 % num2 % num3;
    alert("el promedio es " + resultado)
}
function PrecioFinal () 
{
	var num1;
    var num2;
    var num3;
	var iva;
	num1 = parseInt(document.getElementById("txtIdPrecioUno").value);

	num2= parseInt(document.getElementById("txtIdPrecioDos").value);

    num3=parseInt(document.getElementById("txtIdPrecioTres").value);

    iva =  num1 + num2 + num3 * 21 / 100 ;

     


    alert("el aumento es " + iva);
}