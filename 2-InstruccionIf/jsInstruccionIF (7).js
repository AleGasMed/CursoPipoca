function mostrar()

{
    var edad;
    var estadocivil;

    edad = document.getElementById("edad").value;
    estadocivil = document.getElementById("estadoCivil").value;

    if(edad <=17 && estadocivil != "Soltero")
    {
        alert("Es muy pequeño para no ser soltero");
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