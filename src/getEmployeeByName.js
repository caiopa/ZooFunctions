const data = require('../data/zoo_data');
const { employees } = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (!employeeName) return {};
  return employees.find((obj) => employeeName === obj.firstName || employeeName === obj.lastName);
}

module.exports = getEmployeeByName;

console.log(getEmployeeByName('Nelson'));
