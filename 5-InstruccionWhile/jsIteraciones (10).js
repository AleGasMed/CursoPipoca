function mostrar()
{
    var numero;
    var decision;
    var sumaNeg = 0;
    var sumaPos = 0;
    var numeroNeg = 0;
    var numeroPos = 0;
    var ceros = 0;
    var numerosPares = 0;
    var promedioPos;
    var promedioNeg;
    var resta;
    var contadorPos = 0;
    var contadorNeg = 0;

    while(decision != "no")
    {
        numero = prompt("Inserte un número");
        
        if(numero[0] == "-")
        {
            sumaNeg = sumaNeg + parseInt(numero);
            numeroNeg = numeroNeg + 1;
        }
        else if(numero > 0)
        {
            sumaPos = sumaPos + parseInt(numero);
            numeroPos = numeroPos + 1;
        }

        if(numero == 0)
        {
            ceros = ceros + 1;
        }

        if(numero % 2 == 0)
        {
            numerosPares = numerosPares + 1;;
        }

        do
        {
            decision = prompt("¿Desea continuar?");   
        }
        while(decision != "no" && decision != "si")

        promedioNeg = sumaNeg / numeroNeg;
        promedioPos = sumaPos / numeroPos;
    }
    resta = parseInt(numeroPos) - parseInt(numeroNeg);
    
    document.write("La suma de los negativos es: " + sumaNeg + "<br>");
    document.write("La suma de los positivos es: " + sumaPos + "<br>");
    document.write("Cantidad de positivos: " + numeroPos + "<br>");
    document.write("Cantidad de negativos: " + numeroNeg + "<br>");
    document.write("Cantidad de ceros: " + ceros + "<br>");
    document.write("Cantidad de números pares: " + numerosPares + "<br>");
    document.write("Promedio de positivos: " + promedioPos + "<br>");
    document.write("Promedio de negativos: " + promedioNeg + "<br>");
    document.write("Diferencia entre positivos y negativos: " + resta + "<br>");
    



    
}//FIN DE LA FUNCIÓN