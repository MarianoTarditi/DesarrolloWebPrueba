// b. Al array anterior convertir la primera letra de cada palabra en mayúscula y
// mostrar una alerta por cada palabra modificada.

let palabras = ["Messi", "Paredes", "Julian", "Lautaro", "Macalister"];


for (let i = 0; i < palabras.length; i++) {
  let palabra = palabras[i];
  let palabraCapitalizada = palabra.charAt(0).toUpperCase() + palabra.slice(1);
  console.log(palabraCapitalizada);
}
