function mostrar()
{
	var resultado;

	resultado = Math.floor((Math.random() * (11-1))+1);

	if(resultado >= 9 && resultado <= 10)
	{
		alert("EXCELENTE, USTED SE SACÓ UN " + resultado);
	}
	else if(resultado >= 4 && resultado <=8)
	{
		alert("APROBÓ, USTED SE SACÓ UN " + resultado);
	}
	else
	{
		alert("Vamos, para la próxima se puede, usted se sacó un " + resultado);
	}

	
	//Genero el número RANDOM entre 1 y 10 
	
	

	
}//FIN DE LA FUNCIÓN