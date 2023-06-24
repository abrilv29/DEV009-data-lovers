import { filterCards } from './data.js';
import data from './data/pokemon/pokemon.js';

console.log(filterCards);
console.log(data);
//Busqueda por nombre
const root = document.getElementById('root');
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

