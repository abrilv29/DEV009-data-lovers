import {
  filterOrder,
  filterCards,
  getPokemonByType,
  getPokemonByResistant,
  getPokemonByWeaknesses
} from './data.js';
import data from './data/pokemon/pokemon.js';
/* ------------------------------ ESTRUCTURA DEL HTML  -------------------------------------- */
//CREACION DEL HEADER
//Variable donde se va a ir modificando la estructura de nuestra pagina
const bodyPage = document.querySelector('body');
//ESTRUCTURA 
//1. Insertar Encabezado al Body
//1.1 Variable que crea el elemento header
const headerPokemon = document.createElement('header');
headerPokemon.classList.add("content-header");
const imgElement = document.createElement('img');
imgElement.src = 'img/Banner.png';
imgElement.alt = 'Banner pokemon';
headerPokemon.appendChild(imgElement);
//1.2 Varible que nos ayuda a insertar el Encabezado al inicio del Body
const headerFirst = bodyPage.firstChild;
bodyPage.insertBefore(headerPokemon, headerFirst);

/* ------------------------------ ESTRUCTURA DEL CARDS POKEMON  -------------------------------------- */
//GUARDAMOS LA DATA EN UNA VARIABLE
const allName = data.pokemon; // data pokemon
//console.log(allName);

//const filtro = filterCards(allName); // data.js funciones

//CONTENEDOR DONDE SE MUESTRAN LAS CARDS POKEMON
const root = document.getElementById('root');

//contenedor de la ventana Modal
const contentModal = document.createElement('section');
contentModal.classList.add('content-modal');


//Iconos por tipo de pokemon
const TypePokemon = (arrayType) => {
  let imgEachPokemon = '';
  arrayType.forEach((typeElement) => {
    imgEachPokemon += `<img src="img/iconos/${typeElement}.png" alt=" type pokemon"/>`;
  });
  return imgEachPokemon;
};


// function para crear las cards Pokemon
const pokemonList = (list) => {
  // let countPokemon = 0;

  list.forEach(pokemon => {
    const content = document.createElement("div");
    content.classList.add("content-principal");
    content.innerHTML = `
         <div class="container-cards ${pokemon.type[0]} content-card">
         <p class="num-pokemon">${pokemon.num}</p>
         <img src="${pokemon.img}">
         <div class="content-info">
         <p class="name-pokemon">${pokemon.name}</p>
         <div class="type-pokemon">${TypePokemon(pokemon.type)}</div>
         </div>
         </div>`;
    content.addEventListener('click', () => {
      const viewModal = showModal(pokemon);
      viewModal.classList.add('modal--show');
      content.appendChild(contentModal);
    });

    //countPokemon += 1;
    root.appendChild(content);

  });
};
pokemonList(allName);


