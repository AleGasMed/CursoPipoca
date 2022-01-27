function mostrar()
{
    var sexo;

    sexo = prompt("Coloque, para su sexo, una f para femenino o una m para masculino");

    while(sexo != "f" && sexo != "m")
    {
        sexo = prompt("Incorrecto, inserte alguna letra solicitada");
    }   

    document.getElementById("Sexo").value = sexo;
   
}//FIN DE LA FUNCIÓN
//Se busca que Validación sea verdadera para que comience el bucle.
//El ejercicio pide que ponga una F o una M para finalizarlo.
//Validaciones: ==(igual) !=(no igual) >(mayor que) < (menor que) >=(mayor o igual)
//<=(menor o igual)