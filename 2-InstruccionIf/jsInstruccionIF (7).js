function mostrar()
{

/*Al ingresar una edad menor a 18 años 
y un estado civil distinto a "Soltero", mostrar 
el siguiente mensaje: 
'Es muy pequeño para NO ser soltero.'*/
    
    
    //tomo la edad 
    
    var edadIngresada;
    var estadoCivilIngresado;
    
    edadIngresada = document.getElementById('edad').value;
    estadoCivilIngresado = document.getElementById("estadoCivil").value; 
    
    if(edadIngresada < 18 && estadoCivilIngresado != "Soltero")
    { 
        alert("Es muy pequeño para NO ser soltero");
    }   
    
    
    //tomo la edad 


}//FIN DE LA FUNCIÓN


// *Case sensitive*
// "Soltero" == "soltero" = false
// "Soltero" == "Soltero" = true