const showModal = (dataPoke) => {

  const sectionModal = document.createElement('div');
  sectionModal.classList.add('modal');
  console.log("hola");
  sectionModal.innerHTML = `
                  <div class="modal__container ${dataPoke.type[0]}">
                  <img src="img/cancelar.png" class="modal__close">
                  <p class="modal__num">#${dataPoke.num}</p>
                  <img src="${dataPoke.img}" class="modal__img">
                  <div class="modal__header">
                  <p class="modal__title">${dataPoke.name}</p>
                  <p class="modal__paragraph">${dataPoke.about} </p>
                  </div>
                  <div class="modal__body">
                  <p class="modal__type"><img src="img/huevo.png"> Egg: ${dataPoke.egg} </p>
                  <p class="modal__height"><img src="img/cinta-metrica.png"> Height:${dataPoke.size.height} </p>
                  <p class="modal__weight"><img src="img/bar.png"> Weight:${dataPoke.size.weight} </p>
                  <p class="modal__stast"><img src="img/pokecoin.png"> MAX-CP:${dataPoke.stats['max-cp']} </p>
                  <p class="modal__stast"><img src="img/puno.png"> MAX-HP:${dataPoke.stats['max-hp']} </p>
                  </div>
                  <p class="modal__evolu">Evolution: </p>
                  <div class="modal__evolutions"></div>
                </div>`;
  contentModal.appendChild(sectionModal);

  sectionModal.style.display = 'block';

  const modalClose = document.querySelector('.modal__close');
  window.addEventListener('click', (evento) => {
    if (evento.target === modalClose) {
      sectionModal.classList.remove('modal--show');
      contentModal.innerHTML = '';
    }
  });
  // Evoluciones
  // Mostrar información de evolución en la ventana modal
  const evolutionsContainer = sectionModal.querySelector('.modal__evolutions');
  const evolution = dataPoke.evolution;

  if (evolution['next-evolution']) {
    evolution['next-evolution'].forEach(evo => {
      evolutionsContainer.innerHTML += `
      <div class="next-evolution">
      <img src="https://www.serebii.net/pokemongo/pokemon/${evo.num}.png">
      <p class="titulo">Next Evolution:</p>
      <p>Num: ${evo.num}</p>
      <p>Name: ${evo.name}</p>
      <p>Candy Cost: ${evo["candy-cost"]}</p>
      </div>`;

      if (evo['next-evolution']) {
        evo['next-evolution'].forEach(ev => {
          evolutionsContainer.innerHTML += `
          <div class="next-evolution">
          <img src="https://www.serebii.net/pokemongo/pokemon/${ev.num}.png">
          <p class="titulo">Next Evolution:</p>
          <p>Num: ${evo.num}</p>
          <p>Name: ${evo.name}</p>
          <p>Candy Cost: ${ev["candy-cost"]}</p>
          </div>`;

        });//forEach
      }

    });//forEach

  }
  if (evolution['prev-evolution']) {
    evolution['prev-evolution'].forEach(e => {
      evolutionsContainer.innerHTML += `
      <div class="prev-evolution">
      <img src="https://www.serebii.net/pokemongo/pokemon/${e.num}.png">
      <p class="titulo">Prev Evolution:</p>
      <p>Num: ${e.num}</p>
      <p>Name: ${e.name}</p>
      <p>Candy Cost: ${e["candy-cost"]}</p>
      </div>`;

      if (e['prev-evolution']) {
        e['prev-evolution'].forEach(evol => {
          evolutionsContainer.innerHTML += `
          <div class="prev-evolution">
          <img src="https://www.serebii.net/pokemongo/pokemon/${evol.num}.png">
          <p class="titulo">Prev Evolution:</p>
          <p>Num: ${evol.num}</p>
          <p>Name: ${evol.name}</p>
          <p>Candy Cost: ${evol["candy-cost"]}</p>
          </div>`;

        });//forEach
      }

    });//forEach



  }



  return sectionModal;
};

/* ------------------------------ ESTRUCTURA DEL SEARCH NAME  -------------------------------------- */
//Buscar los pokemones por nombre usando un input
const contentSearch = document.createElement("div");
contentSearch.classList.add("class", "content-search");
//const searchDiv = bodyPage.firstChild;
bodyPage.insertBefore(contentSearch, headerFirst);
const inputSearch = document.createElement("div");
inputSearch.classList.add("class", "content-input");

const searchInput = document.createElement("input");
searchInput.type = 'search';
searchInput.id = "searchId";
searchInput.placeholder = 'Ingresa el nombre del pokemon ...';
const inputImg = document.createElement("div");
inputImg.classList.add("class", "input-img");
const imgball = document.createElement('img');
imgball.src = 'img/pokebolaSearch.png';
imgball.alt = 'icono pokebola';

inputImg.appendChild(imgball);
inputSearch.appendChild(searchInput);
inputSearch.appendChild(inputImg);
contentSearch.appendChild(inputSearch);


searchInput.addEventListener('input', () => {
  const resulPokemon = filterCards(allName, searchInput.value);
  //console.log(resulPokemon);
  if (resulPokemon.length === 0) {
    mensajeError();
  } else {
    root.innerHTML = ' ';
    //root.appendChild(pokemonList(resulPokemon));
    pokemonList(resulPokemon);
  }
});

//Mensaje de no encontrado

