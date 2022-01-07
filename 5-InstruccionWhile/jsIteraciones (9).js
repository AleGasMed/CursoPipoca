function mostrar()
{
    var numero;
    var maximo;
    var minimo;
    var parar = "no";
    var contador;

    contador = 0

    while(parar != "si")
    {
        numero = prompt("Inserte un número");

        if(contador == 0)
        {
          minimo = numero;
          maximo = numero;
        }

        if(numero < minimo)
        {
            minimo = numero;
        }
        if(numero > maximo)
        {
            maximo = numero;
        }
        parar = prompt("¿Desea parar?");

        contador = contador + 1;
    }

    document.getElementById("maximo").value = maximo;
    document.getElementById("minimo").value = minimo;
    
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