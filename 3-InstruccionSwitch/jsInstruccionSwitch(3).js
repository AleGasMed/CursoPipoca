function mostrar()
{  
var mesDelAño = document.getElementById('mes').value;

switch(mesDelAño)
{
    case "Enero": 
    case "Marzo":
    case "Abril":
    case "Mayo":
    case "Junio":
    case "Julio":
    case "Agosto":
    case "Septiembre":
    case "Octubre":
    case "Noviembre":
    case "Diciemnbre":
    alert("Este mes tiene 30 o más días");
    break;
        default:
            alert("Este mes no tiene más de 29 días");
        break;
}
}//FIN DE LA FUNCIÓN