/*toupercase(de minuscula a mayuscula)
tolowercase( de mayuscula a minuscula)
indexof(ubica la posicion del caracter en la cadena)
replace(reemplaza palabra o frase)
substring(extrae caracteres de inicio a fin(se ubica))
slice(igual pero si admite valores negativos)
trim(elimina espacios)
startswith(comprueba si la cadena empieza con ese valor. genera true, false)
endsWith(igual pero el valor con el que termina)
includes(igual que indexof pero con true o false)
repeat(repite el n de veces que see indique)


// /*  */
let nombre = "Hola,¿Como estas?, julizn MONTERO";


console.log(nombre.toUpperCase(nombre));
console.log(nombre.replace("julizn MONTERO", "danny campos"));
console.log(nombre.indexOf("estas"));
console.log(nombre.substring(3, 10));
console.log(nombre.substring(10));
console.log(nombre.slice(-3));
console.log(nombre.trim());
console.log(nombre.startsWith("H"))
console.log(nombre.startsWith("C",9))
console.log(nombre.endsWith("O"))
console.log(nombre.startsWith("s",18))
console.log(nombre.includes("C"))
console.log(nombre.repeat(""))
console.log(nombre.substring(0,4).repeat(3))


