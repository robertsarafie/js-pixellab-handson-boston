/**
 * In fisierul app.js Andra are trebui sa aiba 25 de ani, Steven 20 iar
 * Rolf 40, folosind operatorul spread, creaza obiecte de tipul fullPerson1,
 * fullPerson2, si fullPerson3 care sa reflecte acest lucru
Folosind noul obiect fullPerson3 creaza intr-un obiect numit fullPerson4
cu numele de familie al Andrei care sa se numeasca Anita si sa aiba 36 de ani.
 */

let person1 = {
  name: 'Steven',
  surname: 'Stevenson',
};

let person2 = {
  name: 'Rolf',
  surname: 'Rolfson',
};

let person3 = {
  name: 'Andra',
  surname: 'Andrason',
};

let age1 = {
  age: 20,
};

let age2 = {
  age: 25,
};

const fullPerson1 = {
  ...person1,
  ...age1,
};
console.log(fullPerson1);

const fullPerson2 = {
  ...person2,
  age: 40,
};
console.log(fullPerson2);

const fullPerson3 = {
  ...person3,
  ...age2,
};
console.log(fullPerson3);
