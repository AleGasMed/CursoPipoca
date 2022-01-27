function mostrar()

/*
Al ingresar una edad debemos informar si la 
persona es adolescente, edad entre 13 y 17 años 
(inclusive) .
*/

{
    var edad;

    edad = document.getElementById("edad").value;

    if(edad >=13 && edad <=17)
    {
        alert("Usted es adolescente");
    }


}//FIN DE LA FUNCIÓN


/**
 * logica 	1= VERDADERO Y 0= FALSO
 * 		AND - &&
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
 *  	OR - ||
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