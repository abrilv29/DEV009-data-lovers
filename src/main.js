//import { filterCandy } from './data.js';
import { filterOrder, getPokemonUniqueType } from './data.js';
import { filterCards } from './data.js';
import { getPokemonByType } from './data.js';
import { getPokemonByResistant } from './data.js';
import { getPokemonByWeaknesses } from './data.js';
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
//console.log(allName.length);

//const filtro = filterCards(allName); // data.js funciones
//CONTENEDOR DONDE SE MUESTRAN LAS CARDS POKEMON
const root = document.getElementById('root');



//Iconos por tipo de pokemon
const TypePokemon = (arrayType) => {
  let imgEachPokemon = '';
  arrayType.forEach((typeElement) => {
    imgEachPokemon += `<img src="img/iconos/${typeElement}.png" alt=" type pokemon"/>`;
  });
  return imgEachPokemon;
};
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
  divError.classList.add("class", "content-error");
  const parrafo = document.createElement("p");
  parrafo.innerHTML = 'No existe ese pokemon';
  const imgError = document.createElement("img");
  imgError.src = './img/psyduck.gif';
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


/* ------------------------------ ESTRUCTURA EVOLUTION CARAMEL  -------------------------------------- */

/*const selectCandy = document.createElement("select");
selectCandy.id = "candySelect";
const mensajeCandy = document.createElement("option");
mensajeCandy.value = "";
mensajeCandy.text = "candy evolution";
selectCandy.add(mensajeCandy);

const optionC1 = document.createElement("option");
optionC1.value = "25";
optionC1.text = "25";
selectCandy.add(optionC1);

const optionC2 = document.createElement("option");
optionC2.value = "25";
optionC2.text = "50";
selectCandy.add(optionC2);

const optionC3 = document.createElement("option");
optionC3.value = "100";
optionC3.text = "100";
selectCandy.add(optionC3);

const optionC4 = document.createElement("option");
optionC4.value = "100";
optionC4.text = "400";
selectCandy.add(optionC4);
contentSearch.appendChild(selectCandy);

selectCandy.addEventListener('change', () => {

  switch (selectCandy.value) {
  case '25':
    root.innerHTML = '';
    pokemonList(filterCandy(allName, '25'));
    break;
  default:
  }
});*/
/*-------------------------------------------ESTRUCTURA FILTRO POKEMON BY TYPE-------------------------------------------------------------------*/

const arrayOfTypes = ["bug", "dark", "dragon", "electric", "fairy", "fighting", "fire", "flying", "ghost", "grass", "ground", "ice", "normal", "poison", "psychic", "rock", "steel", "water"];
const divPokemonType = document.createElement("div");
divPokemonType.id = "DivPokemonTypes";
contentSearch.appendChild(divPokemonType);

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
  checkbox.name = "pokemonType";
  checkbox.value = arrayOfTypes[i];
  checkbox.id = arrayOfTypes[i];

  const labelPokemonType = document.createElement("label");
  labelPokemonType.id = "labelType";
  labelPokemonType.htmlFor = arrayOfTypes[i];
  labelPokemonType.img = TypePokemon(arrayOfTypes);
  labelPokemonType.appendChild(document.createTextNode(arrayOfTypes[i]));
  
  divPokemonType.appendChild(checkbox);
  divPokemonType.appendChild(labelPokemonType);
  const iconEachType = TypePokemon([arrayOfTypes[i]]);
  divPokemonType.innerHTML += iconEachType; 
  pokemonFilterType.appendChild(divPokemonType);
  
}

/*-------------------------------------------------------BOTON DE BUSQUEDA-----------------------------------------------------------------------*/
const searchButton = document.createElement("button");
searchButton.id = "boton-filtro";
searchButton.innerHTML = "Search";
searchButton.addEventListener("click", function () {

  const root = document.getElementById('root');
  let checkedValue = null;
  const inputElements = document.getElementsByName('pokemonType');
  const arrayOfSelectedPokemonType = new Array();
  root.innerHTML = '';
  for (let i = 0; i < inputElements.length; ++i) {
    if (inputElements[i].checked) {
      checkedValue = inputElements[i].value;
      arrayOfSelectedPokemonType.push(checkedValue);
    }
  }

  const filteredDataByType = getPokemonByType(arrayOfSelectedPokemonType, allName);
  pokemonList(filteredDataByType);

});
divPokemonType.appendChild(searchButton);

