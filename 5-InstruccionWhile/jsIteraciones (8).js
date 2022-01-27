function mostrar()
{
    var numero;
    var decision;
    var contador = 0;
    var numeroPos;
    var numeroNeg;
    var suma = 0;
    var multiplicacion;

    while(decision != "no")
    {
        numero = prompt("Coloque los números que quiera");
        contador = contador + 1;

        if(numero[0] == "-" )
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
        }
        while(decision != "no" && decision != "si")
    }

    document.getElementById("suma").value = suma;
    document.getElementById("producto").value = multiplicacion;
}//FIN DE LA FUNCIÓN
