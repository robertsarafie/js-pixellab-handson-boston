var person = {
  firstName: 'Dragos',
  lastName: 'Iordache',
  birthYear: 1987,
  pets: [
    {
      name: 'Twix',
      species: 'papagal',
      age: 4,
    },
    {
      name: 'Mars',
      species: 'caine',
      age: 2,
    },
    {
      name: 'Bounty',
      species: 'hamster',
      age: 4,
    },
    {
      name: 'Lion',
      species: 'pisica',
      age: 10,
    },
  ],
};

console.warn(`
  Afiseaza in consola folosind metoda forEach() numele fiecarui animal.
`);
person.pets.forEach(function (pet) {
  console.log(`${pet.name}`);
});

console.warn(`
  Folosind o bucla for afiseaza suma anilor animalelor.
`);
var sumAge = 0;
for (var i = 0; i < person.pets.length; i++) {
  var petAge = person.pets[i].age;
  sumAge += petAge;
}
console.log(sumAge);

console.warn(`
  Folosind forEach() afiseaza cate una pe linie propozitiile:
  “Twix este papagal si are 4 ani. Mars este caine si are… etc”.
`);
var message = '';
person.pets.slice().forEach(function (pet) {
  console.log(`${pet.name} este ${pet.species} si are ${pet.age} ani.`);
});

console.warn(`
  Folosind o bucla for afiseaza cate una pe linie propozitiile:
  “Intre Dragos si Twix este o diferenta de xx ani. Intre Dragos si Mars… ”
  (repeta pentru toate intrarile din array).
`);
// var message = '';
// for (var i = 0; i < person.pets.length; i++) {
//   var pet = person.pets[i];
//   var diff = Math.abs(2022 - person.birthYear - pet.age);

//   message += `Intre ${person.firstName} si ${pet.name} este o diferenta de ${diff} ani.\n`;
// }
// console.log(message.trim());
// !!! Am incercat sa folosesc \n care am inteles ca e ca un fel de <br>
for (var i = 0; i < person.pets.length; i++) {
  var pet = person.pets;
  var diff0 = Math.abs(
    new Date().getFullYear() - person.birthYear - pet[0].age,
  );
  var diff1 = Math.abs(
    new Date().getFullYear() - person.birthYear - pet[1].age,
  );
  var diff2 = Math.abs(
    new Date().getFullYear() - person.birthYear - pet[2].age,
  );
  var diff3 = Math.abs(
    new Date().getFullYear() - person.birthYear - pet[3].age,
  );
}
console.log(
  `Intre ${person.firstName} si ${pet[0].name} este o diferenta de ${diff0} ani.`,
);
console.log(
  `Intre ${person.firstName} si ${pet[1].name} este o diferenta de ${diff1} ani.`,
);
console.log(
  `Intre ${person.firstName} si ${pet[2].name} este o diferenta de ${diff2} ani.`,
);
console.log(
  `Intre ${person.firstName} si ${pet[3].name} este o diferenta de ${diff3} ani.`,
);
// Nu mi-o venit alta varianta...

console.warn(`
  Folosind o bucla for afiseaza in ordine inversa numele
  animalelor din array sub forma de propozitii: “Animalul meu se numeste xxxx.”.
`);
for (var i = person.pets.length - 1; i >= 0; i--) {
  var pet = person.pets[i];

  console.log(`Animalul meu se numeste ${pet.name}`);
}

console.warn(`
  Folosind o bucla for afla care este cel mai in varsta animal si
  afiseaza propozitia: “xxx este cel mai batran animal pe care il am,
  dar intre noi este o diferenta de xx ani.”
`);
for (var i = 0; i < person.pets.length; i++) {
  var petAge = person.pets[i].age;
}
console.log(maxAge);

console.warn(`
  Folosind o bucla forEach afiseaza propozitia:
  “Am papagal, caine, hamster si pisica.”.
`);
var message = 'Am ';
person.pets.forEach(function (pet, index, pets) {
  var punctuation = ', ';
  var arrayLength = pets.length;

  if (index === arrayLength - 1) {
    punctuation = '.';
  }

  if (index === arrayLength - 2) {
    punctuation = ' si ';
  }

  message += `${pet.species}${punctuation}`;
});
console.log(message);
