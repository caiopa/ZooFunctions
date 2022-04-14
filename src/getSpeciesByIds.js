const data = require('../data/zoo_data');
const { species } = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  if (!ids) return [];
  const animais = species.filter((animal) => ids.includes(animal.id));
  return animais;
}

module.exports = getSpeciesByIds;

console.log(getSpeciesByIds(''));
