// c. Crear una variable llamada “sentence” que tenga un string vacío, luego al array
// del punto a) recorrerlo con un bucle for para ir guardando cada palabra dentro de
// la variable sentence. Al final mostrar una única alerta con la cadena completa.

let palabras = ["Messi", "Paredes", "Julian", "Lautaro", "Macalister"];

let sentence = "";

for (let i = 0; i < palabras.length; i++) {
  sentence += palabras[i] + ' '
}

console.log(sentence)