//Debemos lograr mostrar un mensaje al presionar el botón  'mostrar'.
function mostrar()
{
    var base;
    var altura;
    var perimetroEquilatero;
    var superficie;

    base = prompt("Inserte la base de un tritángulo");

    while(base != altura)
    {
        base = prompt("Incorrecto, la base tiene que ser igual a la altura");
    }
    
    altura = prompt("Inserte la altura de un tritángulo");
    
    while(altura != base)
    {
        altura = prompt("Incorrecto, la altura tiene que ser igual a la base");
    }
    
   

    superficie = 3 * parseInt(base);

    perimetroEquilatero = parseInt(base) * parseInt(altura) / 2;

    alert("la superficie de un triángulo equilátero es de " + superficie + " cm " + " y su perímetro es de " + perimetroEquilatero);



    
   
}

/*1-(0,5pts.) Realizar el algoritmo que pida la base y la altura de un triángulo equilátero, informar la
superficie y el perímetro en una sola ventana alert.*/


//nivel 1 : "perimetro"
    /*var largo;
    var ancho;
    var perimetroAlRectangulo;

    ancho = prompt("Inserte el ancho de un rectángulo");

    largo = prompt("Inserte el largo de un rectángulo");

    perimetroAlRectangulo = 2 * parseInt(largo) + 2 * parseInt(ancho);

    alert("El perímetro es " + perimetroAlRectangulo);*/

    //CONSTANTES(CONST)
        /*const objetos = {
            apellido : "Medina",
            edad : 22
        }
        console.log(objetos);

        objetos.correo = "El ale";

        console.log(objetos);*/

        /*//CADENAS DE TEXYO(STRING) Es lo que está entre comilla, o sea el texto.
    let nombre = "GASTON";
    let saludo = new String("Hola mundo");

    //interpolaccion de variables
    //Template strings
    let nombre = "Ale";
    let apellido = "Medina";

    let saludo =  //comillas de a uno al reves*/

    //objetos
    /*const ale ={
        nombre: "Ale",
        apellido: "Medina",
        edad: 22,
        pasatiempos:["hacer ejercicio", "Aprender y practicar la filosofía del estoicismo"],
        soltero:true,
        contacto:{
            emal:"alejandromedina085@gmail.com",
            facebook:"Ale Medina"
        },
    }*/
    /*if - else - else if*/
    /*  
    dejame dormir: 0 hrs(así se marca el tiempo) - 5 hrs.
    buenos dias: 6 hrs - 11 hrs.
    buenas tardes: 12 hrs - 19 hrs.
    buenas noches: 20 hrs - 23hrs.*/
