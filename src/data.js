export const getPokemonByType = (arrayOfTypes,pokemonList) =>
{

  //console.log("%j",pokemonList);

  let jsonFilteredPokemon = getResult(arrayOfTypes,pokemonList);


  return jsonFilteredPokemon  ;
};


function getResult(arrayOfTypes, pokemonList) {

 // alert(arrayOfTypes.length);
  let pokemonFilteredList = null;
  for(let indexCondition = 0; indexCondition < arrayOfTypes.length; indexCondition++)
  {

    pokemonFilteredList = 
     pokemonList.filter(function(obj) {
      return obj.type.some(function(item){
   
             if(item.indexOf(arrayOfTypes[indexCondition]) >= 0)
             {
                 return true;
             }
           
        return false;
      });
    });

    pokemonList = pokemonFilteredList;

  }
    return pokemonFilteredList;
}





