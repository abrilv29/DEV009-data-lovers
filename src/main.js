import {getPokemonByType} from './data.js';
import {getPokemonByName} from './data.js';
import {getPokemonByResistant} from './data.js';
import {getPokemonByWeaknesses} from './data.js';
//import pokemon from './data/pokemon/pokemon.js';
import data from './data/pokemon/pokemon.js';

//console.log(filterCards);
//console.log(data);

//variable que trae todos los pokemones por nombre
const allPokemon = data.pokemon;

//Agregar un Div de encabezado
const bodyPage = document.querySelector("body");
const headerFilters = document.createElement("div");
headerFilters.setAttribute("id", "encabezado");
const headerFirst = bodyPage.firstChild;
bodyPage.insertBefore(headerFilters, headerFirst);
//div banner 
const divBanner = document.createElement("div");
divBanner.id = "banner";
headerFilters.appendChild(divBanner);
//crear un div para el input search
const divInputSearch = document.createElement("div");
divInputSearch.setAttribute("id", "filtros");
headerFilters.appendChild(divInputSearch);
//input search en divInputSearch
const inputSearch = document.createElement("input");
inputSearch.type = "search";
inputSearch.id = "input-search";

inputSearch.addEventListener('input', () => {
  const pokemonSearch = getPokemonByName(allPokemon, inputSearch.value);
  if (pokemonSearch.lenght === 0) {
    mensajeError();
        
  }
  else {
    root.innerHTML = '';
    pokemonList(pokemonSearch);
       
  }
});

divInputSearch.appendChild(inputSearch);



//Despliegue de tipos de Pokemon
const arrayOfTypes = ["grass", "poison", "normal", "water", "electric", "fighting", "fairy", "ice", "flying", "psychic", "fire", "steel", "bug", "rock", "dragon", "dark", "ground", "ghost"];
//console.log(arrayOfTypes);
//div para el filtro de tipos de pokemon
const divPokemonType = document.createElement("aside");
divPokemonType.id = "DivPokemonTypes";
headerFilters.appendChild(divPokemonType);
const pokemonFilterType = document.createElement("fieldset");
const labelPokemonFilterType =document.createElement("legend");
labelPokemonFilterType.innerHTML = "Búsqueda por tipo de Pokémon: "
pokemonFilterType.appendChild(labelPokemonFilterType);
divPokemonType.appendChild(pokemonFilterType);

for (let i = 0; i < arrayOfTypes.length; i++) {
  const divPokemonType = document.createElement("li");
  divPokemonType.id = arrayOfTypes [i];
    
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.name = "pokemonType";//con este nombre se agrupan todos los checkbox para consultarlos con una sola instruccion (document.getElementsByName('pokemonType'))
  checkbox.value = arrayOfTypes[i];
  checkbox.id = arrayOfTypes [i];

  const labelPokemonType = document.createElement("label");
  labelPokemonType.id = "labelType";
  labelPokemonType.htmlFor = arrayOfTypes[i];
  labelPokemonType.appendChild(document.createTextNode(arrayOfTypes[i]));

  divPokemonType.appendChild(checkbox);
  divPokemonType.appendChild(labelPokemonType);
  pokemonFilterType.appendChild(divPokemonType);
}

//boton de busqueda
const searchButton = document.createElement("button");
searchButton.id = "boton-filtro";
searchButton.innerHTML = "Search";
//se agrega evento al boton
searchButton.addEventListener("click", function(){
    
  const root = document.getElementById('root');
  let checkedValue = null; 
  //trae los 18 tipos del checkbox del arreglo de tipos de pokemon
  const inputElements = document.getElementsByName('pokemonType');
  //se inicializa un arreglo que tendra los tipos de pokemon seleccionados
  const arrayOfSelectedPokemonType  = new Array();
  //limpia la zona de los pokemones con un string vacio
  root.innerHTML = '';
  //este for llena el arreglo arrayOfFilteredPokemonType con los tipos de pokemon seleccionados en la busqueda
  for(let i=0; i < inputElements.length ; ++i){
    //este if es para revisar que elementos de inputElements estan seleccionados con una palomita
    if(inputElements[i].checked){
      checkedValue = inputElements[i].value;
      arrayOfSelectedPokemonType.push(checkedValue);
    }
  }
  //alert(inputElements.length);
  //alert(arrayOfFilteredPokemonType.length);
  //busca los pokemones que cumplan con los tipos seleccionados (o filtrados) en los checkbox
  //Inicializamos la funcion que importamos, usando como param1 = arrayOfSelectedPokemonType y como param2 = allPokemon
  const filteredDataByType = getPokemonByType(arrayOfSelectedPokemonType,allPokemon);
  //reutilizamos la funcion pokemonList ahora con el resultado de la funcion anterior
  pokemonList(filteredDataByType);
    
});
divPokemonType.appendChild(searchButton);

