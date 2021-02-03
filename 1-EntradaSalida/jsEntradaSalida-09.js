/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
var sueldo;
var nuevosueldo;
var aumento;
sueldo = document.getElementById("txtIdSueldo").value;
sueldo = parseInt(sueldo);

aumento = sueldo * 10 / 100 ;


nuevosueldo = sueldo + aumento;

document.getElementById("txtIdResultado").value = nuevosueldo;
}
