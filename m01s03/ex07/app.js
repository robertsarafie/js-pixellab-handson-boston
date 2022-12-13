var person = {
  firstName: 'Chris',
  lastName: 'McCandless',
  email: 'chris@gmail.com',
  age: 54,
  birthYear: 1968,
  pets: [
    {
      name: 'Bruno',
      species: 'canis lupus familiaris',
      age: 2,
    },
    {
      name: 'Rio',
      species: 'bird',
      age: 5,
    },
    {
      name: 'Luis',
      species: 'monkey',
      age: 7,
    },
  ],
  zipCode: '550300',
};

console.warn(`
  Afiseaza propozitia: “Numele meu este: xxx yyy si am x animale.”.
  Nu uita de proprietatea length a arrayului pets.
`);
console.log(
  'Numele meu este: ' +
    person.firstName +
    ' ' +
    person.lastName +
    ' si am ' +
    person.pets.length +
    ' animale.',
);

console.warn(`
  Afiseaza propozitia: “Am acelasi email din copilarie: xxx.”.
`);
console.log('Am acelasi email din copilarie: ' + person.email + '.');

console.warn(`
  Afiseaza propozitia: “Unul din cele x animale ale mele este
  species si are age ani.”
`);
console.log(
  'Unul din cele ' +
    person.pets.length +
    ' animale ale mele este ' +
    person.pets[1].species +
    ' si are ' +
    person.pets[1].age +
    ' ani.',
);

console.warn(`
  Calculeaza si afiseaza (folosind anul curent) anul de nastere al
  animalului de pe pozitia 2.
`);
console.log((2022 - person.pets[2].age).toString());

console.warn(`
  Calculeaza si salveaza in variabila difference diferenta
  de ani dintre persoana si animalul de pe pozitia 0 si afiseaza aceasta diferenta. Foloseste anul curent.
`);
console.log((2022 - person.birthYear - person.pets[0].age).toString());

console.warn(`
  Afiseaza propozitia: “Intre firstName si petName este o diferenta de difference ani.”.
`);
console.log(
  'Intre ' +
    person.firstName +
    ' si ' +
    person.pets[0].name +
    ' este o diferenta de ' +
    (person.age - person.pets[0].age) +
    ' ani.',
);
