import { example } from './data.js';
// import data from './data/lol/lol.js';
//console.log(example, data);
import data from './data/pokemon/pokemon.js';
console.log(data);
//Paso1. Crear el elemento de encabezado
const header = document.createElement('header');
//Agregar texto a la etiqueta
header.textContent = 'Este es un encabezado creado con JavaScript';
//Agregar lo anterior al DOM
document.body.appendChild(header);
//Asignar classs
header.classList.add('encabezado');
console.log(header.classList);
