# iterable-pokedex

Install the package:

```
$ npm i iterable-pokedex
```

Then you can use the library:

```js
const { findPokemon, findMove, findAbility, findType, findEggGroup, findGeneration, findNature, allPokemon, allMoves } = require('oakdex-pokedex');

const eevee = await findPokemon('Eevee')
console.log(eevee.names.en); // Eeevee

const char = await lookupStats('Charmeleon')
// { "speed": [ 3, 3 ], "power": [ 2, 4 ], "stamina": [ 2, 2 ], "skill": [ 3, 4 ], "jump": [ 3, 3 ] }

for await (const pokemon of getPokemon()) { // an async iterator of all pokemon
  console.log(pokemon.toString()); // Charmander... etc
}

console.log(pokemon) // an array of all pokemon
console.log(pokemonByName) // an object indexed by name of all pokemon
console.log(moves) // an array of all moves
console.log(movesByName) // an object indexed by name of all moves
console.log(abilities) // an array of all abilities
console.log(abilitiesByName) // an object indexed by name of all abilities
console.log(eggGroups) // an array of all eggGroups
console.log(eggGroupsByName) // an object indexed by name of all eggGroups
console.log(types) // an array of all types
console.log(typesByName) // an object indexed by name of all types
console.log(regions) // an array of all regions
console.log(regionsByName) // an object indexed by name of all regions
console.log(generations) // an array of all generations
console.log(generationsByName) // an object indexed by name of all generations
console.log(natures) // an array of all natures
console.log(naturesByName) // an object indexed by name of all natures
```

### Sprites

If you want also to include sprites in your pokedex, check out [oakdex-pokedex-sprites](https://github.com/jalyna/oakdex-pokedex-sprites).

## Forked from oakdex-pokedex

This project was forked from [oakdex-pokedex](https://github.com/jalyna/oakdex-pokedex) who put together all the data.


## License

MIT License. See the included LICENSE file.
