/*4-(0,5pts.) (IF) Pedir dos números y mostrar el resultado: Si son iguales los muestro concatenados.
 Si el primero es mayor, los divido, de lo contrario los sumo. Si la suma es menor a 50 , además de
mostrar el resultado, muestro el mensaje "la suma es xxx y es menor a 50"*/
function mostrar()
{
	var numero1;
	var numero2;
	var division;
	var suma;

	numero1 = prompt("Inserte un número");
	numero2 = prompt("Inserte otro número");

	if(numero1 == numero2)
	{
		alert("Números concatenados " + numero1 + " y " + numero2)
	}
	
	if(numero1 > numero2)
	{
		division = parseInt(numero1) / parseInt(numero2);
		alert("El resultado de la division es " + division);
	}

	if(numero1 < numero2)
	{
		suma = parseInt(numero1) + parseInt(numero2);

		if(suma < 50)
		{
			alert("La suma es " + suma + " y es menor a 50");
		}
		else
		{
			alert("La suma es " + suma);
		}
	}
}

