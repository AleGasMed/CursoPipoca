function mostrar()
{
   var dato;

   dato = prompt("Coloque un número entre 0 y 9 inclusive");

   while(dato > 9 && dato[0])
   {
    dato = prompt("Incorrecto, vuelva a ingresar otro número");
   }

   document.getElementById("Numero").value = dato;
    
    
    


}//FIN DE LA FUNCIÓN