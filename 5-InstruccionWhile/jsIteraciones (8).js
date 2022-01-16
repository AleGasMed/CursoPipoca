function mostrar()
{
    var numero;
    var decision;
    var suma = 0;
    var multiplicacion;
    var numeroPos;
    var numeroNeg;

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
            decision = prompt("¿Desea continuar?")
        }
        while(decision != "si" && decision != "no" )
    }

    document.getElementById("suma").value = suma;

    document.getElementById("producto").value = multiplicacion;
}//FIN DE LA FUNCIÓN