const mensajeError = () => {
  root.innerHTML = '';
  const divError = document.createElement("div");
  divError.classList.add("content-error");
  const parrafo = document.createElement("p");
  parrafo.innerHTML = 'No found pokemon !!!';
  const imgError = document.createElement("img");
  imgError.src = 'img/psyduck.gif';
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
option1.id = "option1";
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
    pokemonList(filterOrder(allName, 'A-Z'));
    break;
  case 'Z-A':
    root.innerHTML = '';
    pokemonList(filterOrder(allName, 'Z-A'));
    break;
  case 'num':
    root.innerHTML = '';
    pokemonList(filterOrder(allName, 'num'));
    break;
  default:


  }

});
/*-----------------ESTRUCTURA FILTRO POKEMON BY TYPE--------------------------*/

const arrayOfTypes = ["grass", "poison", "normal", "water", "electric", "fighting", "fairy", "ice", "flying", "psychic", "fire", "steel", "bug", "rock", "dragon", "dark", "ground", "ghost"];
const divPokemonType = document.createElement("div");
divPokemonType.id = "divPokemonType";
bodyPage.insertBefore(divPokemonType, contentSearch);

const pokemonFilterType = document.createElement("fieldset");
const labelPokemonFilterType = document.createElement("legend");
labelPokemonFilterType.innerHTML = "Filters By Type";
pokemonFilterType.appendChild(labelPokemonFilterType);
divPokemonType.appendChild(pokemonFilterType);

