// Crear una variable de tipo string con al menos 10 caracteres y generar un nuevostring con los primeros 5 caracteres guardando el resultado en una nueva variable (utilizar substring).

let palabra = "Administrar";

if (palabra.length >= 10) {
  var nuevaVariable = palabra.substring(0, 4);
  console.log(nuevaVariable);
}
