// Ejemplo de bucle for
// Se utiliza cuando sabemos cuántas veces queremos que se ejecute el código.
let total = 0;
for (let i = 0; i <= 5001; i++) {
  console.log("Iteración número: " + i);
  total += i;
}
console.log("la suma de los numeros anteriores es: ", total);

// Ejemplo de bucle while
// Se ejecuta mientras una condición sea verdadera.
let contador = 0;
while (contador < 11) {
  console.log("Contador: " + contador);
  contador++;
}

// Ejemplo de bucle do...while
// Siempre ejecuta el bloque de código al menos una vez antes de verificar la condición.
let contador1 = 0;
do {
  console.log("Contador: " + contador1);
  contador1++;
} while (contador1 < 5);

// Ejemplo de bucle for...of
// Se usa para recorrer iterables, como arrays.
let numeros = [10, 20, 30];
for (let numero of numeros) {
  console.log("Número: " + numero);
}

// Ejemplo de JavaScript Asincrónico con setTimeout
console.log("Inicio");
setTimeout(() => {
    console.log("Tarea Asincrónica");
}, 2000);
console.log("Fin");

const table = document.getElementById("table")

// Ejemplo de async/await
async function fetchData() {
    let respuesta = await fetch('https://jsonplaceholder.typicode.com/posts');
    let data = await respuesta.json();
    
    for(let valor of data){
    console.log(valor["title"])
    const tablerow = document.createElement("tr")
    const tabletitle = document.createElement("td")
    const tablebody = document.createElement("td")
    tabletitle.textContent = valor.title
    tablebody.textContent = valor.body
    tablerow.appendChild(tabletitle)
    tablerow.appendChild(tablebody)
    table.appendChild(tablerow)
    }
}

fetchData();