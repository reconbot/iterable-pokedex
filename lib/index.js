'use strict';

const data = require('./data')
const util = require('util')
const setImmediatePromise = util.promisify(setImmediate)
const setTimeoutPromise = util.promisify(setTimeout)

module.exports = {
  ...data,
  async *getPokemon() {
    for (const pokemon of data.pokemon) {
      await setImmediatePromise()
      yield pokemon
    }
  },
  async trainMonster(name) {
    const pokemon = await findPokemon(name)
    const randomTime = Math.random() * 5 + 1
    await setTimeoutPromise(randomTime)
    pokemon.train()
    return pokemon
  },
  async lookupStats(name) {
    const pokemon = await findPokemon(name)
    await setImmediatePromise()
    return pokemon.pokeathlonStats
  },
  async findPokemon(name) {
    const pokemon = data.pokemonByName[name.toString()]
    if (!pokemon) {
      throw new Error('This is not a pocket monster.')
    }
    await setImmediatePromise()
    return pokemon
  }
}
