/*Al comenzar el juego generaremos un número 
RANDOM del 1 al 3 para la selección de la máquina, 
siendo 1 para “piedra”, el 2 para “papel” y 3 para “tijera”.
El jugador seleccionará una imagen correspondiente 
a su opción  y le informaremos si ganó, empató o perdió.
*/
var eleccionMaquina;
var piedra1;
var papel2;
var tijera3;

function comenzar()
{
    eleccionMaquina = numeroSecreto = Math.floor((Math.random() * 3) + 1);
    
    switch(eleccionMaquina)
    {
        case 1:
            piedra1 = eleccionMaquina;
            break;
        case 2:
            papel2 = eleccionMaquina;
            break;
        default:
            tijera3 = eleccionMaquina;
            break;
    }

}//FIN DE LA FUNCIÓN
function piedra()
{
    if(piedra1 == tijera3)
    {
        alert("Usted perdió");
    }

	if(piedra1 == eleccionMaquina)
    {
        alert("Usted empató");
    }
    
    if(piedra1 == papel2)
    {
        alert("Usted ganó");
    }

}//FIN DE LA FUNCIÓN
function papel()
{
    if(papel2 == eleccionMaquina)
    {
        alert("Usted empató");
    }

    if(papel2 == piedra1)
    {
        alert("Usted perdió");
    }

    if(papel2 == tijera3)
    {
        alert("Usted ganó")
    }
}//FIN DE LA FUNCIÓN
function tijera()
{
	if(tijera3 == eleccionMaquina)
    {
        alert("Usted empató");
    }

    if(tijera3 == papel2)
    {
        alert("Usted perdió");
    }
   
   if(tijera3 == piedra1)
   {
       alert("Usted ganó");
   }
}//FIN DE LA FUNCIÓN