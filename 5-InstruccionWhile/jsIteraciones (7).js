/*Al presionar el botón pedir números hasta que
el USUARIO QUIERA e informar
la suma acumulada y el promedio.*/
function mostrar()
{
    var numero;
    var contador;
    var decision;
    var suma;
    var promedio;
    
    contador = 0;
    suma = 0;
    

    while(decision != "no")
    {
        numero = prompt("Coloque un número");
        suma = parseInt(numero) + suma;
        contador = contador + 1;
        do
        {
            decision= prompt("¿Desea continuar?");
        }while(decision != "no" && decision != "si");
    }
    
    promedio = suma / contador;

    document.getElementById("suma").value = suma;
    document.getElementById("promedio").value = promedio;
}//FIN DE LA FUNCIÓN