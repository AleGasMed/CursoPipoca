function mostrar()
{
    var numero;
    var decision;
    var contador = 0;
    var numeroMin;
    var numeroMax;

    while(decision != "no")
    {
        numero = prompt("Ingrese un número");
        

        if(contador == 0)
        {
            numeroMin = numero;
            numeroMax = numero;
        }

        if(numero < numeroMin)
        {
            numeroMin = numero;
        }
        else if(numero > numeroMax)
        {
            numeroMax = numero;
        }

        do
        {
            decision = prompt("¿Desea continuar?")
        }
        while(decision != "si" && decision != "no" )

        contador = contador + 1;
        
    }
    alert(numeroMin + " numero MINIMO");
    alert(numeroMax + " numero MAXIMO");
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