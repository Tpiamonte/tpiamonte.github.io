const inp_task = document.getElementById("task");
const inp_date = document.getElementById("date");
const button_save = document.getElementById("save");
const list_tasks = document.getElementById("tasks");
let list_of_tasks = [];

function load_task() {
  list_of_tasks = JSON.parse(localStorage.getItem(`tasks`));
  for (element of list_of_tasks) {
    let task = element.task;
    let date = element.date;
    let new_div = document.createElement("div");
    new_div.textContent = task + " | " + date;
    list_tasks.appendChild(new_div);
  }
}

function save_task() {
  let task = inp_task.value;
  let date = inp_date.value;
  let object_task = { "task": task, "date": date };
  list_of_tasks.push(object_task);
  localStorage.setItem("tasks", JSON.stringify(list_of_tasks));
  let new_div = document.createElement("div");
  new_div.textContent = task + " | " + date;
  list_tasks.appendChild(new_div); // adjuntar elemento nuevo
}

button_save.addEventListener("click", save_task);

// Guardar un dato
//localStorage.setItem("nombre", "Juan");

// Recuperar un dato
//let nombre = localStorage.getItem("nombre");
//console.log(nombre); // Muestra "Juan"

// Eliminar un solo elemento
//localStorage.removeItem('nombre');

// Limpiar todo el almacenamiento
//localStorage.clear();

// Convertir a JSON para almacenar objetos
//let usuario = {nombre: "Juan", edad: 30};
//localStorage.setItem('usuario', JSON.stringify(usuario));

// Convertir de JSON al recuperar
//let usuarioRecuperado = JSON.parse(localStorage.getItem('usuario'));
//console.log(usuarioRecuperado.nombre)