//boton debilidad contra
const weaknessesButton = document.createElement("button");
weaknessesButton.id = "filtro-debilidad";
weaknessesButton.innerHTML = "Weaknesses";
//se agrega evento al boton
weaknessesButton.addEventListener("click", function(){
    
  const root = document.getElementById('root');
  let checkedValue = null; 
  //trae los 18 tipos del checkbox del arreglo de tipos de pokemon
  const inputElements = document.getElementsByName('pokemonType');
  //se inicializa un arreglo que tendra los tipos de pokemon seleccionados
  const arrayOfSelectedPokemonType  = new Array();
  //limpia la zona de los pokemones con un string vacio
  root.innerHTML = '';
  //este for llena el arreglo arrayOfFilteredPokemonType con los tipos de pokemon seleccionados en la busqueda
  for(let i=0; i < inputElements.length ; ++i){
    //este if es para revisar que elementos de inputElements estan seleccionados con una palomita
    if(inputElements[i].checked){
      checkedValue = inputElements[i].value;
      arrayOfSelectedPokemonType.push(checkedValue);
    }
  }
  //alert(inputElements.length);
  //alert(arrayOfFilteredPokemonType.length);
  //busca los pokemones que cumplan con los tipos seleccionados (o filtrados) en los checkbox
  //Inicializamos la funcion que importamos, usando como param1 = arrayOfSelectedPokemonType y como param2 = allPokemon
  const filteredDataByWeaknesses = getPokemonByWeaknesses(arrayOfSelectedPokemonType,allPokemon);
  //reutilizamos la funcion pokemonList ahora con el resultado de la funcion anterior
  pokemonList(filteredDataByWeaknesses);
    
});
//se ubica donde queremos que este el boton
divPokemonType.appendChild(weaknessesButton);


//boton resistencia contra
const resistantButton = document.createElement("button");
resistantButton.id = "filtro-resistencia";
resistantButton.innerHTML = "Resistant";
//se agrega evento al boton
resistantButton.addEventListener("click", function(){
    
  const root = document.getElementById('root');
  let checkedValue = null; 
  //trae los 18 tipos del checkbox del arreglo de tipos de pokemon
  const inputElements = document.getElementsByName('pokemonType');
  //se inicializa un arreglo que tendra los tipos de pokemon seleccionados
  const arrayOfSelectedPokemonType  = new Array();
  //limpia la zona de los pokemones con un string vacio
  root.innerHTML = '';
  //este for llena el arreglo arrayOfFilteredPokemonType con los tipos de pokemon seleccionados en la busqueda
  for(let i=0; i < inputElements.length ; ++i){
    //este if es para revisar que elementos de inputElements estan seleccionados con una palomita
    if(inputElements[i].checked){
      checkedValue = inputElements[i].value;
      arrayOfSelectedPokemonType.push(checkedValue);
    }
  }
  //alert(inputElements.length);
  //alert(arrayOfFilteredPokemonType.length);
  //busca los pokemones que cumplan con los tipos seleccionados (o filtrados) en los checkbox
  //Inicializamos la funcion que importamos, usando como param1 = arrayOfSelectedPokemonType y como param2 = allPokemon
  const filteredDataByResistance = getPokemonByResistant(arrayOfSelectedPokemonType,allPokemon);
  //reutilizamos la funcion pokemonList ahora con el resultado de la funcion anterior
  pokemonList(filteredDataByResistance);
    
});
//se ubica donde queremos que este el boton
divPokemonType.appendChild(resistantButton);

//tarjetas Pokemon
const root = document.getElementById('root');

const pokemonList = (list) => {
  //let countPokemon =0;
  //console.log(countPokemon);
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
    //countPokemon += 1;
    root.appendChild(content);
  });
}
pokemonList(allPokemon);


const mensajeError = () => {
  root.innerHTML = '';
  const divError = document.createElement('div');
  divError.classList.add("class", "content-error");
  const parrafo = document.createElement('p');
  parrafo.innerHTML = 'No existe ese pokemon';
  const imgError = document.createElement('img');
  imgError.src = 'psyduck.gif';
  divError.appendChild(parrafo);
  divError.appendChild(imgError);
  root.appendChild(divError);
}
