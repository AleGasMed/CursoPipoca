/*6-(1pt.) (SWITCH + IF) Se ingresa una nota. Si está entre las 0 y las 3 mostrar: "la próxima se puede", si es
desde las 4 a las 6: "raspando", de lo contrario informar que aprobó. Informar si la nota no es válida. Si es
aprobó y la nota es mayor a 8 se debe agregar el mensaje: "muy bien". Si es nota para “raspando” y la
nota es menor a 5 se debe agregar el mensaje: "debes preocuparte más"
*/
function sumar()
{
   var nota;

   nota = prompt("Inserte una nota");

   while(nota > 10)
   {
      nota = prompt("Nota inválida, vuelva a insertar una nota");
   }

   switch(nota)
   {
      case 0:
      case 1:
      case 2:
      case 3:
         alert("La próxima se puede");
         break;
      case 4:
      case 5:
      case 6:
         alert("Raspando")
         if(nota < 5)
         {
            alert("Raspando, debes preocuparte más");
         }
         break;
      case 8:
      case 9:
      case 10:
         alert("Muy bien");
         break;
      default:
         alert("La nota es inválida");
   }

   /*if(hora >=6 && hora <=11)
   {
      alert("Es de mañana");
   }
   else if(hora >=12 && hora <=19)
   {
      alert("Es de tarde")
   }
   
   if(hora >= 0 && hora <=5)
   {
      alert("Es de noche");
   }
   else if(hora >=20 && hora <=24)
   {
      alert("Es de noche, a dormir");
   }
   else
   {
      alert("La hora es inválida");
   }*/
}
/*switch(hora)//Error: se pudo haber hecho mas simplicado y en menos lineas
   {
      case "6":
      case "7":
      case "8":
      case "9":
      case "10":
      case "11":
      alert("Es de mañana");
      break;
      case "12":
      case "13":
      case "14":
      case "15":
      case "16":
      case "17":
      case "18":
      case "19":
      alert("Es de tarde");
      break;
      case "21":
      case "22":
      case "23":
      case "24":
      alert("Es de noche, a dormir");
      break;
      case "0":
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      alert("Es de noche");
      break;
      default:
      alert("La hora no existe");
      break;
   }*/
