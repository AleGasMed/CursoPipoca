/*Debemos mostrar dos números Random  del 1 al 10 
y una de las cuatro operaciones básicas (suma, resta,
 división o multiplicación) para realizar entre estos
 dos números, estas operaciones también serán Random.
 En el cuadro de texto resultado el jugador debe ingresar
 el resultado de la operación y presionar el botón Aceptar.
se debe informar si el resultado es el correcto o no.
*/
var resultado;
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

	if(resultadoUsuario == resultado)
    {
        alert("El resultado es correcto");
    }
    else
    {
        alert("El resultado es incorrecto");
    }

}//FIN DE LA FUNCIÓN
