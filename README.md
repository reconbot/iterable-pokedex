# iterable-pokedex

Install the package:

```
$ npm i iterable-pokedex
```

Then you can use the library:

```js
const { findPokemon, findMove, findAbility, findType, findEggGroup, findGeneration, findNature, allPokemon, allMoves } = require('oakdex-pokedex');

const eevee = findPokemon('Eevee')
// returns data/pokemon/eevee.json
console.log(eevee.names.en); // Eeevee

const charmander = findPokemon(4)
// returns data/pokemon/charmander.json
console.log(charmander.names.en); // Charmander

const tackle = findMove('Tackle')
// returns data/move/tackle.json
console.log(m.names.en); // Tackle

const contrary = findAbility('Contrary')
// returns data/ability/contrary.json
console.log(a.names.en); // Contrary

const fairy = findType('Fairy')
// returns data/type/fairy.json
console.log(fairy.names.en); // Fairy

const water1 = findEggGroup('Water 1')
// returns data/egg_group/water_1.json
console.log(water1.names.en); // Water 1

const genVI = findGeneration('Generation VI')
// returns data/generation/6.json
console.log(genVI.names.en); // Generation VI

const bold = findNature('Bold')
// returns data/nature/bold.json
console.log(bold.names.en); // Bold

const allPokemon = allPokemon()
console.log(allPokemon.length); // 802

const darkPokemon = allPokemon({ type: 'Dark' })
console.log(darkPokemon.length); // 46

const humanLike = allPokemon({ egg_group: 'Human-Like' })
console.log(humanLike.length); // 52

const alola = allPokemon({ dex: 'alola' })
console.log(alola.length); // 302

const moves = allMoves({ type: 'Ground' })
console.log(moves.length); // 26
```

### Sprites

If you want also to include sprites in your pokedex, check out [oakdex-pokedex-sprites](https://github.com/jalyna/oakdex-pokedex-sprites).

## Forked from oakdex-pokedex

This project was forked from [oakdex-pokedex](https://github.com/jalyna/oakdex-pokedex) who put together all the data.


## License

MIT License. See the included LICENSE file.
