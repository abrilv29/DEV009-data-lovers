export const filterCards = (arrayPokemon, input) => {
  return arrayPokemon.filter(elemento => elemento.name.startsWith(input.toLowerCase()));
};

export const filterOrder = (arrayPokemon, orderSelect) => {

  let orderName;

  switch (orderSelect) {
    case "A-Z":
      orderName = arrayPokemon.sort((a, b) => (a.name > b.name ? 1 : -1));
      break;
    case "Z-A":
      orderName = arrayPokemon.sort((a, b) => (a.name > b.name ? -1 : 1));
      break;
    case "num":
      orderName = arrayPokemon.sort((a, b) => a.num > b.num ? 1 : -1);
      break;
    default:

  }
  console.log(orderName);
  return orderName;

};

/*export const filterCandy = (objEvolution,dataNum) => {
  const arrayNextEvolution = objEvolution['next-evolution'];
  const arrayPrevEvolution = objEvolution['prev-evolution'];
  let infoEvolution = '';
  if(typeof(arrayPrevEvolution)=== 'undefined' && typeof(arrayNextEvolution === 'undefined')) {
    infoEvolution = 'no existe evolucion';
  }
  else{
    if(typeof(arrayPrevEvolution) !== 'undefined'){
      if(Array.isArray(arrayPrevEvolution[0]['prev-evolution'])){
        const arrPrev = arrayPrevEvolution[0]['prev-evolution'][0];
        infoEvolution = filterCandy(arrPrev);
      }
      infoEvolution += filterCandy(arrayPrevEvolution[0]);
    }
    infoEvolution += filterCandy({num:dataNum,name:'','candy-cost':''});
    if (typeof (arrayNextEvolution) !== 'undefined') {
      if(arrayNextEvolution.length > 1){
        arrayNextEvolution.forEach((element) =>{
          infoEvolution += filterCandy(element);
        });

      }else{
        infoEvolution += filterCandy(arrayNextEvolution[0]);
        if(Array.isArray(arrayNextEvolution[0]['next-evolution'])){
          const arrNext = arrayNextEvolution[0]['next-evolution'][0];
          infoEvolution += filterCandy(arrNext);

        }
      }
    }
  }
  return infoEvolution;
};*/

//Inicializamos la funcion con dos parametros: param1 = arrayOfSelectedPokemonType, y param2 = pokemonList
export const getPokemonByType = (arrayOfSelectedPokemonType,pokemonList) => 
{
  let pokemonFilteredList = null;
  //En este for se recorre con el numero de tipos de pokemon seleccionados en los checkbox
  for(let indexCondition = 0; indexCondition < arrayOfSelectedPokemonType.length; indexCondition++)
  {
    //console.log("Esta es la iteración "+indexCondition+" del tipo de pokemon: "+arrayOfSelectedPokemonType[indexCondition]);
    //se le asigna a la variable pokemonFilteredList los pokemones resultantes de la ejecucion del metodo #filter#
    pokemonFilteredList = 
   // regresa todos los pokemones que hicieron match con el tipo de pokemon de los checkbox seleccionados
   pokemonList.filter(
   // se declara una función anónima que ejecuta el filtro del conjunto de datos en formato json que iterá todos los 251 pokemones y los pokemones cuyo tipo haga match 
   // con los checkbox seleccionados regresarán verdadero, en caso contrario regresá falso
     function(objeto) 
     {
       //se declara una variable objetoConsultado que tendrá verdadero o falso, dependiendo de si el type del objeto (un pokemon en formato json)
       //coincide o no con la cadena contenida en la iteración del arrayOfSelectedPokemonType[indexCondition]
       const objetoConsultado =
       objeto.type.some(function(item)
       {
         //evalua si el arrego de los tipos (item), contiene el elemento de la iteración arrayOfSelectedPokemonType[indexCondition]
         if(item.indexOf(arrayOfSelectedPokemonType[indexCondition]) >= 0)
         {
           //console.log("El tipo de pokemon a filtrar en la iteración número: "+indexCondition+" es: "+arrayOfSelectedPokemonType[indexCondition]);
           return true;
         }
                
         return false;
       });


       //console.log("el objeto consultado es: "+objetoConsultado);
       return objetoConsultado;

     });

    // Se reemplaza el arreglo pokemonList (arreglo actual, puede ser el original o uno ya filtrada, depende de la iteración del for) por el arreglo
    // pokemonFilteredList (un arreglo más pequeño al cual ya se le aplicó el filtro) y ahora es el arreglo actual, por lo tanto la siguiente iteración
    // del for iterará sobre un arreglo más pequeño
    pokemonList = pokemonFilteredList;

  }
  return pokemonFilteredList;

};

