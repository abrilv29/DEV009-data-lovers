import { filterCards} from './data.js';
import { filterOrder} from './data.js';
import data from './data/pokemon/pokemon.js';

/* ------------------------------ ESTRUCTURA DEL HTML  -------------------------------------- */
//CREACION DEL HEADER
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

/* ------------------------------ ESTRUCTURA DEL CARDS POKEMON  -------------------------------------- */
//GUARDAMOS LA DATA EN UNA VARIABLE
const allName = data.pokemon; // data pokemon
console.log(allName);

//const filtro = filterCards(allName); // data.js funciones
//CONTENEDOR DONDE SE MUESTRAN LAS CARDS POKEMON
const root = document.getElementById('root');

/*for (let i = 0; i < filtro.length; i++) {// llamas a todos
    const content = document.createElement("div");
    content.classList.add("class", "content-principal");
    content.innerText = data.pokemon[i].name;
    root.appendChild(content);
}*/

const pokemonList = (list) => {
    // let countPokemon = 0;
 
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
         <div class="content-info">
         <p class="name-pokemon">${pokemon.type}</p>
         </div>`
 
         //countPokemon += 1;
         root.appendChild(content);
 
     });
    }
    pokemonList(allName);
/* ------------------------------ ESTRUCTURA DEL SEARCH NAME  -------------------------------------- */
//Buscar los pokemones por nombre usando un input
const contentSearch = document.createElement("div");
contentSearch.classList.add("class", "content-search");
//const searchDiv = bodyPage.firstChild;
bodyPage.insertBefore(contentSearch, headerFirst);
const searchInput = document.createElement("input");
searchInput.type = 'search';
searchInput.placeholder = 'Buscando ...';
contentSearch.appendChild(searchInput);

searchInput.addEventListener('input', () => {
    const resulPokemon = filterCards(allName,searchInput.value);
    if(resulPokemon.length === 0){
        mensajeError(); 
    }else{
        root.innerHTML = ' ';
        //root.appendChild(pokemonList(resulPokemon));
        pokemonList(resulPokemon);
    }
});

//Mensaje de no encontrado

const mensajeError = () => {
    root.innerHTML = '';
    const divError = document.createElement("div");
    divError.classList.add("class", "content-error");
    const parrafo = document.createElement("p");
    parrafo.innerHTML = 'No existe ese pokemon';
    const imgError = document.createElement("img");
    imgError.src = 'psyduck.gif';
    divError.appendChild(parrafo);
    divError.appendChild(imgError);
    root.appendChild(divError);
}



/* ------------------------------ ESTRUCTURA ORDENAR A-Z Y Z-A  -------------------------------------- */

const select = document.createElement("select");
select.id = "pokemonSelect";

const mensajeOrder = document.createElement("option");
mensajeOrder.value = "";
mensajeOrder.text = "order";
select.add(mensajeOrder);

const option1 = document.createElement("option");
option1.value = "A-Z";
option1.text = "A-Z";
select.add(option1);

const option2 = document.createElement("option");
option2.value = "Z-A";
option2.text = "Z-A";
select.add(option2);

const option3 = document.createElement("option");
option3.value = "num";
option3.text = "num";
select.add(option3);
contentSearch.appendChild(select);



select.addEventListener('change', () => {
    /*const orderSelect = select.value;
    console.log(orderSelect);
    root.innerHTML= '';
    pokemonList(filterOrder(allName,orderSelect));*/

    switch (select.value) {
        case 'A-Z':
          root.innerHTML = '';
          pokemonList(filterOrder(allName,'A-Z'));
          break;
        case 'Z-A':
            root.innerHTML = '';
          // eslint-disable-next-line no-case-declarations
          pokemonList(filterOrder(allName,'Z-A'));
          break;
        case 'num':
            root.innerHTML = '';
            pokemonList(filterOrder(allName,'num'));
          break;
        default:
      }

});


/* ------------------------------ ESTRUCTURA EVOLUTION CARAMEL  -------------------------------------- */

const selectCandy = document.createElement("select");
selectCandy.id = "candySelect";
const mensajeCandy = document.createElement("option");
mensajeCandy.value = "";
mensajeCandy.text = "candy evolution";
selectCandy.add(mensajeCandy);

const optionC1 = document.createElement("option");
optionC1 .value = "opcion1";
optionC1 .text = "25";
selectCandy.add(optionC1);

const optionC2 = document.createElement("option");
optionC2 .value = "opcion2";
optionC2.text = "50";
selectCandy.add(optionC2);

const optionC3 = document.createElement("option");
optionC3 .value = "opcion3";
optionC3.text = "100";
selectCandy.add(optionC3);

const optionC4 = document.createElement("option");
optionC4.value = "opcion4";
optionC4.text = "400";
selectCandy.add(optionC4);
contentSearch.appendChild(selectCandy);