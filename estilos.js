// Seleccionar el elemento
//let caja = document.getElementById("miCaja");

// Agregar una clase
//caja.classList.add("highlight");

// Eliminar una clase
//caja.classList.remove("highlight");
// Alternar una clase (si está, la quita; si no está, la añade)
//caja.classList.toggle("highlight");

//usar la variable creada y crear su evento
//boton1.addEventListener("click", () => caja.classList.add("highlight"));

/* Variables */

let caja = document.getElementById("miCaja");
let caja2 = document.getElementById("miCaja2");
let boton1 = document.getElementById("boton1");
let boton2 = document.getElementById("boton2");
let boton3 = document.getElementById("boton3");
let boton4 = document.getElementById("boton4");
let boton5 = document.getElementById("boton5");
/* let numero = 42;
let texto = "Hola, mundo";
let esVerdad = true; */



/* Funciones */
const agregar = () => caja.classList.add("highlight");
const eliminar = () => caja.classList.remove("highlight");
const cambiar = () => caja.classList.toggle("highlight");
const ocultar = () => (caja.style.display = "none");
const cambiartexto = () => {
  if (caja.style.display === "block" && caja2.style.display === "none") {
    caja.style.display = "none";
    caja2.style.display = "block";
  } else {
    caja.style.display = "block";
    caja2.style.display = "none";
  }
};
