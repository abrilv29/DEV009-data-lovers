import { filterCards } from './data.js';
//import pokemon from './data/pokemon/pokemon.js';
import data from './data/pokemon/pokemon.js';

//console.log(filterCards);
//console.log(data);

//variable que trae todos los pokemones por nombre
const allPokemon = data.pokemon;

//Agregar un Div donde van a ir los inputs
const bodyPage = document.querySelector("body");
const headerFilters = document.createElement("div");
headerFilters.setAttribute("id", "filtros-Pokemon");
const headerFirst = bodyPage.firstChild;
bodyPage.insertBefore(headerFilters, headerFirst);

//input search
const inputSearch = document.createElement("input");
inputSearch.type = "search";
inputSearch.id = "input-search";
headerFilters.appendChild(inputSearch);

/*select tipos de pokemones
const pokemonType = (types) => {
    let countTypes = 0;
    types.forEach(pokemon => {
        const selectType = document.createElement("select");
        selectType.id = "select-types";
        selectType.add(pokemon.type);
        countTypes += 1;
        headerFilters.appendChild(selectType);
    })
}
pokemonType(all)*/
//tarjetas Pokemon
const root = document.getElementById('root');

const pokemonList = (list) => {
    let countPokemon =0;
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
        </div>
        <div class="content-type">${pokemon.type}</p>
        </div>`
        countPokemon += 1;
        root.appendChild(content);
    });
}
pokemonList(allPokemon);
