import {getPokemonByType} from './data.js';
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

//Despliegue de tipos de Pokemon
 const arrayOfTypes = ["grass", "poison", "normal", "water", "electric", "fighting", "fairy", "ice", "flying", "psychic", "fire", "steel", "bug", "rock", "dragon", "dark", "ground", "ghost"];
 console.log(arrayOfTypes);
//div para el filtro de tipos de pokemon
const pokemonFilterType = document.createElement("fieldset");
const labelPokemonFilterType =document.createElement("legend");
labelPokemonFilterType.innerHTML = "Búsqueda por tipo de Pokémon: "
pokemonFilterType.appendChild(labelPokemonFilterType);
headerFilters.appendChild(pokemonFilterType);

for (let i = 0; i < arrayOfTypes.length; i++) {
    let divPokemonType = document.createElement("div");
    
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.name = "pokemonType";
    checkbox.value = arrayOfTypes[i];
    checkbox.id = arrayOfTypes [i];

    let labelPokemonType = document.createElement("label");
    labelPokemonType.htmlFor = arrayOfTypes[i];
    labelPokemonType.appendChild(document.createTextNode(arrayOfTypes[i]));

    divPokemonType.appendChild(checkbox);
    divPokemonType.appendChild(labelPokemonType);
    pokemonFilterType.appendChild(divPokemonType);
}

//boton de busqueda
const searchButton = document.createElement("button");
searchButton.id = "boton-filtro";
searchButton.innerHTML = "Buscar: ";
//se agrega evento al boton
searchButton.addEventListener("click", function(){
    
    const root = document.getElementById('root');
    let checkedValue = null; 
    //trae los 19 tipos del arreglo de tipos de pokemon
    const inputElements = document.getElementsByName('pokemonType');
    //se inicializa un arreglo que tendra los tipos de pokemon seleccionados
    let arrayOfFilteredPokemonType  = new Array();
 //limpia la zona de los pokemones con un string vacio
    root.innerHTML = '';
    //este for llena el arreglo arrayOfFilteredPokemonType con los tipos de pokemon seleccionados en la busqueda
    for(let i=0; i < inputElements.length ; ++i){
        if(inputElements[i].checked){
             checkedValue = inputElements[i].value;
             arrayOfFilteredPokemonType.push(checkedValue);
          }
    }
    //alert(inputElements.length);
    //alert(arrayOfFilteredPokemonType.length);
    
    let filteredDataByType = getPokemonByType(arrayOfFilteredPokemonType,allPokemon);
    pokemonList(filteredDataByType);
    
    });
headerFilters.appendChild(searchButton);



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
