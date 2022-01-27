var eleccionMaquina;
var opcionPiedra;
var opcionPapel;
var opcionTijera;
var contadorGanados = 0
var contadorPerdidos = 0;
var contadorEmpatados = 0;

function comenzar()
{
	eleccionMaquina = numeroSecreto = Math.floor((Math.random() * 3) + 1);
    alert("Elccion " + eleccionMaquina);
    
    switch(eleccionMaquina)
	{
		case 1:
			opcionPiedra = eleccionMaquina;
			break;
		case 2:
			opcionPapel = eleccionMaquina;
			break;
		default:
			opcionTijera = eleccionMaquina;
			break;
	}
	 	
}//FIN DE LA FUNCIÓN
function piedra()
{
	if(opcionPiedra == opcionTijera)
    {
        alert("Usted perdió");
		contadorGanados = contadorGanados + 1;
		alert(contadorGanados + "piedra");
        
    }

	if(opcionPiedra == eleccionMaquina)
    {
		contadorEmpatados = contadorEmpatados + 1;
		alert(contadorEmpatados + "piedra");
        alert("Usted empató");
    }
    
    if(opcionPiedra == opcionPapel)
    {
		contadorPerdidos = contadorPerdidos + 1;
		alert(contadorPerdidos + "piedra");
        alert("Usted ganó");
    }

}//FIN DE LA FUNCIÓN
function papel()
{
	if(opcionPapel == eleccionMaquina)
    {
		contadorEmpatados = contadorEmpatados + 1;
		alert(contadorEmpatados + "papel");
        alert("Usted empató");
		
    }

    if(opcionPapel == opcionPiedra)
    {
		contadorGanados = contadorGanados + 1;
		alert(contadorGanados + "papel");
        alert("Usted perdió");
    }

    if(opcionPapel == opcionTijera)
    {
		contadorPerdidos = contadorPerdidos + 1;
		alert(contadorPerdidos + "papel");
        alert("Usted ganó");
    }
}//FIN DE LA FUNCIÓN
function tijera()
{
	if(opcionTijera == eleccionMaquina)
    {
        alert("Usted empató");
		contadorEmpatados = contadorEmpatados + 1;
		alert(contadorEmpatados + "tijera");

    }

    if(opcionTijera == opcionPapel)
    {
    	alert("Usted perdió");
		contadorGanados = contadorGanados + 1;
        alert(contadorGanados + "tijera");
	}
   
   if(opcionTijera == opcionPiedra)
   {
       alert("Usted ganó");
       contadorPerdidos = contadorPerdidos + 1;
       alert(contadorGanados + "tijera");
   }

   
}//FIN DE LA FUNCIÓN

function mostrarResultado()
{
	document.getElementById("ganadas").value = contadorGanados;
	document.getElementById("perdidas").value = contadorPerdidos;
	document.getElementById("empatadas").value = contadorEmpatados;
}