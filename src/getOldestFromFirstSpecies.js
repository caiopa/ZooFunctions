const data = require('../data/zoo_data');
const { employees, species } = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const empo = employees.find((objId) => objId.id === id);
  const specie = species.find((obj) => obj.id === empo.responsibleFor[0]);
  const resi = specie.residents.sort((a, b) => b.age - a.age);
  const resultado = [resi[0].name, resi[0].sex, resi[0].age];
  return resultado;
}

module.exports = getOldestFromFirstSpecies;

console.log(getOldestFromFirstSpecies('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));
