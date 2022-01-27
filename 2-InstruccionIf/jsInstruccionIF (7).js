function mostrar()

{
    var edad;
    var estadoCivil;

    edad = document.getElementById("edad").value;
    estadoCivil = document.getElementById("estadoCivil").value;

    if(edad < 18 && estadoCivil != "Soltero")
    {
        alert("Es un muy pequeño para NO ser soltero");
    }
}//FIN DE LA FUNCIÓN


// *Case sensitive*
// "Soltero" == "soltero" = false
// "Soltero" == "Soltero" = true
/*Al ingresar una edad menor a 18 años 
y un estado civil distinto a "Soltero", mostrar 
el siguiente mensaje: 
'Es muy pequeño para NO ser soltero.'*/
    
    
    //tomo la edad 
    
   
    
    
    //tomo la edad 