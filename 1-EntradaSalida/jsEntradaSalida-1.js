//Debemos lograr mostrar un mensaje al presionar el botón  'mostrar'.
function mostrar()
{
    //nivel 1 : "perimetro"
    var largo;
    var ancho;
    var perimetroAlRectangulo;

    ancho = prompt("Inserte el ancho de un rectángulo");

    largo = prompt("Inserte el largo de un rectángulo");

    perimetroAlRectangulo = 2 * parseInt(largo) + 2 * parseInt(ancho);

    alert("El perímetro es " + perimetroAlRectangulo);
}

