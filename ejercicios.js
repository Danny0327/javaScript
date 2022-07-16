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
