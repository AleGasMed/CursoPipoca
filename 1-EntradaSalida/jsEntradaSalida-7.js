/*7-(2pts.)Realizar el algoritmo que permita el ingreso por prompt de las notas (validar entre 0 y 10), el sexo (Validar el sexo “f” o “m”) de 5 alumnos, informar por alert:
a) El promedio de las notas totales.
b) La nota más baja y el sexo de esa persona.
c) La cantidad de varones que su nota haya sido mayor o igual a 6
"*/ 
function sumar()
{	
    var notas;
    var sexo;
    var promedio;
    var contador = 0;
    var suma = 0;

    while(contador < 5)
    {
        notas = prompt("Inserte una nota entre el 0 y el 10");

        while(notas > 10)
        {
            notas = prompt("Incorrecto, vuelva a insertar un número entre el 0 y el 10");
        }

        sexo = prompt("Inserte un sexo con las letras f o m");

        while(sexo != "f" && sexo != "m")
        {
            sexo = prompt("Incorrecto, vuelva a insertar la letra f ó m");
        }

        suma = parseInt(notas) + suma;
        contador = contador + 1;
    }

    promedio = parseInt(suma) / 5;

    alert(promedio);
}

