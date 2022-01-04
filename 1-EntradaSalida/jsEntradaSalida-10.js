/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
    var importe;
    var resultado;

    importe = document.getElementById("importe").value;

    resultado = 25 / 100 * parseInt(importe);

    document.getElementById("resultado").value = parseInt(importe) - resultado ;
	/*primer comando de consola*/
}
