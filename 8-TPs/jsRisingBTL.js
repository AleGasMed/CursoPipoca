/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
    var edad;

    edad = prompt("¿Cuál es su edad?");
    
    while(edad < 18 || edad > 90)
    {
        edad = prompt("Edad inválida, coloque una edad entre 18 y 90 años inclusive");
    }

    document.getElementById("Edad").value = edad;

    var sexo;

    sexo = prompt("¿Cuál es su sexo? si es masculino, ponga una M, y si es femenina, ponga una F");
    
    while(sexo != "F" && sexo != "M")
    {
        sexo = prompt("Inválido, inserte alguna letra solicitada");
    }

    document.getElementById("Sexo").value = sexo;

    var estadoCivil;
    
    estadoCivil = prompt("Ponga su estado civil entre : soltero, casado, divorciado o viudo");

    while(estadoCivil != "soltero" && estadoCivil != "casado" && estadoCivil != "divorciado" && estadoCivil != "viudo")
    {
        estadoCivil = prompt("Incorrecto, coloque un estado civil válido")
    }

    document.getElementById("EstadoCivil").value = estadoCivil;

    var sueldoBruto;

    sueldoBruto = prompt("¿Cuál es su sueldo bruto? no poner nada si es menor a 8000");

    while(sueldoBruto < 8000)
    {
        sueldoBruto = prompt("Ponga un sueldo bruto mayor a 8000");
    }

    document.getElementById("Sueldo").value = sueldoBruto;

    var legajo;

    legajo = prompt("Inserte su número de legajo sin ceros a la izquierda");

    while(legajo > 9999 || legajo < 1000)
    {
        legajo = prompt("El número colocado del legajo es inválido");
    }

    document.getElementById("Legajo").value = legajo;

    var nacionalidad;

    nacionalidad = prompt("Inserte su nacionalidad, A para argentinos, E para extranjeros y N para nacionalizados");

    while(nacionalidad != "A" && nacionalidad != "E" && nacionalidad != "N")
    {
        nacionalidad = prompt("Coloque alguna letra solicitada de la nacionalidad");
    }

    document.getElementById("Nacionalidad").value = nacionalidad;
}
