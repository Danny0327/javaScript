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




// BUCLES
// determinados