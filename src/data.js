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
       objeto.resistant.some(function(item)
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

export const getPokemonByWeaknesses = (arrayOfSelectedPokemonType,pokemonList) => 
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
       objeto.weaknesses.some(function(item)
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


//funcion de filtro
export const getPokemonByName = (arrayPokemon,input) => {
  return arrayPokemon.filter(elemento => elemento.name.startsWith(input.toLowerCase()));
  //return arrayPokemon.filter(elemento => elemento.name === input.toLowerCase());
};