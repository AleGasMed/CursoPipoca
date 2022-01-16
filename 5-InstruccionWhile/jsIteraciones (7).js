/*Al presionar el botón pedir números hasta que
el USUARIO QUIERA e informar
la suma acumulada y el promedio.*/
function mostrar()
{
    var numero;
    var decision;
    var contador = 0
    var suma = 0;
    var promedio;

    while(decision != "no")
    {
        numero = prompt("Inserte un número");
        contador = contador + 1;
        suma = suma + parseInt(numero);
        
        do
        {
            decision = prompt("¿Desea continuar?")
        }
        while(decision != "si" && decision != "no" )
    }

    promedio = suma / contador;

    document.getElementById("suma").value = suma;

    document.getElementById("promedio").value = promedio;
}//FIN DE LA FUNCIÓN