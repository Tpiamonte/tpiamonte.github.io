/* let nombre = "carlos";

function prueba() {
  let nombre = "juan";
  return nombre;
}

console.log(nombre);
console.log(prueba); */

let texto = "goku";
let saludo = "Hola, mundo";
let nuevoSaludo = saludo.replace("mundo", "amigo");
let fraseConEspacios = "  Hola, JavaScript   ";
let frase = "Bienvenido a html, css y javascript";
let subcadena = frase.slice(12, 34);
let lista = "manzana,banana,uva";
let arrayFrutas = frase.split(",");

// Mayúsculas y minúsculas
console.log(texto.toUpperCase()); // "GOKU"
console.log(texto.toLowerCase()); // "goku"

// Reemplazo de texto
console.log(nuevoSaludo); // "Hola, amigo"

// Eliminación de espacios
console.log(fraseConEspacios.trim()); // "Hola, JavaScript

// Buscar una subcadena
console.log(frase.includes("Bienvenido a html, css y javascript")); // true

// Obtener una parte del string
console.log(subcadena); // "html, css y javascript"

// Dividir un string en un array
console.log(arrayFrutas); // ["manzana", "banana", "uva"]

