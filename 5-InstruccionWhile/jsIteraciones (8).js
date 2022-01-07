function mostrar()
{
    var numero;
    var suma;
    var multiplicacion;
    var decision;
    var numeroNeg;
    var numeroPos;

    suma = 0;

    while(decision != "no")
    {
        numero = prompt("Inserte un número");

        if(numero[0] == "-")
        {
            numeroNeg = numero;
        }
        else
        {
            numeroPos = numero;
        }
        suma = parseInt(numeroPos) + suma;
        
        if(multiplicacion == undefined)
        {
            multiplicacion = numeroNeg;
        }
        else
        {
            multiplicacion = parseInt(numeroNeg) * multiplicacion;
        }
        
        do
        {
            decision = prompt("¿Desea continuar?");
        }while(decision != "no" && decision != "si");
    }
    
    document.getElementById("suma").value = suma;
    document.getElementById("producto").value = multiplicacion;
}//FIN DE LA FUNCIÓN