// Crear una variable “Age” que contenga un número entero entre 0 y 100 y
// muestre los siguientes mensajes de alerta:
// i. “Bebe” si la edad es menor a 2 años;
// ii. “Niño” si la edad es entre 2 y 12 años;
// iii. “Adolescente” entre 13 y 19 años;
// iv. “Joven” entre 20 y 30 años;
// v. “Adulto” entre 31 y 60 años;
// vi. “Adulto mayor” entre 61 y 75 años;
// vii. “Anciano” si es mayor a 75 años.

let age = 50;

if (age < 2) {
  console.log("Bebe");
} else if (age > 2 && age < 12) {
  console.log("Niño");
} else if (age > 13 && age < 19) {
  console.log("Adolescente");
} else if (age > 20 && age < 30) {
  console.log("Adulto");
} else if (age > 31 && age < 60) {
  console.log("Adulto mayor");
} else if (age > 75) {
  console.log("Anciano");
}
