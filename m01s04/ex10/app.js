var person = {
  name: 'Dragos',
  surname: 'Iordache',
  age: 35,
  petOwner: false,
  skills: [
    'html',
    'javascript',
    'css',
    'java',
    'c++',
    'node',
    'jquery',
    'node.js',
  ],
  friends: [
    {
      name: 'Larry',
      surname: 'Larryson',
      age: 30,
    },
    {
      name: 'Steven',
      surname: 'Stevenson',
      age: 31,
    },
    {
      name: 'Carol',
      surname: 'Carolson',
      age: 29,
    },
  ],
};

console.warn(`
  Folosind obiectul person si forEach, afiseaza
  skillurile din pozitiile impare ale arrayului skills.
`);
person.skills.forEach(function (skill, index) {
  if (index % 2 !== 0) {
    console.log(skill);
  }
});

console.warn(`
  In mod similar, afiseaza skillurile care contin litera a.
`);
person.skills.forEach(function (skill) {
  if (skill.includes('a') || skill.includes('A')) {
    console.log(skill);
  }
});

console.warn(`
  Folosind forEach afiseaza propozitia: "Prietenii mei
  se numesc xxx yyy, xxx yyy si xxx yyy."
`);
var message = 'Prietenii mei se numesc ';
person.friends.forEach(function (friend, index, friends) {
  var punctuation = ', ';
  var arrayLength = friends.length;

  if (index === arrayLength - 1) {
    punctuation = '.';
  }

  // if (index === arrayLength - 2) {
  //   punctuation = ' si ';
  // }

  message += `${friend.name} ${friend.surname}${punctuation}`;
});
console.log(message);

console.warn(`
  Folosind forEach, afiseaza numarul total de ani pe care il au persoanele
  din arrayul friends, doar daca au varsta mai mare decat 30 inclusiv.
`);
var sumAge = 0;
person.friends.forEach(function (friend) {
  if (friend.age >= 30) {
    sumAge += friend.age;
  }
});
console.log(sumAge.toString());

console.warn(`
  Folosind forEach, afiseaza suma anilor
  de nastere a persoanelor care au varsta impara.
`);
var sumBirthYears = 0;
var currentYear = 2022; // new Date().getFullYear();
person.friends.forEach(function (friend) {
  if (friend.age % 2 !== 0) {
    sumBirthYears += currentYear - friend.age;
  }
});
console.log(sumBirthYears.toString());

console.warn(`
  Afiseaza diferenta de varsta dintre persoana si prietenii din arrayul
  friends daca aceasta este mai mare sau egala cu 2 ani.
`);
person.friends.forEach(function (friend) {
  var diff = Math.abs(person.age - friend.age);

  if (diff >= 2) {
    console.log(diff);
  }
});

console.warn(`
  Afiseaza fraza: "Intre Dragos si Larry este o
  diferenta de xx ani. Intre Dragos si Steven... "
`);
var message = '';
person.friends.forEach(function (friend) {
  var diff = Math.abs(person.age - friend.age);

  message += `Intre ${person.name} si ${friend.name} este o diferenta de ${diff} ani. `;
});
console.log(message.trim());

console.warn(`
  Folosind metoda reverse si apoi forEach, afiseaza in ordine
  inversa elementele arrayului skills.
`);
// slice clones
// reverse mutates
person.skills
  .slice()
  .reverse()
  .forEach(function (skill) {
    console.log(skill);
  });

console.warn(`
  Folosind obiectul person si forEach, afiseaza in
  consola skillurile pe care le are persoana.
`);
person.skills.forEach(function (skill) {
  console.log(skill);
});

console.warn(`
  In mod similar, afiseaza skillurile care nu incep cu j.
`);
person.skills.forEach(function (skill) {
  if (!(skill.startsWith('j') || skill.includes('J'))) {
    console.log(skill);
  }
});

console.warn(`
  Folosind forEach afiseaza propozitia: "Numele mari ale
  prietenilor mei sunt xxx, xxx, xxx."
`);
var message = 'Numele mari ale prietenilor mei sunt ';
person.friends.forEach(function (friend, index, friends) {
  var punctuation = ', ';
  var arrayLength = friends.length;

  if (index === arrayLength - 1) {
    punctuation = '.';
  }

  message += `${friend.surname}${punctuation}`;
});
console.log(message);

console.warn(`
  Folosind forEach, afiseaza numarul total de ani pe
  care il au persoanele din arrayul friends
`);
var sumAge = 0;
person.friends.forEach(function (friend) {
  sumAge += friend.age;
});
console.log(sumAge.toString());

console.warn(`
  Folosind forEach, afiseaza suma anilor de nastere a persoanelor
`);
var sumBirthYears = 0;
var currentYear = 2022;
person.friends.forEach(function (friend) {
  sumBirthYears += currentYear - friend.age;
});
console.log(sumBirthYears.toString());

console.warn(`
  Afiseaza diferenta de varsta dintre
  persoana si prietenii din arrayul friends.
`);
person.friends.forEach(function (friend) {
  var diff = Math.abs(person.age - friend.age);

  console.log(diff);
});

console.warn(`
  Folosind metoda reverse (+slice) si apoi forEach, afiseaza in ordine
  inversa numele complet al prietenilor din arrayul friends.
`);
person.friends
  .slice()
  .reverse()
  .forEach(function (friend) {
    console.log(`${friend.name} ${friend.surname}`);
  });
