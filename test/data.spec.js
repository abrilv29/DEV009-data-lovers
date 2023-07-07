import { filterCards } from '../src/data.js';

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
  it('is a function', () => {
    expect(typeof example).toBe('function');
  });

  it('returns `example`', () => {
    expect(example()).toBe('example');
  });
});


/*describe('anotherExample', () => {
  it('is a function', () => {
    expect(typeof anotherExample).toBe('function');
  });

  it('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });
});*/
