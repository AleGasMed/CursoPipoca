/*8-(2pts.)Realizar el algoritmo que permita iterar el ingreso de dos datos, una letra y un número entre -100 y 100 (validar) hasta que el usuario quiera e informar al terminar el ingreso por document.write:
a) La cantidad de números pares.
b) La cantidad de números impares.
c) La cantidad de ceros.
d) El promedio de todos los números positivos ingresados.
e) La suma de todos los números negativos. f) El número y la letra del máximo y el mínimo.
*/
function SacarResto()
{
    var numero;
    var letra;
    var decision;
    var numerosPares = 0;
    var numerosImpares = 0;
    var numeroNeg = 0;
    var numeroPos = 0;
    var contador = 0;
    var ceros = 0;
    var numeroMax;
    var numeroMin;
    var letraMin;
    var letraMax;

    while(decision != "no")
    {
        numero = prompt("Ingrese un número  entre -100 y 100");

        while(numero < -100 || numero > 100)
        {
            numero = prompt("Tiene que ingresar un número entre -100 y 100");
        }
        
        letra = prompt("Ingrese una letra");

        do
        {
            decision = prompt("¿Desea continuar?");

        }while(decision != "no" && decision != "si")

        if(numero[0] == "-")
        {
            numeroNeg = numeroNeg + 1;
        }
        else if(numero > 0)
        {
            numeroPos = numeroPos + 1;
        }

        if(numero == 0)
        {
            ceros = ceros + 1;
        }

        if(numero % 2 == 0)
        {
            numerosPares = numerosPares + 1;
        }
        else if(numero % 2 != 0)
        {
            numerosImpares = numerosImpares + 1;
        }

        if(contador == 0)
        {
            numeroMin = numero;
            numeroMax = numero;
            letraMax = letra;
            letraMin = letra;
        }
        else if(numero < numeroMin)
        {
            numeroMin = numero;
            letraMin = letra;
        }
        else if(numero > numeroMax)
        {
            numeroMax = numero;
            letraMax = letra;
        }

        
        contador = contador + 1;
    }

    promedioPos = numeroPos / contador;

    document.write("Cantidad de números pares: " + numerosPares + "<br>");
    document.write("Cantidad de números impares: " + numerosImpares + "<br>");
    document.write("Cantidad de ceros: " + ceros + "<br>");
    document.write("Promedio de todos los números positivos: " + promedioPos + "<br>");
    document.write("Suma de todos los números negativo: " + numeroNeg + "<br>");
    document.write("El número máximo y su letra: " + numeroMax + " y " + letraMax + "<br>");
    document.write("El número mínimo y su letra: " + numeroMin + " y " + letraMin + "<br>");
    
    

}

/*Nivel 3 (iteraciones – validaciones-máximos y mínimos)
7
8-(2pts.) Realizar el algoritmo que permita iterar el ingreso de varios libros con cuatro datos por cada libro,
nombre, cantidad de páginas, cantidad de ventas (0 o más) y tema (posibles temas: “robótica",
"programación", "patrones", "base de datos”) validar e ingresar datos hasta que el usuario quiera e
informar al terminar el ingreso por document.write: a) La cantidad de libros con páginas pares. b) La
cantidad de libros con páginas impares. c) La cantidad de ceros ventas. d) El promedio de todas las ventas
ingresadas. e) La suma de todas las páginas de los de "programación".*/
