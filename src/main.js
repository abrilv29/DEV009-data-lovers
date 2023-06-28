import { filterCards } from './data.js';
import pokemon from './data/pokemon/pokemon.js';
import data from './data/pokemon/pokemon.js';

//Creacion del  HEADER
//Variable donde se va a ir modificando la estructura de nuestra pagina
const bodyPage = document.querySelector('body');
//ESTRUCTURA 
//1. Insertar Encabezado al Body
//1.1 Variable que crea el elemento header
const headerPokemon = document.createElement('header');
headerPokemon.classList.add("class", "content-header")
//1.2 Varible que nos ayuda a insertar el Encabezado al inicio del Body
const headerFirst = bodyPage.firstChild;
bodyPage.insertBefore(headerPokemon, headerFirst);

//Hacer un for para que se repita varias veces el div
//Crear un elemento div que contenga la imagen el número y nombre del pokemon
const allName = data.pokemon; // data pokemon 
//const filtro = filterCards(allName); // data.js funciones
const root = document.getElementById('root');

/*for (let i = 0; i < filtro.length; i++) {// llamas a todos
    const content = document.createElement("div");
    content.classList.add("class", "content-principal");
    content.innerText = data.pokemon[i].name;
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
    /*const divCount = document.createElement("div");
    divCount.classList.add("class", "content-count");
    divCount.innerHTML = "Pokemones encontrados:" + " " +countPokemon;
    //"resultado:" + countPokemon + " " + "pokemones";
    bodyPage.insertBefore(divCount, root);
    return root;*/
}
pokemonList(allName);


//Buscar los pokemones por nombre usando un input
const contentSearch = document.createElement("div");
contentSearch.classList.add("class", "content-search");
//const searchDiv = bodyPage.firstChild;
bodyPage.insertBefore(contentSearch, headerFirst);
const searchInput = document.createElement("input");
searchInput.type = 'search';
searchInput.placeholder = 'Buscando ...';
contentSearch.appendChild(searchInput);
const searchBtn = document.createElement("button");
searchBtn.id = 'btn-buscar';
searchBtn.innerHTML = 'reset';
contentSearch.appendChild(searchBtn);

searchInput.addEventListener('input', () => {
    const pokemonSearch = filterCards(allName, searchInput.value);
    if (pokemonSearch.lenght === 0) {
        mensajeError();
        
    }
    else {
        root.innerHTML = '';
        pokemonList(pokemonSearch);
       
    }
});
searchBtn.addEventListener('click', () => {
    
    root.innerHTML = '';
    searchInput.value = '';
});


//Mensaje de no encontrado

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

