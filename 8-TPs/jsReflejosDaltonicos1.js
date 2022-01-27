/*En la pantalla se mostrarán 6 botones de 
distintos colores,  al comenzar el juego se 
mostrara el texto de un color entre los 6 posibles
 para que el jugador sepa que botón tocar .Al tocar 
 el botón correcto se informara cuanto tiempo tardo.
*/
var color;
var i = 1;
function comenzar()
{
    var colorRandom = Math.floor((Math.random() * 6) + 1);

    switch(colorRandom)
    {
        case 1:
            color = "azul";
            break;
        case 2:
            color = "amarillo";
            break;
        case 3:
            color = "marron";
            break;
        case 4:
            color = "verde";
            break;
        case 5:
            color = "celeste";
            break;
        default:
            color = "rojo";
            break;
    }
    
    document.getElementById("ColorElejido").value = color;

    
    Responder("azul", "amarillo", "marron", "verde", "celeste", "rojo");

}//FIN DE LA FUNCIÓN
function Responder(colorParametro)
{
    var contador = 0;
    var cronometro = setTimeout(function(){
    if(colorParametro == color)
        {
            cronometro = cronometro + contador;
            alert("Se ha tardado " + cronometro + " segundos en seleccionar el color correcto");
            
        }
 }, Responder);

    
    
}//FIN DE LA FUNCIÓN

