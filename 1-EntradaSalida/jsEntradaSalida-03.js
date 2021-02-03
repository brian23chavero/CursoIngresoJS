/*
chavero brian
ejercicio 3
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	//reservo un lugar en la memoria para guardar el nombre del usuario 
	var nombre;

	//nombre = txtIdNombre.value;
	nombre=document.getElementById("txtIdNombre").value;

    //muestra el mensaje de promp
	alert(nombre);

	document.getElementById("txtIdNombre").value = ""
	}



