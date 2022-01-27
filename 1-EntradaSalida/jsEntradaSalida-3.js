/*Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar()
{
    //3-(0,5pts.) Pedir por prompt el precio y el porcentaje de descuento, mostrar el precio final con descuento por id
	
    var precio;
    var porcentajeDeDescuento;
    var precioFinal;

    precio = prompt("Coloque un precio");
    porcentajeDeDescuento = prompt("Ahora inserte un porcentaje (sin el signo del porcentaje)");

    precioFinal = parseInt(porcentajeDeDescuento) / 100 * precio;

    document.getElementById("elNombre").value = parseInt(precio) - precioFinal;

}


