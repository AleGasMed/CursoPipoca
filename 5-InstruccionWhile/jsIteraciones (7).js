/*Al presionar el botón pedir números hasta que
el USUARIO QUIERA e informar
la suma acumulada y el promedio.*/
function mostrar()
{
    var numero;
    var contador = 0;
    var suma = 0;
    var promedio;
    var decision;

    while(decision != "no")
    {
        numero = prompt("Coloque los números que desee");
        contador = contador + 1;
        suma = parseInt(numero) + suma;
        
        do
        {
            decision = prompt("¿Desea continuar?");   
        }
        while(decision != "no" && decision != "si")
    }

    promedio = suma / contador;

    document.getElementById("suma").value = suma;
    document.getElementById("promedio").value = promedio;
}//FIN DE LA FUNCIÓN