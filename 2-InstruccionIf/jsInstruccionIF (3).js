function mostrar()
{
//tomo la edad  

	var edadIngresada;

	edadIngresada = document.getElementById('edad').value;
	
	/*if(edadIngresada >= 18) 
	{
		alert("Usted es mayor de edad");
	}
    if(edadIngresada <= 17)
    {
        alert("Usted es menor de edad");
    }*/
	
	/*if(edadIngresada < 1)
	{
		alert("La edad no puede ser menor a 1");
	}
	else
	{
		if(edadIngresada >= 18)
		{
			alert("Usted es mayor de edad");
		}
		else 
		{
			alert("Usted es menor de edad");
		}
	}*/

	if (edadIngresada < 1)
	{
		alert("la edad no puede ser validada");
	}
	else if (edadIngresada > 17)
	{
		alert("Usted es mayor de edad");
	}
	else 
	{
		alert("Usted es menor de edad");
	}
}   //FIN DE LA FUNCIÓN
