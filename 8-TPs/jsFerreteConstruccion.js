/*2.	Para el departamento de Construcción:
A.	mostrar la cantidad de alambre a comprar si se ingresara el largo y el ancho de un terreno rectangular y se debe alambrar con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    var alambre;
    var largo;
    var ancho;

    largo = document.getElementById("Largo").value;
    ancho = document.getElementById("Ancho").value;

    alambre = 2 * parseInt(largo) + 2 * parseInt(ancho);

    alert("La cantidad de alambre que se debe comprar es de: " + alambre);

    
}
function Circulo () 
{
	var alambre;
    var radio;

    radio = document.getElementById("Radio").value;

    alambre = 2 * 3.14 * parseInt(radio);

    alert("La cantidad de alambre a comprar es: " + alambre);
}
function Materiales () 
{
	var largo;
    var ancho;
    var bolsaDeCemento;
    var bolsaDeCal;
    var perimetroAlrectangulo;
    var cuadrado;

    ancho = document.getElementById("Largo").value;//lo importante es la altura en un cuadrado
    largo = document.getElementById("Ancho").value;

    perimetroAlrectangulo = 2 * parseInt(largo) + 2 * parseInt(ancho);
    cuadrado = parseInt(largo) / parseInt(ancho);

    bolsaDeCemento = cuadrado * 2;
    bolsaDeCal = cuadrado * 3;

    alert("Se necesitan " + bolsaDeCemento + " de cemento " + "\n" + "Se necesitan " + bolsaDeCal + " de cal");



    

    
}