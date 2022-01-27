function mostrar()
{
    var numero;
    var decision;
    var contador = 0;
    var numeroMax;
    var numeroMin;
    

    while(decision != "no")
    {
        numero = prompt("Coloque los números que quiera");

        if(contador == 0)
        {
            numeroMax = numero;
            numeroMin = numero;
        }

        if(numero < numeroMin)
        {
            numeroMin = numero;
        }
        else if(numero > numeroMax)
        {
            numeroMax = numero;
        }

        contador = contador + 1;

        do
        {
            decision = prompt("¿Desea continuar?");   
        }
        while(decision != "no" && decision != "si")
    }

    document.getElementById("maximo").value = numeroMax;
    document.getElementById("minimo").value = numeroMin;

    
    
}//FIN DE LA FUNCIÓN
/*
inicio del ejercicio
2 = es mayor y minimo por ser el primer numero.
---------------------------------------------------------------------
[2,3]
2 es el minimo
3 = Es mayor y el 2 es el minimo AHORA
---------------------------------------------------------------------
[2, 3, 1]
1 es el minimo
3 es el mayor
---------------------------------------------------------------------
[2, 3, 1 , 9]
1 es el minimo
9 es el mayor
fin del ejercicio





*/