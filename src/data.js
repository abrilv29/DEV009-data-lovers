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
  //case "num":
   // orderName = arrayPokemon.sort((a, b) => a.num > b.num ? 1 : -1);
    //break;
  //default:

  }
  //console.log(orderName);
  return orderName;

};

/*export const filterCandy = (orderCandy) => {

  console.log(orderCandy);

  return orderCandy = evolution["next-evolution"].filter(ev => ev["candy-cost"] === "25");


};*/

export const getPokemonByType = (arrayOfSelectedPokemonType, pokemonList) => {
  let pokemonFilteredList = null;
  for (let indexCondition = 0; indexCondition < arrayOfSelectedPokemonType.length; indexCondition++) {
   
    pokemonFilteredList =
      pokemonList.filter(
        function (objeto) {
         
          const objetoConsultado =
            objeto.type.some(function (item) {
              if (item.indexOf(arrayOfSelectedPokemonType[indexCondition]) >= 0) {
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

export const getPokemonByResistant = (arrayOfSelectedPokemonType, pokemonList) => {
  let pokemonFilteredList = null;
  for (let indexCondition = 0; indexCondition < arrayOfSelectedPokemonType.length; indexCondition++) {
    pokemonFilteredList = pokemonList.filter(function (objeto) {
      const objetoConsultado = objeto.resistant.some(function (item) {
        if (item.indexOf(arrayOfSelectedPokemonType[indexCondition]) >= 0) {
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

export const getPokemonByWeaknesses = (arrayOfSelectedPokemonType, pokemonList) => {
  let pokemonFilteredList = null;
  for (let indexCondition = 0; indexCondition < arrayOfSelectedPokemonType.length; indexCondition++) {
    pokemonFilteredList = pokemonList.filter(function (objeto) {
      const objetoConsultado = objeto.weaknesses.some(function (item) {
        if (item.indexOf(arrayOfSelectedPokemonType[indexCondition]) >= 0) {
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

//combinaciones existentes en los 251 pokemones
export const getPokemonUniqueType = (pokemonList) => {
  const arrayOfUniquePokemonType = [];
  const arrayOfFlagsPokemonType = [];
  for (let indexCondition = 0; indexCondition < pokemonList.length; indexCondition++) {
    //console.log(pokemonList[indexCondition].type);

    if (!arrayOfFlagsPokemonType.includes(pokemonList[indexCondition].type.sort().join())) {
      arrayOfFlagsPokemonType.push(pokemonList[indexCondition].type.sort().join())
      arrayOfUniquePokemonType.push(pokemonList[indexCondition].type.sort());
    }
    
  }
  //console.log(arrayOfUniquePokemonType);
  return arrayOfUniquePokemonType
};

