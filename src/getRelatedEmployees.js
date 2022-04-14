const data = require('../data/zoo_data');
const { employees } = require('../data/zoo_data');

function isManager(id) {
  return employees.some((obj) => obj.managers.includes(id));
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId) === true) {
    const pessoa = employees.filter((pessoa1) => pessoa1.managers.includes(managerId));
    return pessoa.map((pessoa2) => `${pessoa2.firstName} ${pessoa2.lastName}`);
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

module.exports = { isManager, getRelatedEmployees };

console.log(getRelatedEmployees('9e7d4524-363c-416a-8759-8aa7e50c0992'));
