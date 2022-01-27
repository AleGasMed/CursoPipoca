function mostrar()
{
    var dato;

    dato = prompt("Coloque un número entre el 0 y el 9 inclusive");

    while(dato > 9)
    {
        dato = prompt("Incorrecto, inserte un número entre el 0 y el 9 inclusive");
    }

    document.getElementById("Numero").value = dato;
}//FIN DE LA FUNCIÓN