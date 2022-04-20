const data = require('../data/zoo_data');

function countAnimals(animal) {
  if (!animal) {
    const resultado = {};
    data.species.forEach(({ name, residents }) => {
      resultado[name] = residents.length;
    });
    return resultado;
  }
  if (animal.sex) {
    return data.species.find((nomeSpecie) => nomeSpecie.name === animal.specie)
      .residents.filter((pesquisaGender) => pesquisaGender.sex === animal.sex).length;
  }
  const listarQtdAnimal = data.species.find(({ name }) => name === animal.specie);

  return listarQtdAnimal.residents.length;
}

module.exports = countAnimals;

console.log(countAnimals());
console.log(countAnimals({ specie: 'penguins' }));
console.log(countAnimals({ specie: 'penguins', sex: 'male' }));
console.log(countAnimals({ specie: 'penguins', sex: 'female' }));
