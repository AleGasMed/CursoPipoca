function mostrar()
{
	var resultado;

	resultado = Math.floor((Math.random() * (11-1))+1);

	if(resultado >= 9)
	{
		alert("EXCELENTE " + resultado);
	}
	else if(resultado >= 4 && resultado < 9)
	{
		alert("APROBÓ " + resultado);
	}	
	else
	{
		alert("Vamos, la próxima se puede " + resultado)
	}
	

	
}//FIN DE LA FUNCIÓN