function mostrar()
{
    var dato;

    dato = prompt("Colocar un número entre el 0 y el 9 inclusive");

    while(dato >= 10)
    {
        dato = prompt("Incorrecto, vuelva a colocar algún número solicitado");
    }

    document.getElementById("Numero").value = dato;
    
    
    


}//FIN DE LA FUNCIÓN