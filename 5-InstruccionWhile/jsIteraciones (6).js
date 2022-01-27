function mostrar()
{
    var numero;
    var contador = 0;
    var suma = 0;
    var promedio;

    while(contador < 5)
    {
        numero = prompt("Coloque 5 números");
        contador = contador + 1;
        suma = parseInt(numero) + suma;   
    }

    promedio = suma / 5;

    document.getElementById("suma").value = suma;
    document.getElementById("promedio").value = promedio;
    
}//FIN DE LA FUNCIÓN 
//Inicializador