/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var importe;
var nuevosueldo;
var Descuento;

importe = document.getElementById("txtIdResultado").value;
importe = parseInt(importe);

Descuento = importe * 25 / 100;


nuevosueldo = importe - Descuento;

document.getElementById("txtIdResultado").value = nuevosueldo;
}
