const { writeFileSync } = require('fs')
const pokemon = require('../data/pokemon.json')
const moves = require('../data/move.json')
const abilities = require('../data/ability.json')
const eggGroups = require('../data/egg_group.json')
const types = require('../data/type.json')
const regions = require('../data/region.json')
const generations = require('../data/generation.json')
const natures = require('../data/nature.json')

function camelCaseKey(name) {
  const [first, ...rest] = name.split('_')
  const upperCased = rest.map(name => `${name[0].toUpperCase()}${name.slice(1)}`)
  return `${first}${upperCased.join('')}`
}

function camelCaseObject(obj) {
  if (Array.isArray(obj)) {
    return obj.map(camelCaseObject)
  }
  if (obj === null) {
    return obj
  }
  if (obj === undefined) {
    return obj
  }
  if (typeof obj !== 'object') {
    return obj
  }
  return Object.entries(obj).reduce((memo, [key, value]) => {
    memo[camelCaseKey(key)] = camelCaseObject(value)
    return memo
  }, {})
}

function printValues(obj) {
  return JSON.stringify(camelCaseObject(obj))
}

const data = Object.entries({
  pokemon,
  moves,
  abilities,
  eggGroups,
  types,
  regions,
  generations,
  natures,
}).map(([dataName, dataMap]) => {
  const dataByName = Object.entries(dataMap).map(([name, values]) => {
    return `${JSON.stringify(name)}: makeClass('${dataName}', ${printValues(values)})`
}).join(',\n  ')

  return `
const ${dataName}ByName = {
  ${dataByName}
}
const ${dataName} = [
  ${Object.keys(dataMap).map(name => `${dataName}ByName[${JSON.stringify(name)}]`).join(',\n  ')}
]

module.exports.${dataName}ByName = ${dataName}ByName
module.exports.${dataName} = ${dataName}
`
})

writeFileSync('./lib/data.js', `
class Pokemon {
  constructor(data) {
    Object.assign(this, { experience:  0 }, data)
  }

  toString() {
    return this.names.en
  }

  train() {
    return ++this.experience
  }
}

function makeClass(dataName, data) {
  if (dataName === 'pokemon') {
    return new Pokemon(data)
  }

  return data
}

${data.join('\n')}
`)
