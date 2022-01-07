function mostrar()
{
    var numero;
    var suma;
    var promedio;
    var contador;

    contador = 0;
    suma = 0;
    
   

    while(contador < 5)
    {
        numero = parseInt(numero) + 1;
        numero = prompt("Coloque un numero");
        contador = contador + 1;
        suma = parseInt(numero) + suma;
    }
    
    promedio = suma / 5;

    document.getElementById("suma").value = suma;
    document.getElementById("promedio").value = promedio;

    
    
    
    
   
}//FIN DE LA FUNCIÓN 
//Inicializador