/*----------------------------------------------------------BOTON WEAKNESSES--------------------------------------------------------------------*/
const weaknessesButton = document.createElement("button");
weaknessesButton.id = "filtro-debilidad";
weaknessesButton.innerHTML = "Weaknesses";
weaknessesButton.addEventListener("click", function () {

  const root = document.getElementById('root');
  let checkedValue = null;
  const inputElements = document.getElementsByName('pokemonType');
  const arrayOfSelectedPokemonType = new Array();
  root.innerHTML = '';
  for (let i = 0; i < inputElements.length; ++i) {
    if (inputElements[i].checked) {
      checkedValue = inputElements[i].value;
      arrayOfSelectedPokemonType.push(checkedValue);
    }
  }
  
  const filteredDataByWeaknesses = getPokemonByWeaknesses(arrayOfSelectedPokemonType, allName);
  pokemonList(filteredDataByWeaknesses);

});
divPokemonType.appendChild(weaknessesButton);


/*-------------------------------------------------------------------BOTON RESISTANT------------------------------------------------------------*/
const resistantButton = document.createElement("button");
resistantButton.id = "filtro-resistencia";
resistantButton.innerHTML = "Resistant";
resistantButton.addEventListener("click", function () {

  const root = document.getElementById('root');
  let checkedValue = null;
  const inputElements = document.getElementsByName('pokemonType');
  const arrayOfSelectedPokemonType = new Array();
  root.innerHTML = '';
  for (let i = 0; i < inputElements.length; ++i) {
    if (inputElements[i].checked) {
      checkedValue = inputElements[i].value;
      arrayOfSelectedPokemonType.push(checkedValue);
    }
  }
  
  const filteredDataByResistance = getPokemonByResistant(arrayOfSelectedPokemonType, allName);
  pokemonList(filteredDataByResistance);

});
divPokemonType.appendChild(resistantButton);


/*-------------------------------------------boton porcentajes-------------- */
const percentageButton = document.createElement("button");
percentageButton.id = "boton-filtro";
percentageButton.innerHTML = "Porcentaje";

let myChart = null;

percentageButton.addEventListener("click", function () {

  const root = document.getElementById('root');
  let checkedValue = null;
  const inputElements = document.getElementsByName('pokemonType');
  const arrayOfSelectedPokemonType = new Array();
  root.innerHTML = '';
  for (let i = 0; i < inputElements.length; ++i) {
    if (inputElements[i].checked) {
      checkedValue = inputElements[i].value;
      arrayOfSelectedPokemonType.push(checkedValue);
    }
  }
  const filteredDataByType = getPokemonByType(arrayOfSelectedPokemonType, allName);

  const filteredUnique = getPokemonUniqueType(filteredDataByType);
  const arrayOfCountersOfPokemon = [];
  let counter = 0 ;
  let sumOfCombinations = 0;
  let flagCombinedType = true;

  for (let i = 0; i < filteredUnique.length; ++i) {
    counter = getPokemonByType(filteredUnique[i], filteredDataByType);
    arrayOfCountersOfPokemon.push(counter.length);
    if(filteredUnique[i].length < 2)
    {
      //console.log('Existe un filtro de un solo tipo de pokemon: '+filteredUnique[i]+' por lo tanto siempre se restara al contador maximo los repetidos combinados')
      flagCombinedType = false;
    }
    
  }

  for (let i = 0; i < arrayOfCountersOfPokemon.length; ++i) {
    if (arrayOfCountersOfPokemon[i] !== Math.max(...arrayOfCountersOfPokemon)) {
      
      if((filteredUnique[i].join().includes('ice') ||
           filteredUnique[i].join().includes('steel') ||
           filteredUnique[i].join().includes('flying')) & flagCombinedType)
      {
        //console.log('No se le restara nada a ningun elemento del arreglo de contadores de pokemon porque no existe un filtro de un solo tipo de pokemon, solo combinados');
        sumOfCombinations = 0;
        break;
      }

      sumOfCombinations = sumOfCombinations + arrayOfCountersOfPokemon[i];
    }
  }
  //console.log(Math.max(...arrayOfCountersOfPokemon))
  const index = arrayOfCountersOfPokemon.indexOf(Math.max(...arrayOfCountersOfPokemon));
  arrayOfCountersOfPokemon[index] = arrayOfCountersOfPokemon[index] - sumOfCombinations; 
  //console.log(filteredUnique);
  //console.log(arrayOfCountersOfPokemon)

  const sum = arrayOfCountersOfPokemon.reduce((a,b) => a + b);
  //console.log(sum);
  const percentages = arrayOfCountersOfPokemon.map(x => (x / sum) * 100);
  console.log(percentages); 




  const ctx = document.getElementById('myChart');
  //root.appendChild(ctx);
  
  if(myChart)
  {
    myChart.clear();
    myChart.destroy();
  }
  //const Chart = "";
  myChart = new Chart(ctx, {
    type: 'pie',
    data: {
      labels: filteredUnique,
      datasets: [{
        label: '# of Votes',
        data: arrayOfCountersOfPokemon,
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });

  

});
divPokemonType.appendChild(percentageButton);

