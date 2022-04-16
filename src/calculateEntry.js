const data = require('../data/zoo_data');
const { prices } = require('../data/zoo_data');

const entrants = [
  { name: 'Lara Carvalho', age: 5 },
  { name: 'Frederico Moreira', age: 5 },
  { name: 'Pedro Henrique Carvalho', age: 5 },
  { name: 'Maria Costa', age: 18 },
  { name: 'Núbia Souza', age: 18 },
  { name: 'Carlos Nogueira', age: 50 },
];

function countEntrants(entrants) {
  const obj = { child: 0, adult: 0, senior: 0 };
  entrants.forEach((pessoas) => {
    if (pessoas.age < 18) obj.child += 1;
    if (pessoas.age >= 18 && pessoas.age < 50) obj.adult += 1;
    if (pessoas.age >= 50) obj.senior += 1;
  });
  return obj;
}
function calculateEntry(entrants) {
  if (!entrants || Object.keys(entrants).length === 0) return 0;
  const total = countEntrants(entrants);
  const valor1 = total.child * prices.child;
  const valor2 = total.senior * prices.senior;
  const valor3 = total.adult * prices.adult;
  return valor1 + valor2 + valor3;
}

console.log(calculateEntry(entrants));

module.exports = { calculateEntry, countEntrants };
