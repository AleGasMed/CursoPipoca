/*7- Realizar el algoritmo que permita el ingreso por prompt de las notas (validar entre 0 y 10), la edad
y el sexo (validar el sexo “f” o “m”) de 5 alumnos, informar por alert:
a) El promedio de las notas totales. b) La nota más baja y el sexo de esa persona. d) La cantidad de
varones mayores a 18, que su nota haya sido mayor o igual a 6. d) El sexo y la nota del más joven.
d) La edad y la nota de la primera mujer ingresada o informar si no hubo ninguna mujer*/ 
function sumar()
{	
    var notas;
    var sexo;
    var edad;
    var promedio;
    var contador = 0;
    var suma = 0;
    var notaBaja;
    var sexoNotaBaja;
    var edadMasJoven;
    var sexoMasJoven;
    var notaMasJoven;
    var edadPrimeraMujer;
    var notaPrimeraMujer;
    var cantidadDeVarones = 0;
    var huboMujer = false;

    while(contador < 5)
    {
        notas = prompt("Inserte una nota entre el 0 y el 10");//Está de más porque va entrar igual al while

        while(notas > 10)
        {
            notas = prompt("Incorrecto, vuelva a insertar un número entre el 0 y el 10");
        }

        edad = prompt("Ingrese su edad");

        while(parseInt(edad) == NaN && edad <= 0)
        {
            edad = prompt("No puede ingresar un número negativo ni una letra");
        }

        sexo = prompt("Inserte un sexo con las letras f o m");

        while(sexo != "f" && sexo != "m")
        {
            sexo = prompt("Incorrecto, vuelva a insertar la letra f ó m");
        }

        if(contador == 0)
        {
            notaBaja = notas;
            sexoNotaBaja = sexo;
            edadMasJoven = edad;
            sexoMasJoven = sexo;
            notaMasJoven = notas;
        }
        else
        {
            if(notas < notaBaja)
            {
                notas = notaBaja;
                sexo = sexoNotaBaja;
            }

            if(edad < edadMasJoven)
            {
                sexo = sexoMasJoven;
                notas = notaMasJoven;
            }
        }
        
        if(sexo == "f")
        {
            huboMujer = true;
        }
        else
        {
        edadPrimeraMujer = edad;
        alert("EDAD PRIMERA MUJER: " + edadPrimeraMujer);
        notaPrimeraMujer = notas;
        alert("NOTA PRIMERA MUJER: " + notaPrimeraMujer);
        }

        if(notas >= 6 && sexo == "m" && edad > 18)
        {
            cantidadDeVarones = cantidadDeVarones + 1;
        }

        suma = parseInt(notas) + suma;
        
        contador = contador + 1;

        
    }

    promedio = parseInt(suma) / 5;

    alert("El promedio total es de " + promedio);
    alert("La nota más baja fue de " + notaBaja + " y su sexo era " + sexoNotaBaja);
    alert("La cantidad de varones mayores a 18 con notas iguales o mayores a 6 es de " + cantidadDeVarones);
    alert("El sexo del más joven es " + sexoMasJoven + " y su nota era " + notaMasJoven);
    alert("La edad de la primera mujer ingresada es de " + edadPrimeraMujer + " años " + " y su nota es " + notaPrimeraMujer);
    
}

