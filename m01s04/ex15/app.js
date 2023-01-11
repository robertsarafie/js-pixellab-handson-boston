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
  Folosind fisierele de la exercitiul 06, si doua bucle for imbricate (nested)
  afiseaza diferenta de varsta dintre fiecare membru al arrayului friends si ceilalti membri.
  Poti folosi metoda pentru a converti numerele negative in pozitive.
`);
var message = '';
for (var i = 0; i < person.friends.length; i++) {
  var friends = person.friends[i];
  var diff = Math.abs(friends - friends);

  console.log(diff);
}
