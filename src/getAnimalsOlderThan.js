const data = require('../data/zoo_data');
const { species } = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const especies = species.find((animais) => animais.name === animal).residents;
  const idade = especies.every((obj) => obj.age >= age);
  return idade;
}

module.exports = getAnimalsOlderThan;

console.log(getAnimalsOlderThan('tigers', 3));
