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
    var resto;
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
        else
        {
            sumaPos = parseInt(numero) + sumaPos;//suma los negativos
            numeroPos = numeroPos + 1;
        }

        if(numero == 0)
        {
            cero = cero + 1;
        }

        resto = numero % 2;//cuenta los numeros pares
        
        if(resto == 0)
        {
            numerosPares = numerosPares + 1;
            alert("HOLA " + numerosPares);
        }
        
















        decision = prompt("¿Desea continuar?");
    }


    
}//FIN DE LA FUNCIÓN