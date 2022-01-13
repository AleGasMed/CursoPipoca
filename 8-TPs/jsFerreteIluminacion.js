/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
	var lamparas;
	var precioConDescuento;
	var marca;
	var impuesto;
	var precio;
	var precioTotalDeLamparas;

	
	lamparas = document.getElementById("Cantidad").value;
	precioTotalDeLamparas = lamparas * 35;
	marca = document.getElementById("Marca").value;

	if(lamparas >= 6)
	{
		precioConDescuento = precioTotalDeLamparas * 0.50;
	}
	
	if(lamparas == 5)
	{
		if(marca == "ArgentinaLuz")
		{
			precioConDescuento = precioTotalDeLamparas * 0.40;
		}
		else
		{
			precioConDescuento = precioTotalDeLamparas * 0.30;
		}

	}
	if(lamparas == 5 && marca == "ArgentinaLuz")
	{
		precioConDescuento = precioTotalDeLamparas * 0.40;
	}
	else if(lamparas == 5 && marca != "ArgentinaLuz")
	{
		precioConDescuento = precioTotalDeLamparas * 0.30;
	}

	if(lamparas == 4 && marca == "ArgentinaLuz")
	{
		precioConDescuento = precioTotalDeLamparas * 0.25;
	}
		
	if(lamparas == 4 && marca == "FelipeLamparas")
	{
		precioConDescuento = precioTotalDeLamparas * 0.25;	
	}

	if(lamparas == 4 && marca != "ArgentinaLuz" && marca != "FelipeLamparas")
	{
		precioConDescuento = precioTotalDeLamparas * 0.20;
	}

	if(lamparas == 3 && marca == "ArgentinaLuz")
	{
		precioConDescuento = precioTotalDeLamparas * 0.15;
	}

	if(lamparas == 3 && marca == "FelipeLamparas")
	{
		precioConDescuento = precioTotalDeLamparas * 0.10;
	}

	if(lamparas == 3 && marca != "ArgentinaLuz" && marca != "FelipeLamparas")
	{
		precioConDescuento = precioTotalDeLamparas * 0.05;			
	}
	
	precio = precioTotalDeLamparas - precioConDescuento;

	if(precioConDescuento > 120)
	{
		impuesto = parseInt(precioTotalDeLamparas) * 10 / 100;
		precioTotalDeLamparas = precioTotalDeLamparas + impuesto;
		alert("IIBB Usted pagó " + precioTotalDeLamparas);
	}

	
	document.getElementById("precioDescuento").value = precio;
}

