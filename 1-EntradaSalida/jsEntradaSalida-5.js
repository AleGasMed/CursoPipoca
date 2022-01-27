/*5-(1pt.) pedir el ingreso de un planeta del sistema solar
Si es la tierra mostrar "acá vivimos". Si está más cerca del sol, "acá hace más calor". Si está más lejos
del sol, "acá hace más frio". Si no es un planeta valido informarlo.
Aclaración: los planetas se ingresan en minúscula (Mercurio y Venus están antes que la tierra).*/

function mostrar()
{	
  var planeta;

  planeta = prompt("Inserte un planeta del sistema solar");

  switch(planeta)
  {
    case "mercurio":
    case "venus":
    alert("Acá hace más calor");
    break;
    case "tierra":
    alert("Acá vivimos");
    break;
    case "marte":
    case "jupiter":
    case "saturno":
    case "urano":
    case "neptuno":
    alert("Acá hace más frío");
    break;
    default:
    alert("No es un planeta válido");
    break;
  }
}

