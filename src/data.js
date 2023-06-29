export const filterCards = (arrayPokemon, input) => {
  return arrayPokemon.filter(elemento => elemento.name.startsWith(input.toLowerCase()));
};

export const filterOrder = (arrayPokemon, orderSelect) => {

  let orderArray = [];

  switch (orderSelect) {
    case 'A-Z':
      orderArray = arrayPokemon.sort((a, b) => ((a.name <= b.name) ? -1 : 1));
      break;
    case 'num':
      orderArray = arrayPokemon.sort((a, b) => a.num - b.num);
      break;
    default:
  }

  return orderArray;

};