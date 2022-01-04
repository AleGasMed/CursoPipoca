/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
    var numero1;
    var numero2;
    var suma;

    numero1 = document.getElementById("numeroUno").value;
    numero2 = document.getElementById("numeroDos").value;

    suma = parseInt(numero1) + parseInt(numero2);

    alert("La suma es " + suma);

}

function restar()
{
    var numero1;
    var numero2;
    var resta;

    numero1 = document.getElementById("numeroUno").value;
    numero2 = document.getElementById("numeroDos").value;

    resta = parseInt(numero1) - parseInt(numero2);

    alert("La resta es " + resta);
    
}

function multiplicar()
{ 
    var numero1;
    var numero2;
    var multiplicar;

    numero1 = document.getElementById("numeroUno").value;
    numero2 = document.getElementById("numeroDos").value;

    multiplicar = parseInt(numero1) * parseInt(numero2);

    alert("La multiplicación es " + multiplicar);

}

function dividir()
{
    var numero1;
    var numero2;
    var dividir;

    numero1 = document.getElementById("numeroUno").value;
    numero2 = document.getElementById("numeroDos").value;

    dividir = parseInt(numero1) / parseInt(numero2);

    alert("La división es " + dividir);
}

