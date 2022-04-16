const data = require('../data/zoo_data');
const { prices } = require('../data/zoo_data');

function countEntrants(entrantes) {
  const obj = { child: 0, adult: 0, senior: 0 };
  entrantes.forEach((pessoas) => {
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

module.exports = { calculateEntry, countEntrants };
