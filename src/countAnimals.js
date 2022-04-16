const data = require('../data/zoo_data');

function countAnimals(animal, sex) {
  if (sex !== undefined) {
    const acharAniaml = data.species.filter((obj3) => obj3.residents.sex === sex);
    return acharAniaml;
  }

  if (!animal) {
    return data.species.reduce((acc, obj) => {
      acc[obj.name] = obj.residents.length;
      return acc;
    }, {});
  }
  if (animal !== undefined) {
    const animals = data.species.find((obj2) => animal === obj2.name).residents.length;
    return animals;
  }
}
/* return species.find(({ name }) => speciesName === name).residents.length; */
module.exports = countAnimals;

console.log(countAnimals());
console.log(countAnimals('penguins', 'male'));

/* `${obj1.name}: ${obj1.residents.length}` */