for (let i = 0; i < arrayOfTypes.length; i++) {
  const divPokemonType = document.createElement("li");
  divPokemonType.id = arrayOfTypes[i];

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.name = "pokemonType";//con este nombre se agrupan todos los checkbox para consultarlos con una sola instruccion (document.getElementsByName('pokemonType'))
  checkbox.value = arrayOfTypes[i];
  checkbox.id = arrayOfTypes[i];

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
searchButton.addEventListener("click", function () {

  const root = document.getElementById('root');
  let checkedValue = null;
  //trae los 18 tipos del checkbox del arreglo de tipos de pokemon
  const inputElements = document.getElementsByName('pokemonType');
  //se inicializa un arreglo que tendra los tipos de pokemon seleccionados
  const arrayOfSelectedPokemonType = new Array();
  //limpia la zona de los pokemones con un string vacio
  root.innerHTML = '';
  //este for llena el arreglo arrayOfFilteredPokemonType con los tipos de pokemon seleccionados en la busqueda
  for (let i = 0; i < inputElements.length; ++i) {
    //este if es para revisar que elementos de inputElements estan seleccionados con una palomita
    if (inputElements[i].checked) {
      checkedValue = inputElements[i].value;
      arrayOfSelectedPokemonType.push(checkedValue);
    }
  }
  //alert(inputElements.length);
  //alert(arrayOfFilteredPokemonType.length);
  //busca los pokemones que cumplan con los tipos seleccionados (o filtrados) en los checkbox
  //Inicializamos la funcion que importamos, usando como param1 = arrayOfSelectedPokemonType y como param2 = allPokemon
  const filteredDataByType = getPokemonByType(arrayOfSelectedPokemonType, allName);
  //reutilizamos la funcion pokemonList ahora con el resultado de la funcion anterior
  pokemonList(filteredDataByType);

});
divPokemonType.appendChild(searchButton);

//boton debilidad contra
const weaknessesButton = document.createElement("button");
weaknessesButton.id = "filtro-debilidad";
weaknessesButton.innerHTML = "Weaknesses";
//se agrega evento al boton
weaknessesButton.addEventListener("click", function () {

  const root = document.getElementById('root');
  let checkedValue = null;
  //trae los 18 tipos del checkbox del arreglo de tipos de pokemon
  const inputElements = document.getElementsByName('pokemonType');
  //se inicializa un arreglo que tendra los tipos de pokemon seleccionados
  const arrayOfSelectedPokemonType = new Array();
  //limpia la zona de los pokemones con un string vacio
  root.innerHTML = '';
  //este for llena el arreglo arrayOfFilteredPokemonType con los tipos de pokemon seleccionados en la busqueda
  for (let i = 0; i < inputElements.length; ++i) {
    //este if es para revisar que elementos de inputElements estan seleccionados con una palomita
    if (inputElements[i].checked) {
      checkedValue = inputElements[i].value;
      arrayOfSelectedPokemonType.push(checkedValue);
    }
  }
  //alert(inputElements.length);
  //alert(arrayOfFilteredPokemonType.length);
  //busca los pokemones que cumplan con los tipos seleccionados (o filtrados) en los checkbox
  //Inicializamos la funcion que importamos, usando como param1 = arrayOfSelectedPokemonType y como param2 = allPokemon
  const filteredDataByWeaknesses = getPokemonByWeaknesses(arrayOfSelectedPokemonType, allName);
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
resistantButton.addEventListener("click", function () {

  const root = document.getElementById('root');
  let checkedValue = null;
  //trae los 18 tipos del checkbox del arreglo de tipos de pokemon
  const inputElements = document.getElementsByName('pokemonType');
  //se inicializa un arreglo que tendra los tipos de pokemon seleccionados
  const arrayOfSelectedPokemonType = new Array();
  //limpia la zona de los pokemones con un string vacio
  root.innerHTML = '';
  //este for llena el arreglo arrayOfFilteredPokemonType con los tipos de pokemon seleccionados en la busqueda
  for (let i = 0; i < inputElements.length; ++i) {
    //este if es para revisar que elementos de inputElements estan seleccionados con una palomita
    if (inputElements[i].checked) {
      checkedValue = inputElements[i].value;
      arrayOfSelectedPokemonType.push(checkedValue);
    }
  }
  //alert(inputElements.length);
  //alert(arrayOfFilteredPokemonType.length);
  //busca los pokemones que cumplan con los tipos seleccionados (o filtrados) en los checkbox
  //Inicializamos la funcion que importamos, usando como param1 = arrayOfSelectedPokemonType y como param2 = allPokemon
  const filteredDataByResistance = getPokemonByResistant(arrayOfSelectedPokemonType, allName);
  //reutilizamos la funcion pokemonList ahora con el resultado de la funcion anterior
  pokemonList(filteredDataByResistance);

});
//se ubica donde queremos que este el boton
divPokemonType.appendChild(resistantButton);
/*---------------------------------------------- Funcion scroll- flecha pokebola ------------------------------------------------------*/
// Funcion Extra : boton para subir en pantalla
const divScroll = document.createElement('div');
divScroll.classList.add("content-scroll");
const imgScroll = document.createElement('img');
imgScroll.classList.add("btn-scroll");
imgScroll.src = 'img/icon-flecha.png';
imgScroll.alt = 'scroll flecha pokemon';
divScroll.appendChild(imgScroll);
bodyPage.appendChild(divScroll);

window.onscroll = () => {
  if (document.documentElement.scrollTop > 100) {
    divScroll.classList.add('show');
  } else {
    divScroll.classList.remove('show');
  }
};
divScroll.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});

/*---------------------------------------------- Diseño del footer ------------------------------------------------------*/
const footer = document.createElement('footer');
footer.classList.add('content-footer');
bodyPage.appendChild(footer);

const footerDiv1 = document.createElement('div');
footerDiv1.classList.add('content-img');
const imgFooter = document.createElement('img');
imgFooter.classList.add("img-logo");
imgFooter.src = 'img/pokemon.png';
imgFooter.alt = 'logo pokemon go';
footerDiv1.appendChild(imgFooter);
footer.appendChild(footerDiv1);

const footerDiv2 = document.createElement('div');
footerDiv2.classList.add('content-text');
const imgFooter1 = document.createElement("img");
imgFooter1.src = 'img/pikachu.png';
imgFooter1.alt = 'pikachu';
const parrafo1 = document.createElement('p');
parrafo1.textContent = "Astrid Andrea Bolaños Gracia"
footerDiv2.appendChild(imgFooter1);
footerDiv2.appendChild(parrafo1);
const imgFooter2 = document.createElement("img");
imgFooter2.src = 'img/snorlax.png';
imgFooter2.alt = 'pikachu';
const parrafo2 = document.createElement('p');
parrafo2.textContent = "Abril Vargas Cordova"
footerDiv2.appendChild(imgFooter2);
footerDiv2.appendChild(parrafo2);
footer.appendChild(footerDiv2);







