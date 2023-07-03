export const filterCards = (arrayPokemon, input) => {
  return arrayPokemon.filter(elemento => elemento.name.includes(input.toLowerCase()));
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

export const filterCandy = (orderCandy) => {

  console.log(orderCandy);

return orderCandy = evolution["next-evolution"].filter(ev => ev["candy-cost"] === "25");


};


