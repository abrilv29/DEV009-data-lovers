
import { filterCards, filterOrder, getPokemonByType, getPokemonByWeaknesses, getPokemonByResistant,getPokemonUniqueType } from '../src/data.js';

const objPokemon = [{
  "num": "001",
  "name": "bulbasaur",
  "type": [
    "grass",
    "poison"
  ],
  "resistant": [
    "water",
    "electric",
    "grass",
    "fighting",
    "fairy"
  ],
  "weaknesses": [
    "fire",
    "ice",
    "flying",
    "psychic"
  ],
  "evolution": {
    "next-evolution": [{
      "candy-cost": "25",
    }]
  }
},
{
  "num": "004",
  "name": "charmander",
  "type": [
    "fire"
  ],
  "resistant": [
    "fire",
    "grass",
    "ice",
    "bug",
    "steel"
  ],
  "weaknesses": [
    "water",
    "ground",
    "rock"
  ],
  "evolution": {
    "next-evolution": [{
      "candy-cost": "25",
    }]
  }
},
{
  "num": "007",
  "name": "squirtle",
  "type": [
    "water"
  ],
  "resistant": [
    "fire",
    "water",
    "ice",
    "steel"
  ],
  "weaknesses": [
    "electric",
    "grass"
  ],
  "evolution": {
    "next-evolution": [{
      "candy-cost": "25",
    }]
  }
},
];

describe('filterCards', () => {

  it('deberia retorna la data del pokemon segun el input', () => {
    const result = filterCards(objPokemon,"bul");
    expect(result[0].name).toEqual("bulbasaur");
  });
});

describe('filterOrder ', () => {
  it('is a function', () => {
    expect(typeof filterOrder ).toBe('function');
  });

  it('deberia retorna el orden de data pokemon de la A to Z', () => {
    const orderData = filterOrder(objPokemon,"A-Z");
    expect(orderData [0].name).toEqual('bulbasaur');
    expect(orderData [1].name).toEqual('charmander');
    expect(orderData [2].name).toEqual('squirtle');
  });

  it('deberia retorna el orden de data pokemon de la Z to A', () => {
    const orderData  = filterOrder(objPokemon,"Z-A");
    expect(orderData [0].name).toEqual('squirtle');
    expect(orderData [1].name).toEqual('charmander');
    expect(orderData [2].name).toEqual('bulbasaur');
  });

  it('deberia retorna el orden de data pokemon de acuerdo al num', () => {
    const orderData  = filterOrder(objPokemon,"num");
    expect(orderData [0].num).toEqual('001');
    expect(orderData [1].num).toEqual('004');
    expect(orderData [2].num).toEqual('007');
  });
});


/*----------------------------------------------------Tests Filtros por tipo------------------------------------------------*/
describe('getPokemonByType', () => {
  it('deberia retornar el tipo de pokemon seleccionado en el checkbox', () => {
    expect(getPokemonByType("grass", objPokemon)[0].type).toEqual(["grass", "poison"]);
  });
});
describe('getPokemonByWeaknesses', () => {
  it('deberia retornar los tipos de pokemon que son debiles contra el tipo seleccionado en el checkbox', () => {
    expect(getPokemonByWeaknesses("water", objPokemon)[0].weaknesses).toEqual(["water", "ground", "rock"]);
  });
});
describe('getPokemonByResistant', () => {
  it('deberia retornar los tipos de pokemon que son resistentes al tipo seleccionado en el checkbox', () => {
    expect(getPokemonByResistant("fire", objPokemon)[1].resistant).toEqual(["fire","grass", "ice", "bug", "steel"]);
  });
});
/*----------------------------------------------------Tests Filtros por tipo------------------------------------------------*/

test('getPokemonUniqueType should return an array with unique types', () => {
  const pokemonList = [
    { name: 'blastoise', type: ['water'] },
    { name: 'dewgong', type: ['ice', 'water'] },
    { name: 'starmie', type: ['water', 'psychic'] },
  ];
  const expected = [['water'], ['ice', 'water'], [ 'psychic', 'water']];
  const result = getPokemonUniqueType(pokemonList);
  expect(result).toEqual(expected);
});