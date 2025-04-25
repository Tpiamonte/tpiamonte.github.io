// ==============================
// VARIABLES
// ==============================

let nombre = "Ana";
let nota_mision1 = 100;
let nota_mision2 = 70;
let nota_mision3 = 40;

// ==============================
// FUNCIONES
// ==============================

function saludar(nombre, apellido) {
  console.log("Hola " + nombre + " " + apellido + "!");
}

function sumar(a, b) {
  return a + b;
}

// ==============================
// LLAMADAS A FUNCIONES
// ==============================

saludar("Ana", "perez"); // Imprime: Hola Ana perez!
let resultado = sumar(5, 3);
console.log(resultado); // Imprime: 8

// ==============================
// MANIPULACIÓN DEL DOM
// ==============================

// Selección por ID y clase
const titulo = document.getElementById("miTitulo");
const elementos = document.getElementsByClassName("miClase");

console.log(titulo); // Muestra el elemento con ID 'miTitulo'
console.log(elementos); // Muestra los elementos con clase 'miClase'

// Seleccionar botón por ID
let boton = document.getElementById("miBoton");

// Evento de clic en botón
boton.addEventListener("click", function () {
  alert("¡Botón clickeado!");
});

// Evento de clic en título
titulo.addEventListener("click", function () {
  alert("¡Botón clickeado!");
});

// ==============================
// EVENTOS DEL TECLADO
// ==============================

document.addEventListener("keydown", function (e) {
  console.log(e);
  console.log("Tecla presionada: " + e.key);
});

// ==============================
// EVENTOS DEL RATÓN
// ==============================

//let caja = document.getElementById("miCaja");

//caja.addEventListener("mouseover", function () {
//caja.style.backgroundColor = "blue";
//});

//caja.addEventListener("mouseout", function () {
//caja.style.backgroundColor = "red";
//});

// ==============================
// EVENTOS DE FORMULARIO
// ==============================

let formulario = document.getElementById("miFormulario");

formulario.addEventListener("submit", function (event) {
  event.preventDefault(); // Evita el envío del formulario
  alert("Formulario enviado");
});

// ==============================
// CAMBIAR TEXTO DE UN ELEMENTO
// ==============================

let tituloOriginal = titulo.textContent;
const titulos = document.getElementById("miTitulo");

let botonCambio = document.getElementById("botonCambio");
let botonRegresarCambio = document.getElementById("botonRegresarCambio");

botonCambio.addEventListener("click", function () {
  titulos.textContent = "Nuevo Título Modificado";
});

const botondiv = document.getElementById("nuevodiv");

botondiv.addEventListener("click", function () {
  const nuevoDiv = document.createElement("div");
  nuevoDiv.classList.add("divcreado");
  nuevoDiv.textContent = "Soy un nuevo Div";
  miCaja.appendChild(nuevoDiv);
});

botonRegresarCambio.addEventListener("click", function () {
  titulos.textContent = tituloOriginal;
  miCaja.style.backgroundColor = null;
  const eliminardiv = document.querySelectorAll(".divcreado");
  eliminardiv.forEach((div) => {
    div.remove();
  });
});

//==============================
// MANIPULACION DE ATRIBUTOS Y ESTILOS
//==============================

let ColorAzul = document.getElementById("ColorAzul");
let ColorRojo = document.getElementById("ColorRojo");

// Cambiar estilos
const miCaja = document.querySelector("#miCaja");

ColorAzul.addEventListener("click", function () {
  miCaja.style.backgroundColor = "blue";
});

ColorRojo.addEventListener("click", function () {
  miCaja.style.backgroundColor = "red";
});

// Cambiar un atributo
//const enlace = document.querySelector("a");
//enlace.setAttribute('href', 'https://www.youtube.com');
