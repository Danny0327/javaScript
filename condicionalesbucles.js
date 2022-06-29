//CONDICIONALES
// condicional simple

let num = 5
    if(num>0){
        console.log(`${num} es mayor que 0`);
        console.log(`${num} es mayor que 0`);
    }
// condicional compuesto
if(num>0){
    console.log(`${num} es mayor que 0`);
}else{
    console.log(`${num} es menor que 0`);
}
// condicional multiple
if(num>0){
    console.log(`${num} es mayor que 0`);
}else if(num<0){
    console.log(`${num} es menor que 0`);
}else{
    console.log(`${num} es igual a 0`);
}
// operadores logicos
let num1 = 1;
let num2 =5;

    if(num1>0){
        if(num2>0){
            console.log(`${num1} y ${num2} son mayores que 0`);
        }else if(num2<0){
            console.log(`${num1} es mayor que 0 y num 2 es menor que 0`);
        }else{
            console.log(`${num1} es mayor que 0 y num 2 es igual a o`);
        }
    }else if(num1<0){
        if(num2>0){
            console.log(`${num1} no es mayor que 0 y ${num2} es mayor que 0`);
        }else if(num2<0){
            console.log(`${num1} y ${num2} son menores que 0`);     
        }else{
            console.log(`${num1} es menor que 0 y num2 es igual a 0`);
        }
    }else{
        if(num2>0){
            console.log(`${num1} es igual a 0 y ${num2} es mayor que 0`);
        }else if(num2<0){
            console.log(`${num1} es igual a 0 y ${num2} es menor que 0`);     
        }else{
            console.log(`${num1} y ${num2} son iguales a 0`);
        }
    }
    // ----------------------------------------------------------------------------------

    let word ='hola';
    if(word.length>4){
        console.log(`${word} tiene mas de 4 letras`);
    }else if(word.length<4){
        console.log(`${word} tiene menos de 4 letras`);
    }else{
        console.log(`${word} tiene 4 letras`);
    }


    let respuesta = true;

    if(respuesta==true) console.log(`respuesta tiene el valor true`);
    if(respuesta==false) console.log(`respuesta tiene el valor false`);

    if(respuesta) console.log(`respuesta tiene el valor true`);
    if(respuesta) console.log(`respuesta tiene el valor false`);
    // ----------------------------------------------------------------------------------

    let seleccionar = document.querySelector('select');
    let parrafo = document.querySelector('p');

    seleccionar.addEventListener('change', establecerClima);
    // es un escuchador que indica al navegador que este atento a la interacción del usuario

    function establecerClima() {
    let eleccion = seleccionar.value;

        if (eleccion === 'soleado') {
            parrafo.textContent = 'El día esta agradable y soleado hoy. ¡Use pantalones cortos! Ve a la playa o al parque y come un helado.';
        } else if (eleccion === 'lluvioso') {
            parrafo.textContent = 'Está lloviendo, tome un abrigo para lluvia y un paraguas, y no se quede por fuera mucho tiempo.';
        } else if (eleccion === 'nevando') {
            parrafo.textContent = 'Está nevando ─ ¡está congelando! Lo mejor es quedarse en casa con una taza caliente de chocolate, o hacer un muñeco de nieve.';
        } else if (eleccion === 'nublado') {
            parrafo.textContent = 'No está lloviendo, pero el cielo está gris y nublado; podría llover en cualquier momento, así que lleve un saco solo por si acaso.';
        } else {
            parrafo.textContent = '';
        }
    }

    // --------------------------------------------------------------------------------------------------------

    const helado = prompt('seleccione el helado')
    
    let heladoSeleccionado =
    helado.toLocaleLowerCase().replace(0, 'o').replace(3, 'r')

    if(heladoSeleccionado == 'oreo'){
        console.log('Helado de Oreo');
    }else if(heladoSeleccionado == 'kitkat'){
        console.log('Helado de kitkat');
    }else if(heladoSeleccionado == 'brownie'){
        console.log('Helado de brownie');
    }else if(heladoSeleccionado == 'lacasitos'){
        console.log('Helado de lacasitos');
    }else{
        console.log('no tenemos este topping lo sentimos')
    }




// ------------------------------------------------------------------------------------------------------------------
/*CONDICIONAL SWITCH 
"elige un cambio de varios preestablecidos".
sintaxis simple: 
switch(evaluación{
    case n1:
        //codigo 
        break;
    case n2: 
        //codigo
        break;
        default:
        //codigo

sintaxis múltiple:
switch(evaluación){
    case n1:
    case n2:
    case n3:
    //codigo
    break;
    default;
    //codigo
}
el break; siempre se pone al terminar el caso-lo que hace es evitar que el switch se siga ejecutando hacia abajo, cuando un programa encuentra un break rompe la ejecucion y pasa a la siguiente estructura que tenga que ejecutar.
*/

let num = 4 ;
switch(num){
     case 1:console.log(`${num} tiene el valor 1`);
     break;
     case 2:console.log(`${num} tiene el valor 2`);
     break;
     default: console.log(`${num} no vale ni 1 ni 2`);
}
switch(num){
    case 1:
    case 3:
    case 5:
    console.log(`${num} es impar`);
    break;
    case 2:
    case 4:
    console.log(`${num} es par`);
}

/*OPERADOR TERNARIO
se utiliza cuando una condición será true o false al igual que el if
(condición)? true:false
(condición)?
    (primera sentencia,
        segunda sentencia)
        :
    (primera sentencia,
        segunda sentencia)
*/
let num = 2;
(num % 2==0) ? console.log(`${num} es par`) : console.log(`${num} es inpar`)

