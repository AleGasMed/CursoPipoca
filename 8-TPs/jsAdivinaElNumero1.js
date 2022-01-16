/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/

var numeroSecreto;
var contadorIntentos = 0;


function comenzar()
{
  numeroSecreto = Math.floor((Math.random() * 100) + 1);
}

function verificar()
{
  var numeroIngresado;
  var faltante;
  var sobrante;

	numeroIngresado = document.getElementById("numero").value;

  if(numeroIngresado == numeroSecreto)
  {
    alert("Usted es un ganador!!! y en solo " + contadorIntentos);
  }

  if(numeroIngresado < numeroSecreto)
  {
    faltante = numeroSecreto - numeroIngresado;
    alert("Falta " + faltante + " para llegar al numero secreto");
  }
  else if(numeroIngresado > numeroSecreto)
  {
    sobrante = numeroIngresado - numeroSecreto;
    alert("Se pasó  " + sobrante + " del numero secreto");
  }
  
  if(numeroIngresado != numeroSecreto)
  {
    contadorIntentos = contadorIntentos + 1;   
  }
  
  document.getElementById("intentos").value = contadorIntentos;
  

}

