//1. Solicita nombre, edad y muestra por consola el mensaje "hola___, tienes ___ años y el año que viene tendras___años"...
// realiza el ejercicio con prompt (mensaje) y haz uso de los template strings


/*let nombre = prompt ("ingrese su nombre");
 let edad = parseInt(prompt ("ingrese su edad"));
 console.log(`Hola ${nombre} tienes ${edad} años y el año que viene tendras ${edad+1} años`);*/
// --------------------------------------------------------------------------------------------------


// 2. Esribe un programa que pueda calcular el area de tres figuras geometricas: triangulo, rectangulo y circulo. 
// En primer lugar pregunta de que figura se quiere calcular el area, despues solicita los datos que necesites para calcularlo.
// triangulo = b * h/2
// rectangulo = b * h
// circulo = 𝜋 * r2 



/*let figura = prompt('de que figura quiere calcular el area?: triangulo,rectangulo o circulo');

let base;
let height;
let radius; 

switch (figura) {
    case 'triangulo':
        base = prompt ('introduce la base del triangulo')
        height = prompt ('introduce la altura del triangulo')
        console.log(`el area del triangulo es ${(base * height)/2}`);
        break;
    
        case 'rectangulo':
            base = prompt ('introduce la base del rectangulo')
            height = prompt ('introduce la altura del rectangulo')
            console.log(`el area del rectangulo es ${base * height}`);
            break;

            case 'circulo':
                radius = prompt ('introduce el radio del circulo')
                console.log(`el area del circulo es ${Math.PI * Math.pow(radius,2)}`);
                break;
}*/
// -------------------------------------------------------------------------------------------------------------------


// 3. Solicita un numero e imprime todos los numeros pares e impares desde 1 hasta ese numero con el mensaje 
// "es par" o "es impar" si el numero es 5 el resultado sera
// 1 - es impar
// 2 - es par
// 3 - es impar
// 4 - es par
// 5 - es impar


/*let num = parseInt(prompt('digite un numero'));
for (let i=1; i<=num; i++){
    if(i%2==0){
        console.log(`${i} - es par`);
    }else{
        console.log(`${i} - es impar`);
    }
}*/

// --------------------------------------------------------------------------------------------------------------------


// 4. Escribe un programa que pida un numero entero mayor que 1 y que escriba si el numero es primo o no. 
// un numero primo es aquel que solo es divisible por si mismo y la unidad.

/*let num = parseInt(prompt('digite un numero'));
let divisores = 0

if (num ===1 ) console.log('el numero no es valido');
else{

    for (let i=2; i<num; i++){
        if(num % i == 0){
            console.log(`${num} / ${i} = ${num / i} no es primo`);
            divisores++
            break
        }
    }
}
if (divisores==0) console.log(`${num} es primo`); */

// --------------------------------------------------------------------------------------------------------------------

// 5. Escriba un programa que pida un numero entero mayor que 0 y calcular su factorial.
// El factorial es el resultado de multiplicar ese numeero por sus anteriores hasta la unidad
// !5 = 5*4*3*2*1 = 120 

/*let num = parseInt(prompt('digite un numero'));
let result=1

for(let i = num; i>0; i--){
    result *= i
}

console.log(`el factorial de ${num} es ${result}`);*/
// -----------------------------------------------------------------------------------------------------------------------

// 6. Escriba un programa que permita ir introduciendo una serie indeterminada de numeros mientras su suma no supere 50.
// Cuando esto ocurra se debe mostrar el total acumulado y el contador de cuantos numeros se han introducido

/*let suma=0
let cont=0

while(suma<50){
    suma += parseInt(prompt('digite un número para sumar'))
    cont++
}
    console.log(`total acumulado: ${suma}`);
    console.log(`se introducieron ${cont} números`);*/

// ---------------------------------------------------------------------------------------------------------------------------

// 7. Crea 3 arrays. El primero tendra 5 numeros, el segundo se llamara pares y el tercero impares, ambos estaran vacios.
// Después multiplica cada uno de los numeros del primer array por un numero aleatorio entre 1 y 10, 
// si el resultado es par guarda ese numero en el array de pares y si es impar en el array de impares. Muestra por coonsola:
// -la multiplicación que se produce junto con su resultado con el formato 2*3=6
// - el array de pares e impares 

/*const numbers = [3, 47, 7, 10, 26]
let pares =[]
let impares =[]

for(const number of numbers){
    let random = Math.round(Math.random() * 10 + 1)
    const result = number * random

    console.log(`${number} * ${random} = ${result}`);
    if(result % 2 == 0){
        pares.push(result)
    }else{
        impares.push(result)
    }
}
console.log(pares);
console.log(impares);*/

// ---------------------------------------------------------------------------------------------------

// 8. Dado un array de letras, solicita un numero de DNI y calcula que letra le corresponde. El numero no puede ser negativo ni tener mas de 8 digitos.
// La posición de la letra es el resultado del modulo del numero introducido entre 23. 

// const letras = ['T','R','W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T']

/*const letras = ['T','R','W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T']

const dni = prompt('digita tu DNI')

if(dni.length==8 && parseInt(dni)>0){
    console.log(`tu DNI completo es ${dni}${letras[dni%23]}`);
}*/

// 9. Solicitar al usuario una palabra y mostrar en consola el numero de consonantes, vocales y  longitud de la palabra.

/*const palabra = prompt('ingrese palabra')

let consonantes = 0;
let vocales = 0;
for (const letra of palabra){
    if(letra == 'a' || letra=='e' || letra=='i' || letra=='o' ||letra=='u') vocales++
    else consonantes++
}
console.log(`Tu palabra tiene ${vocales} vocales, ${consonantes} consonantes y tiene un total de ${palabra.length} letras.`);*/

// 10. Dado un array que contiene ["azul", "ammarillo", "rojo", "verde", "rosa"] determinar si un color introducido por el usuario
// a través de un prompt se encuentra dentro del array o no.

const colors= ["azul", "ammarillo", "rojo", "verde", "rosa"]
const color = prompt ('escribe un color')

if (colors.indexOf(color) !== -1){
    console.log('este color se encuentra en el array');
}else{
    console.log('este color no está en el array');
}
