import { filterCards } from './data.js';
import pokemon from './data/pokemon/pokemon.js';
import data from './data/pokemon/pokemon.js';


//console.log(data);
/*Busqueda por nombre
const root = document.getElementById('root');
const allPokemon = data.pokemon;
//root.innerHTML = `<h1>${data.pokemon[0].name}</h1>`; //cada uno

for(let i=0; i < allPokemon.length; i++){// llamas a todos
    const titulo = document.createElement('h1');
    titulo.innerText = data.pokemon[i].name;
    root.appendChild(titulo);
}


/*Buscar la data por número de pokemon
const numPokemon = data.pokemon;
for(let e=0; e < numPokemon.length; e++){
    const num = document.createElement('p');
    num.innerText = data.pokemon[e].num;
    root.appendChild(num);
}*/


/*Buscar la data por el nombre(name) del pokemon
const allName = data.pokemon; // data pokemon 
const filtro = filterCards(allName); // data.js funciones
const root = document.getElementById('root');//contenedor principal
for(let i=0; i < filtro.length; i++){// llamas a todos
    const titulo = document.createElement('h1');//crear etiqueta h1
    titulo.innerText = data.pokemon[i].name;
    root.appendChild(titulo);
}*/


/*Hacer un for para que se repita varias veces el div
//Crear un elemento div que contenga la imagen el número y nombre del pokemon
const root = document.getElementById('root');
const content = document.createElement("div");
content.classList.add("class", "content-principal");
content.textContent = "Elemento 1";
//Agregar al documento
root.appendChild(content);
*/

//Hacer un for para que se repita varias veces el div
//Crear un elemento div que contenga la imagen el número y nombre del pokemon
const allName = data.pokemon; // data pokemon 
//const filtro = filterCards(allName); // data.js funciones
const root = document.getElementById('root');

/*for (let i = 0; i < filtro.length; i++) {// llamas a todos
    const content = document.createElement("div");
    content.classList.add("class", "content-principal");
    content.innerText = data.pokemon[i].name;
    root.appendChild(content);
}*/

//Mostrar todas las tarjetas pokemon 
const pokemonList = (list) => {
    let countPokemon = 0;

    list.forEach(pokemon => {
        const content = document.createElement("div");
        content.classList.add("class", "content-principal");
        content.innerHTML = `
        <div class="content-img">
        <p class="num-pokemon">${pokemon.num}</p>
        <img src="${pokemon.img}">
        </div>
        <div class="content-info">
        <p class="name-pokemon">${pokemon.name}</p>
        </div>`

        countPokemon += 1;
        root.appendChild(content);
    });
}
pokemonList(allName);