/*Además de lo anterior, ahora 
se agregara un temporizador que
a los cinco segundos dará por terminado 
el juego  de no ser ingresado el resultado 
correcto en ese lapso de tiempo*/

var respuesta;
var resultadoUsuario;

function comenzar()
{
    var numeroSecreto;
    var numeroSecreto2;
    var random;
    var operador;

    numeroSecreto = Math.floor((Math.random() * 10) + 1);
    numeroSecreto2 = Math.floor((Math.random() * 10) + 1);
    
    random = Math.floor((Math.random() * 4) + 1);
    
    switch(random)
    {
        case 1:
            operador = "+";
            resultado = numeroSecreto + numeroSecreto2;
            break;
        case 2:
            operador = "-";
            resultado = numeroSecreto - numeroSecreto2;
            break;
        case 3:
            operador = "*";
            resultado = numeroSecreto * numeroSecreto2;   
            break;
        default:
            operador = "/";
            resultado = numeroSecreto / numeroSecreto2;
    }

    document.getElementById("PrimerNumero").value = numeroSecreto;
    document.getElementById("Operador").value = operador;
    document.getElementById("SegundoNumero").value = numeroSecreto2;


}//FIN DE LA FUNCIÓN
function Responder()
{
	resultadoUsuario = document.getElementById("Respuesta").value;

    setTimeout(function(){
        if(resultadoUsuario == resultado)
        {
            alert("El juego ha terminado, su respuesta es correcta");
        }
        else
        {
            alert("El juego ha terminado, su respuesta es incorrecta");
        } 
    }, 4000);

}//FIN DE LA FUNCIÓN
