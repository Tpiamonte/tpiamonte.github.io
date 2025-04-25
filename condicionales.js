// operador ternario
// solamente para realizar una sola comparacion, o es verdadero o es falso
// let edad = 18;
// let mensaje = (edad >= 18) ? "Eres mayor de edad" : "Eres menor de edad";
// console.log(mensaje);

// variables

let container = document.getElementById("container");
let button1 = document.getElementById("button1");

// funciones

const results = document.getElementById("results");
const entry = document.getElementById("entry");
("textResults");
function send() {
  let age = entry.value;
  const textResults = document.getElementById("textResults");
  if (age == 1) {
    textResults.textContent = `Tienes solamente ${age} año, como puedes escribir?`;
  } else if (age >= 18 && age <= 60) {
    textResults.textContent = `Eres mayor de edad ya que tienes ${age}`;
  } else if (age >= 60 && age <= 99) {
    textResults.textContent = `Eres de la tercera edad ya que tienes ${age}`;
  } else if (age >= 100) {
    textResults.textContent = `Eres una leyenda ya que tienes ${age}`;
  } else {
    textResults.textContent = `Eres menor de edad ya que tienes ${age}`;
  }
}
const num = document.getElementById("num")

    
