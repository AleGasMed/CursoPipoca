/*3-(0,5pts.) Pedir por prompt el precio y el porcentaje de descuento, mostrar: 1-el descuento en dinero, 2-el
precio con el descuento ,3-el IVA , todos los anteriores e un solo alert. 4-y solo el precio con descuento
más el IVA por id .*/
function mostrar()
{
    //3-(0,5pts.) Pedir por prompt el precio y el porcentaje de descuento, mostrar el precio final con descuento por id
	
    var precio;
    var porcentajeDeDescuento;
    var precioFinal;

    precio = prompt("Coloque un precio");
    
    porcentajeDeDescuento = prompt("Ahora inserte un porcentaje (sin el signo del porcentaje)");

    precioFinal = parseInt(porcentajeDeDescuento) / 100 * precio;

    alert("El descuento en dinero es de " + precioFinal + ", el precio con el descuento es de " + (parseInt(precio) - precioFinal) + ", y el IVA es del 21% ");

    document.getElementById("elNombre").value = parseInt(precio) - precioFinal * 0.21;
}


