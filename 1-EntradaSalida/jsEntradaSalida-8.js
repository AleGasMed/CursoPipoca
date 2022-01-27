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
    var sumaNeg = 0;
    var sumaPos = 0;
    var numeroNeg = 0;
    var numeroPos = 0;
    var ceros = 0;
    var cantPares = 0;
    var cantImpares = 0
    var promedioPos;
    var contador = 0
    var numeroMin;
    var numeroMax;
    var letraMin;
    var letraMax;


    while(decision != "no")
    {
        numero = prompt("Inserte un número entre el -100 y el 100");
        letra = prompt("Inserte una letra");
        
        if(numero[0] == "-")
        {
            if(numero > 100)//error: deberia ser menor
            {
                numero = prompt("Vuelva a insertar un numero mayor a -100")//error: menor en vez de mayor
            }
            sumaNeg = sumaNeg + parseInt(numero);
            numeroNeg = numeroNeg + 1;
            
        }
        else if(numero > 0)//error: redundancia el else if
        {
            sumaPos = sumaPos + parseInt(numero);
            numeroPos = numeroPos + 1;

            if(numero > 100)
            {
                numero = prompt("Vuelva a insertar un número menor a 100")
            }
        }

        if(numero == 0)
        {
            ceros = ceros + 1;
        }

        resto = numero % 2;

        if(resto != 0)
        {
            numero = numero - 1;
        }
    
        while(numero != 0)
        {
            numero = numero - 2;
            cantPos = cantPos + 1;
        }

        if(resto == 0)
        {
            numero = parseInt(numero) - 1;
        }
    
        while(numero >= 0)
        {
            numero = numero - 2;
            cantImpares = cantImpares + 1;
        }

        if(contador == 0)
        {
            numeroMax = numero;//ej: 10 = 10
            numeroMin = numero;
            letraMax = letra;
            letraMin = letra;
        }
        else
        {
        if(numero < numeroMin)
        {
            numeroMin = numero;
        }
        else if(numero > numeroMax)
        {
            numeroMax = numero;
        }
        }

        

        contador = contador + 1;

        do
        {
            decision = prompt("¿Desea continuar?");   
        }
        while(decision != "no" && decision != "si")

        promedioPos = sumaPos / numeroPos;
    }
    
    document.write("La suma de los negativos es: " + sumaNeg + "<br>");
    document.write("Cantidad de ceros: " + ceros + "<br>");
    document.write("Cantidad de números pares: " + cantPares + "<br>");
    document.write("Cantidad de números impares: " + cantImpares + "<br>");
    document.write("Promedio de positivos: " + promedioPos + "<br>");
}