export const getPokemonByResistant = (arrayOfSelectedPokemonType,pokemonList) => 
{
  let pokemonFilteredList = null;
  for(let indexCondition = 0; indexCondition < arrayOfSelectedPokemonType.length; indexCondition++)
  {
    pokemonFilteredList = pokemonList.filter(function(objeto) 
     {
       const objetoConsultado = objeto.resistant.some(function(item)
       {
         if(item.indexOf(arrayOfSelectedPokemonType[indexCondition]) >= 0)
         {
           return true;
         }      
         return false;
       });
       return objetoConsultado;
     });
    pokemonList = pokemonFilteredList;

  }
  return pokemonFilteredList;

};

export const getPokemonByWeaknesses = (arrayOfSelectedPokemonType,pokemonList) => 
{
  let pokemonFilteredList = null;
  for(let indexCondition = 0; indexCondition < arrayOfSelectedPokemonType.length; indexCondition++)
  {
    pokemonFilteredList = pokemonList.filter(function(objeto) 
     {
       const objetoConsultado = objeto.weaknesses.some(function(item)
       {
         if(item.indexOf(arrayOfSelectedPokemonType[indexCondition]) >= 0)
         {
           return true;
         }      
         return false;
       });
       return objetoConsultado;

     });
    pokemonList = pokemonFilteredList;
  }
  return pokemonFilteredList;

};


/*export const getCandyCost = () => {
  const pokemon = [
    {
      "evolution": {
        "candy": "bulbasaur candy",
        "next-evolution": [{
          "num": "002",
          "name": "ivysaur",
          "candy-cost": "25",
          "next-evolution": [{
            "num": "003",
            "name": "venusaur",
            "candy-cost": "100"
          }]
        }]
      }
    },
    {
      "evolution": {
        "candy": "caterpie candy",
        "next-evolution": [{
          "num":  "011",
          "name": "metapod",
          "candy-cost": "12",
          "next-evolution": [{
            "num": "012",
            "name": "butterfree",
            "candy-cost": "50"
          }]
        }]
      }
    }
  ];

  const candyCosts = []; // Array para almacenar los candy-cost
  const nextEvolutions = []; // Array para almacenar las next-evolution

  const getNextEvolutions = (evolution) => {
    if (evolution && evolution.length > 0) {
      for (let i = 0; i < evolution.length; i++) {
        const nextEvolution = evolution[i];
        const candyCost = nextEvolution["candy-cost"];
        const nextEvo = {
          num: nextEvolution.num,
          name: nextEvolution.name,
          "candy-cost": candyCost
        };
        nextEvolutions.push(nextEvo);
        candyCosts.push(candyCost);
        getNextEvolutions(nextEvolution["next-evolution"]);
      }
    }
  };

  for (let i = 0; i < pokemon.length; i++) {
    getNextEvolutions(pokemon[i].evolution["next-evolution"]);
  }

  return {
    "candy-costs": candyCosts,
    "next-evolutions": nextEvolutions
  };
};*/

export function filtrarEvoluciones(arrayPokemon) {
  const evolutions = [];

  function procesarEvolucion(evolution) {
    const { name, num, "candy-cost": candyCost, "next-evolution": nextEvolutions } = evolution;

    evolutions.push({
      name,
      num,
      candyCost
    });

    if (nextEvolutions && nextEvolutions.length > 0) {
      nextEvolutions.forEach((nextEvolution) => {
        procesarEvolucion(nextEvolution);
      });
    }
  }

  arrayPokemon.forEach((pokemon) => {
    if (pokemon.evolution) {
      procesarEvolucion(pokemon.evolution);
    }
  });

  return evolutions;
}

