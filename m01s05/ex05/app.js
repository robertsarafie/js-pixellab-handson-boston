const person = {
  getName: function () {
    return 'Dragos Iordache';
  },
  getAge: function () {
    return 32;
  },
};

const currentYear = new Date().getFullYear();

console.warn(`
  Afiseaza primul nume al persoanei folosind metoda getName()
`);
console.log(person.getName().split(' ')[0]);

console.warn(`
  Afiseaza anul de nastere al persoanei folosind
  metoda getAge() si anul curent.
`);
console.log(currentYear - person.getAge());

console.warn(`
  Afiseaza ultimele doua cifre al anului de nastere al persoanei,
  folosind anul curent si metoda getAge(). (Exemplu: '87).
`);
const fullBirthYear = currentYear - person.getAge();
const abbreviatedYear = fullBirthYear.toString().slice(-2);
console.log(`'${abbreviatedYear}`);

console.warn(`
  Afiseaza propozita: “Ma numesc xxx si am yy ani!”
`);
console.log(`Ma numesc ${person.getName()} si am ${person.getAge()} ani.`);
