/*El departamento de NUMEROS ESPECIALES  del instituto matemático  FonteCristo  nos está pidiendo una aplicación que verifique las distintas cualidades de los números.

13.	Para cada una de estas acciones  debemos realizar la lógica para verificar las cualidades pedidas:
a.	Se pedirán un número positivo y se mostrará la cantidad de números pares desde el número ingresado hasta el cero.
b.	Se pedirán un número positivo y se mostrará la cantidad de números impares desde el número ingresado hasta el cero.
c.	Se pedirán un número positivo y se mostrará la cantidad de números divisibles de este número que se encuentran desde el 1 al 100.
d.	Se pedirán un número positivo y se mostrará si el número es un número primo o no.
e.	Se pedirán un número positivo y se mostrará la cantidad de números Primos desde el número ingresado hasta el cero.
*/
function NumerosPares () 
{
    var numero;
    var resto;
    var cantPos = 0;

    numero = document.getElementById("numero").value;

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
    alert("La cantidad de números pares es de: " + (parseInt(cantPos) + 1));

}
function NumerosImpares() 
{
    var numero;
    var resto;
    var cantImpares = 0;

    numero = document.getElementById("numero").value;

    resto = numero % 2; 

    if(resto == 0)
    {
        numero = parseInt(numero) - 1;
    }
    
    while(numero >= 0)
    {
        numero = numero - 2;
        cantImpares = cantImpares + 1;
    }
    alert("La cantidad de números impares es de: " + (parseInt(cantImpares) + 1));


}
function NumerosDivisibles() 
{
    
    


}
function VerificarPrimo() 
{
    var numero;
    var numeroNoPrimo;

    numero = document.getElementById("numero").value;

    resto = numero % 2; 

    if(resto == 0)
    {
        numero = numeroNoPrimo;
    }
    
}
function NumerosPrimos() 
{
    


}
    
     