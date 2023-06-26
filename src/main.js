import { filterCards } from './data.js';
import data from './data/pokemon/pokemon.js';

console.log(filterCards);
console.log(data);

//Variable donde se va a ir modificando la estructura de nuestra pagina
const bodyPage = document.querySelector('body');
//ESTRUCTURA 
//1. Insertar Encabezado al Body
//1.1 Variable que crea el elemento header
const headerPokemon = document.createElement('div');
//1.2 Varible que nos ayuda a insertar el Encabezado al inicio del Body
const headerFirst = bodyPage.firstChild;
  bodyPage.insertBefore(headerPokemon, headerFirst);
//1.3 Variable que crea un elemento h1
const fondoHeader = document.createElement('h1');
  fondoHeader.textContent = '.';
//1.4 Asignamos una clase al h1
  fondoHeader.classList.add('fondo');
//1.5 Asignamos el h1 como hijo de nuestro header
  headerPokemon.appendChild(fondoHeader);

//2. Insertar input al Body
//2.1 Input de busqueda
const inputSearch = document.createElement('input');
inputSearch.type = 'search';
inputSearch.setAttribute('id', 'input-search');
//2.2 ponerlo al inicio del body

bodyPage.appendChild(inputSearch);





const root = document.getElementById('root');




//Busqueda por nombre
const allPokemon = data.pokemon;
//root.innerHTML = `<h1>${data.pokemon[0].name}</h1>`; //cada uno

for(let i=0; i < allPokemon.length; i++){// llamas a todos
    const titulo = document.createElement('h1');
    titulo.innerText = data.pokemon[i].name;
    root.appendChild(titulo);
}


/*Buscar por número
const numPokemon = data.pokemon;
for(let e=0; e < numPokemon.length; e++){
    const num = document.createElement('p');
    num.innerText = data.pokemon[e].num;
    root.appendChild(num);
}*/

