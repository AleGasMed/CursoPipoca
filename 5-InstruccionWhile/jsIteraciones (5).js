function mostrar()
{
    var sexo;

    sexo = prompt("Elija su sexo con las letras f ó m");

    while(sexo != "f" && sexo != "m")
    {
        sexo = prompt("Incorrecto, coloque una f o una m");
    }

    document.getElementById("Sexo").value = sexo;

}//FIN DE LA FUNCIÓN
//Se busca que Validación sea verdadera para que comience el bucle.
//El ejercicio pide que ponga una F o una M para finalizarlo.
//Validaciones: ==(igual) !=(no igual) >(mayor que) < (menor que) >=(mayor o igual)
//<=(menor o igual)