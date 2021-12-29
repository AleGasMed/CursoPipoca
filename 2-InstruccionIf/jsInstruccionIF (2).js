function mostrar()
{
    var edadIngresada;

    edadIngresada = document.getElementById("edad").value;

    if(edadIngresada >= 18)
    {
        alert("Usted es mayor de edad");
    }
//tomo la edad  

}//FIN DE LA FUNCIÓN



/**
 * logica 	1= VERDADERO Y 0= FALSO
 * 		AND
 * 0	0	| 0
 * 1	0	| 0
 * 0	1	| 0
 * 1	1	| 1
 * 
 * 	Not AND
 * 0	0	| 1
 * 1	0	| 0
 * 0	1	| 0
 * 1	1	| 0
 * 
 *  	OR
 * 0	0	| 0
 * 1	0	| 1
 * 0	1	| 1
 * 1	1	| 1
 * 
 *  Not OR
 * 0	0	| 1
 * 1	0	| 0
 * 0	1	| 0
 * 1	1	| 0
 * 
 */