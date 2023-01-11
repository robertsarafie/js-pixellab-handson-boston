const person = {
  getName: function () {
    return 'Dragos Iordache';
  },

  getAge: function () {
    return 32;
  },
};

function accessor(methodSuffix) {
  const methodName = `get${methodSuffix}`;

  return person[methodName]();
}

const currentYear = new Date().getFullYear();

console.warn(`
  Folosind accesorul salveaza numele mic al persoanei
  intr-o variabila si foloseste-l in propozitia: “Eu sunt xxx.”
`);
const firstName = accessor('Name');
console.log(`Eu sunt ${firstName}.`);

console.warn(`
  Afiseaza anul de nastere al persoanei folosind anul curent.
`);
console.log((currentYear - accessor('Age')).toString());

console.warn(`
  Afiseaza propozitia “Ma numesc xxx yyy,
  am aa ani si m-am nascut in anul aaaa.”
`);
console.log(
  `Ma numesc ${accessor('Name')}, am ${accessor(
    'Age',
  )} ani si m-am nascut in anul ${currentYear - accessor('Age')}.`,
);

console.warn(`
  Folosind accesorul afiseaza numele persoanei.
`);
console.log(accessor('Name'));

console.warn(`
  Afiseaza varsta persoanei.
`);
console.log(accessor('Age'));

console.warn(`
  Afiseaza anul de nastere al persoanei folosind anul curent. Intr-o propozitie de forma “M-am nascut in 1987.”
`);
console.log(`M-am nascut in ${(currentYear - accessor('Age')).toString()}.`);

console.warn(`
  Afiseaza propozitia “Ma numesc xxx yyy si am aa ani!”
`);
console.log(`Ma numesc ${accessor('Name')} si am ${accessor('Age')} ani!`);
