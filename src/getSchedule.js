const data = require('../data/zoo_data');
const { hours, species } = require('../data/zoo_data');

const keyDias = Object.keys(hours);
const nomes = species.map((obj) => obj.name);

const avable = (animal) => species.find((specie) => specie.name === animal).availability;

const agenda = (day) => {
  const dias = {};
  if (day === 'Monday') {
    dias[day] = {
      officeHour: 'CLOSED', exhibition: 'The zoo will be closed!',
    };
  } else {
    dias[day] = {
      officeHour: `Open from ${hours[day].open}am until ${hours[day].close}pm`,
      exhibition: species.filter((obj) => obj.availability.includes(day))
        .map((animal) => animal.name),
    };
  }
  return dias;
};

const error = () => {
  const obj = {};
  keyDias.forEach((dia) => {
    if (dia === 'Monday') {
      obj.Monday = {
        officeHour: 'CLOSED', exhibition: 'The zoo will be closed!',
      };
    } else {
      obj[dia] = {
        officeHour: `Open from ${hours[dia].open}am until ${hours[dia].close}pm`,
        exhibition: species.filter((animal) => animal.availability.includes(dia))
          .map((animal) => animal.name),
      };
    }
  });
  return obj;
};

function getSchedule(scheduleTarget) {
  if (nomes.includes(scheduleTarget)) return avable(scheduleTarget);
  if (keyDias.includes(scheduleTarget)) return agenda(scheduleTarget);
  return error();
}

console.log(getSchedule('lions'));

module.exports = getSchedule;
