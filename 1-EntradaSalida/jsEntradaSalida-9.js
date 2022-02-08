/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/

/*9-(2pts.)Realizar el algoritmo que permita ingresar la marca del producto, el peso el cual debe ser entre 1 y 100 (validar), la temperatura de almacenamiento (entre -30 y 30) hasta que el usuario quiera e informar al terminar el ingreso por document.write:
a) La cantidad de temperaturas pares.
b) La marca del producto más pesado.
c) La cantidad de productos que se conservan a menos de 0 grados.
d) El promedio del peso de todos los productos.
f) El peso máximo y el mínimo.*/

function mostrarAumento()
{
    var marca;
    var peso;
    var temperatura;
    var decision;
    var productoCero = 0;
    var temperaturaPar = 0;
    var marcaMasPesada;
    var pesoMasPesado;
    var productoCero;
    var contador = 0;
    var pesoPos = 0;
    var promedio;
    var pesoMin;

    while(decision != "no")
    {
       marca = prompt("Ingrese el nombre de alguna marca de un producto");
   
       peso = prompt("Inserte el peso del producto");
   
       while(peso < 1 || peso > 100)
       {
           peso = prompt("El peso debe ser entre 1 y 100");
       }

       if(peso > 0)
       {
           pesoPos = pesoPos + parseInt(peso);
       }

       temperatura = prompt("Ingrese la temperatura de almacenamiento entre -30 y 30");
   
       while(temperatura < -30 || temperatura > 30)
       {
           temperatura = prompt("La temperatura debe ser entre -30 y 30");
       }


       if(temperatura % 2 == 0)
       {
           temperaturaPar = temperaturaPar + 1;
       }

       if(contador == 0)
       {
           marcaMasPesada = marca;
           pesoMasPesado = peso;
           pesoMin = peso;
       }
       else
       {
        if(peso > pesoMasPesado)
        {
            pesoMasPesado = peso;
            marca = marcaMasPesada;
        }
        else if(peso < pesoMin)
        {
            pesoMin = peso;
        }
       }

       if(temperatura < 0)
       {
           productoCero = productoCero + 1;
       }

       do
       {
           decision = prompt("¿Desea continuar?");
       }while(decision != "no" && decision != "si")

       contador = contador + 1;
    }

    promedio = pesoPos / contador;

    document.write("Cantidad de temperaturas pares: " + temperaturaPar + "<br>");
    document.write("La marca del producto más pesado: " + marcaMasPesada + "<br>");
    document.write("cantidad de productos que se conservan a menos de 0 grados: " + productoCero + "<br>");
    document.write("El promedio del peso de todos los productos: " + promedio + "<br>");
    document.write("El peso máximo: " + pesoMasPesado + " y el peso mínimo " + pesoMin + "<br>");

}




/*9-(2pts.) Realizar el algoritmo que permita ingresar el nombre de un animal del zoológico, el peso el cual
debe ser entre 1 y 1000 y la temperatura del hábitat (entre -30 y 30) hasta que el usuario quiera e
informar al terminar el ingreso por document.write: a) La cantidad de temperaturas pares. b) El nombre y
temperatura del animal más pesado c) La cantidad de animales que viven a menos de 0 grados. d) El
promedio del peso de todos los animales. f) El peso máximo y el mínimo de todos los animales cuyas
temperaturas sean bajo cero*/

/*var animal;
    var peso;
    var temperatura;
    var decision;
    var contador = 0;
    var temperaturaPar = 0;
    var pesoMasPesado;
    var animalMasPesado;
    var temperaturaMasPesado;
    var animalCero = 0;
    var pesoPos = 0;
    var pesoMax;
    var pesoMin;
   
    while(decision != "no")
    {
       animal = prompt("Ingrese el nombre de algún animal de zoológico");
   
       peso = prompt("Inserte el peso del animal entre 1 y 1000 kilos");
   
       while(peso < 1 || peso > 1000)
       {
           peso = prompt("El peso debe ser entre 1 y 1000");
       }

       if(peso > 0)
       {
           pesoPos = pesoPos + parseInt(peso);
       }
   
       temperatura = prompt("Ingrese la temperatura del hábitat entre -30 y 30");
   
       while(temperatura < -30 || temperatura > 30)
       {
           temperatura = prompt("La temperatura debe ser entre -30 y 30");
       }

       do
       {
           decision = prompt("¿Desea continuar?");
       }while(decision != "no" && decision != "si")

       if(temperatura % 2 == 0)
       {
           temperaturaPar = temperaturaPar + 1;
       }

       if(contador == 0)
       {
           temperaturaMasPesado = temperatura;
           animalMasPesado = animal;
           pesoMasPesado = peso;
           
       }
       else
       {
        if(peso > pesoMasPesado)
        {
            peso = pesoMasPesado;
            animal = animalMasPesado;
            temperatura = temperaturaMasPesado;
        }
       }

       if(temperatura < 0)
        {
           animalCero = animalCero + 1;
        }
       
      

       contador = contador + 1;

    }

    promedioPeso = pesoPos / contador;*/
