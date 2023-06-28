export const filterCards = (arrayPokemon,input) => {
    return arrayPokemon.filter(elemento => elemento.name === input.toLowerCase());
};

export const anotherExample = () => {
  return 'OMG';
};
