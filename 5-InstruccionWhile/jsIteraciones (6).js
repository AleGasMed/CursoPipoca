function mostrar()
{
    var numero;
    var contador = 0;
    var suma = 0;
    var promedio;

    while(contador < 5)
    {
        numero = prompt("Inserte un número");
        suma = parseInt(numero) + suma ;
        contador = contador + 1;

    }
    
    promedio = suma / 5;

    document.getElementById("suma").value = suma;
    document.getElementById("promedio").value = promedio;
    
    
    
    
   
}//FIN DE LA FUNCIÓN 
//Inicializador