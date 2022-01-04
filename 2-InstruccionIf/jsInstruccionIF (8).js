function mostrar()
{ 
    var edad;
    var estadocivil;

    edad = document.getElementById("edad").value;
    estadocivil = document.getElementById("estadoCivil").value;

    if(edad >=18 && estadocivil == "Soltero")
    {
        alert("Es soltero y no es menor");
    }
//tomo la edad  
}//FIN DE LA FUNCIÓN