// varias sentencias
let num = 2;

(num % 2==0) ? 
    (
        console.log(`${num} es par`),
        console.log(`${num} es par 2`)
    )
        : 
    (
        console.log(`${num} es impar`), 
        console.log(`${num} es impar 2`)
    )

/*ARRAYS
estructuras que permiten almacenar varios datos y agruparlos---------con corchetes[]
let array=[]    vacio
let numeros=[1,2,3,4,5]     con contenido inicial se puede acceder a un valor dentro desde su posición.
comienza a contar desde 0*/
let numeros=[1,2,3,4,5];
console.log(numeros[0]);
// ---------
console.log(numeros[0]+numeros[1]);

let palabras =['hola', 'fiu', 'world'];
console.log(palabras[1])
// -------------------------------------
console.log(`la palabra "${palabras[1]}" tiene ${palabras[1].length} letras`);

/*metodos array:
array.isArray(variable a evaluar) devuelve true si la variable es un array.*/
let number = 4;
console.log(Array.isArray(number)); false

let numbers = [4];
console.log(Array.isArray(numbers)); true
// --------------------------------------------------------------------------------
/*eliminar elemento
.shift()  elimina el primer elemento del array y devuelve ese elemento
.pop() elimina el último elemento de un array y devuelve ese elemento*/

let numbers=[1,2,3,4,5];
numbers.shift();
console.log(numbers);

numbers.pop();
console.log(numbers);

/*añadirr elemento
.push(element1, element2,...) añade uno o mas elementos al final del array y devuelve la nueva longitud.
.unshift(element1, element2,...) añade uno o mas elementos al comienzo del array y devuelve la nueva longitud.*/
let numbers=[1,2,3,4,5];
console.log(numbers);
let newLength = numbers.push(6);
console.log(numbers);
// console.log(newLength);
let newLength2 = numbers.unshift(0);
console.log(numbers);

/*.indexof() devuelve el primer indice del elemento que coincida con el valor especificado, 0 -1 si ninguno es encontrado.*/
let numbers=[1,2,3,4,5];
console.log(numbers);
console.log(numbers.indexOf(2 )); 
// solo devuelve el primer numero que encuentra, no lo repite si hay 2. eEn cuanto encuentra el primero deja de buscar.

/*.lastindexof() devuelve el ultimo indice del elemento que coincida con el valor especificado, 0 -1 si ninguno es encontrado.*/
let numbers=[1,2,3,4,5];
console.log(numbers);
console.log(numbers.lastindexOf(2 )); 
/*.reverse() invierte el orden de los elementos del array (lee los elementos alrevez*/
let numbers=[1,2,3,4,5];
console.log(numbers);
numbers.reverse(2 ); 
console.log(numbers);
/*.join('separador') devuelve un string con el separador que indiquemos, por defecto con comas*/
let numbers=[1,2,3,4,5];
console.log(numbers);
let arrayString = numbers.join(' ')
console.log(arrayString);
console.log(numbers.join('-')); 
/*.splice(a,b,items) cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos.
        a indice de inicio
        b numero de elementos (opcional)
        items elementos a añadir en el caso de que se añadan 8opcional []*/
let numbers=[1,2,3,4,5];
console.log(numbers);
// numbers.splice(3) elimina desde la posicion 3 hasta el final
numbers.splice(2,2)   /elimina desde la posicion 2 los valores que le indiquemos/
numbers.splice(2,2,10,23,54) /* si b es un valor distinto de 0 elimina el numero de valores que indiquemos en b 
y añade los valores de item a partir de la posición a*/
numbers.splice(4,0,10,23,54) /si b vale 0 nañade los elementos a partir de la posición a y no elimina ninguno/
console.log(numbers); 

/*.slice(a,b)  extrae elementos de un array desde el indice a hasta el indice b,
 si no existe b lo hace desde a hasta el final, si no existe ni a ni b hace una copia del original.*/
 let numbers=[1,2,3,4,5];
 let newNumbers = numbers.slice();
console.log(numbers);
console.log(newNumbers); 
// -------------------------------
let numbers=[1,2,3,4,5];
let newNumbers = numbers.slice(2); /* saca un nuevo array contando desde la possición 2 osea desde 3*/
console.log(numbers);
console.log(newNumbers); 
// --------------------------------
let numbers=[1,2,3,4,5];
 let newNumbers = numbers.slice(2,3); /*empieza desde la posición 2 y extrae hasta la posicion 3*/
console.log(numbers);
console.log(newNumbers); 

/*BUCLE WHILE Y DO WHILE
se usa cuando queremos que un trozo de codigo se repita 
bucles determinados: cuando especificamos el numero de veces que se va a repetir. ej: imprimir numeros del 1 al 10
bucles indeterminados: cuando no sabemos el numero de veces que se va a repetir. : ej: repetir mensaje de repetir contraseña
bucle{
    codigo a ejecutar
}

WHILE (si la condición no se cumple no se ejecuta)
indeterminado
sintaxis: unica parte: condición de salida
while(condición){
    codigo a ejecutar
}
DO WHILE (se ejecuta una vez minimo se cumpla o no la condición)
indeterminado
sintaxis: dos partes: codigo a ejecutar, condición de salida
do{
    codigo a ejecutar
}while{condicion}*/
let pass = '';
while(pass !='hola'){
    pass = prompt('introduzca su contraseña')
}
console.log('fin del bucle');
// --------------------------------------------------------------------
let pass = 'hola';
do{
    pass = prompt('introduzca su contraseña')
}while(pass != 'hola')
