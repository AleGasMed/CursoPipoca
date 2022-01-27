function mostrar()
/*Al ingresar una edad solo
debemos informar si la persona 
NO es adolescente.*/
{
	var edad;

	edad = document.getElementById("edad").value;

	if(edad >= 18 || edad < 13)
	{
		alert("Usted no es adolescente");
	}
}//FIN DE LA FUNCIÓN