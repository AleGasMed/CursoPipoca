function mostrar()
{
    var numeropositivo;
    var numeronegativo;
    var suma;
    var multiplicacion;
    var contador;
    var decision;

    suma = 0
    contador = 0
    multiplicacion = 1

    while(decision != "no")
    {
        numeropositivo = prompt("Inserte un número positivo");
        numeronegativo = prompt("Inserte un número negativo");
        suma = parseInt(numeropositivo) + suma;
        alert(suma)
        multiplicacion = parseInt(numeronegativo) * multiplicacion;
        alert(multiplicacion)
        contador = contador + 1;
        do
        {
            decision= prompt("¿Desea continuar?");
        }while(decision != "no" && decision != "si");
    }
    
    document.getElementById("suma").value = suma;
    document.getElementById("producto").value = multiplicacion;


}//FIN DE LA FUNCIÓN