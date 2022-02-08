/*5-(1pt.) (SWITCH ) pedir el ingreso de un día de la semana, si es fin de semana mostrar " buen finde",
 si es día hábil “ a trabajar”, si no es un día valido, también informarlo, usar una sola ventana alert */

function mostrar()
{	
  var dias;

  dias = prompt("Inserte un día de la semana en minúsculas y sin tildes");

  switch(dias)
  {
    case "lunes":
    case "martes":
    case "miercoles":
    case "jueves":
    case "viernes":
      alert("A trabajar");
      break;
    case "sabado":
    case "domingo":
      alert("buen finde");
      break;
    default:
      alert("No es un día válido");
      break;
  }

}