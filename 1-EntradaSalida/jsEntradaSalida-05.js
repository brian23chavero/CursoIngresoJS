/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	var nombre;

	var apellido;

	var edad; 

	nombre = document.getElementById("txtIdNombre").value;

	apellido=document.getElementById("txtIdNombre").value;

	edad = document.getElementById("txtIdEdad").value;

	alert("usted se llama " +  nombre  + apellido + " y tiene "  + edad + " años ");

		
}

