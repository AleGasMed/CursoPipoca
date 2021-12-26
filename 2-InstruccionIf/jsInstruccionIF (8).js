function mostrar()
{ 
    var edadIngresada;
    var estadoCivilIngresado;
    
    edadIngresada = document.getElementById('edad').value;
    estadoCivilIngresado = document.getElementById("estadoCivil").value; 
    
    if(edadIngresada >= 18 && estadoCivilIngresado == "Soltero")
    { 
        alert("Es soltero y no es menor de edad");
    }
//tomo la edad  
}//FIN DE LA FUNCIÓN