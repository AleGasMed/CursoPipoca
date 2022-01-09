function mostrar()
{
    var numero;
    var sumaNeg = 0;
    var sumaPos = 0;
    var contador = 0;
    var numeroNeg = 0;
    var numeroPos = 0;
    var cero = 0;
    var numerosPares = 0;
    var resta;
    var resto;
    var promedioPos;
    var promedioPos;
    var decision = "si";

    while(decision != "no")
    {
        numero = prompt("Coloque los numeros que desee");
        contador = contador + 1;
    
        if(numero[0] == "-")
        {
            
            sumaNeg = parseInt(numero) + sumaNeg;//suma los negativos
            numeroNeg = numeroNeg + 1;//cuenta cada negativo
           
        }
        else if(numero > 0)
        {
            sumaPos = parseInt(numero) + sumaPos;//suma los positivos;
            numeroPos = numeroPos + 1;
            promedioPos = numero / numeroPos;
           
        }
             
        if(numero == 0)
        {
            cero = cero + 1;
        }

        resto = numero % 2;//cuenta los numeros pares
        
        if(resto == 0)
        {
            numerosPares = numerosPares + 1;
        }
        
        do
        {
            decision= prompt("¿Desea continuar?");
        }while(decision != "no" && decision != "si");

        promedioNeg = contador / numeroNeg;

        promedioPos = contador / numeroPos;

        
    }

    resta = numeroPos - numeroNeg;
    
    document.write("La suma de los negativos es: " + sumaNeg + "<br>");
    document.write("La suma de los positivos es: " + sumaPos + "<br>");
    document.write("Cantidad de positivos: " + numeroPos + "<br>");
    document.write("Cantidad de negativos: " + numeroNeg + "<br>");
    document.write("Cantidad de ceros: " + cero + "<br>");
    document.write("Cantidad de números pares: " + numerosPares + "<br>");
    document.write("Promedio de positivos: " + promedioPos + "<br>");
    document.write("Promedio de negativos: " + promedioNeg + "<br>");
    document.write("Diferencia entre positivos y negativos: " + resta + "<br>");



    
}//FIN DE LA FUNCIÓN