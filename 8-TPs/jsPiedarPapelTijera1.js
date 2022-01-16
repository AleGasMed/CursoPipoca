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
    alert(eleccionMaquina + " eleccion");
    
    if(eleccionMaquina == 1)
    {
        piedra1 = eleccionMaquina;
        alert("eleccion de la maquina piedra " + piedra1);
    }

    if(eleccionMaquina == 2)
    {
        papel2 = eleccionMaquina;
        alert("eleccion de la maquina " + papel2);
    }

    if(eleccionMaquina == 3)
    {
        tijera3 = eleccionMaquina;
        alert("eleccion de la maquina " + tijera3)
    }

}//FIN DE LA FUNCIÓN
function piedra()
{
	if(eleccionMaquina = piedra1)
    {
        alert("Usted empató contra la piedra")
    }

    if(eleccionMaquina > piedra1 && eleccionMaquina < papel2)
    {
        alert("Usted perdió contra el papel");
    }

    if(eleccionMaquina > piedra1 && eleccionMaquina == tijera3)
    {
        alert("Usted ganó contra tijera");
    }

}//FIN DE LA FUNCIÓN
function papel()
{
    if(eleccionMaquina = papel2)
    {
        alert("Usted empató contra la papel 2")
    }

    if(eleccionMaquina < papel2)
    {
        alert("Usted ganó contra la piedra 2");
    }

    if(eleccionMaquina > papel2)
    {
        alert("Usted perdió contra la tijera 2");
    }

}//FIN DE LA FUNCIÓN
function tijera()
{
	if(eleccionMaquina = tijera3)
    {
        alert("Usted empató contra la tijera 3");
    }

    if(eleccionMaquina < tijera3 && eleccionMaquina == piedra1)
    {
        alert("Usted perdió contra la piedra 3");
    }

    if(eleccionMaquina < tijera3 && eleccionMaquina < piedra1)
    {
        alert("Usted gano contra el papel 3");
    }
}//FIN DE LA FUNCIÓN