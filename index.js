//const isEmail = (str) => {
//  return str.includes('@');
//};

const isEmail = (str) => str.includes('@');

//const roll = () => {
// return Math.floor(Math.random() * 6) + 1;
//};

const roll = () => Math.floor(Math.random() * 6) + 1;

//const getNumber = (id) => {
// return Number(document.querySelector(`#${id}`).value);
//};

const getNumber = (id) => Number(document.querySelector(`#${id}`).value);

//const weather = (temperature) => {
//if (temperature > 16) {
//return 'teplo';
//}

//return 'zima';
//};

const weather = (temperature) => (temperature > 16 ? 'teplo' : 'zima');

const weekdays = [
  'pondělí',
  'úterý',
  'středa',
  'čtvrtek',
  'pátek',
  'sobota',
  'neděle',
];

weekdays.map((day) => day.toUpperCase());
weekdays.map((day) => day.slice(0, 1));

const months = [
  {
    name: 'leden',
    days: 31,
  },
  {
    name: 'únor',
    days: 28,
  },
  {
    name: 'březen',
    days: 31,
  },
  {
    name: 'duben',
    days: 30,
  },
  {
    name: 'květen',
    days: 31,
  },
  {
    name: 'červen',
    days: 30,
  },
  {
    name: 'červenec',
    days: 31,
  },
  {
    name: 'srpen',
    days: 31,
  },
  {
    name: 'září',
    days: 30,
  },
  {
    name: 'říjen',
    days: 31,
  },
  {
    name: 'listopad',
    days: 30,
  },
  {
    name: 'prosinec',
    days: 31,
  },
];

months.map((mesic) => mesic.days);
console.log(months.map((mesic) => mesic.days));

months.map((mesic) => `1. ${mesic.name} 2020`);
console.log(months.map((mesic) => `1. ${mesic.name} 2020`));

//Z pole months vyrobte pole obsahující pro každý měsíc datum jeho prvního dne v roce 2020, tedy

//['1. leden 2020', '1. únor 2020' /* atd. */];
