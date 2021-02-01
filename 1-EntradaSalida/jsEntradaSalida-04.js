/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	// reservo un lugar en la memoria para guardar el nombre del usuario

	let nombre;

	// guardo en la variable nombre el texto que escribio el usuario en la ventana promp 
	nombre = prompt ("escriba su nombre");

	//copio el nombre que tengo guadado en la variable nombre dentro de la caja de texto embebida en la pagina html 
	document.getElementById("txtIdNombre").value = nombre

}

