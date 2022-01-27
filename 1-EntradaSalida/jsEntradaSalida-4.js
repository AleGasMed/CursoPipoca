/*4-(0,5pts.) Pedir dos números y mostrar el resultado:
Si son iguales los muestro concatenados. Si el primero es mayor, los resto, de lo contrario los sumo.
Si la suma es mayor a 10, además de mostrar el resultado, muestro el mensaje "la suma es xxx y supero
el 10".*/
function mostrar()
{
	var numero1;
	var numero2;
	var resta;
	var suma;

	numero1 = prompt("Inserte un número");
	numero2 = prompt("Inserte otro número");

	if(numero1 == numero2)
	{
		alert("Números concatenados " + numero1 + " y " + numero2)
	}
	else if(numero1 > numero2)
	{
		resta = parseInt(numero1) - parseInt(numero2);
		alert("El resultado de la resta es " + resta);
	}
	else
	{
		suma = parseInt(numero1) + parseInt(numero2);

		if(suma > 10)
		{
			alert("La suma es " + suma + " y supera al 10");
		}
		else
		{
			alert("La suma es " + suma);
		}
	}
}

