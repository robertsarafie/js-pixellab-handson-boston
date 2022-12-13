var i = 1;

// while (i <= 100) {
//   console.log(i);

//   i++;
// }

// while (i < 100) {
//   console.log(i);

//   i++;
// }

// while (i < 100) {
//   console.log(i);

//   if (i === 50) {
//     i++;
//     break;
//   }

//   i++;
// }

// Modifica exemplul astfel incat bucla sa numere de la 1 la 67.
// while (i <= 67) {
//   console.log(i);

//   i++;
// }

// Modifica exemplul astfel incat bucla sa numere de la 1 la 66.
// while (i < 67) {
//   console.log(i);

//   i++;
// }

// Folosind keywordul break opreste bucla atunci
// cand numarul este egal cu 12 (dar afiseaza-l).
// while (i < 100) {
//   console.log(i);

//   if (i === 12) {
//     i++;
//     break;
//   }

//   i++;
// }

// Folosind keywordul continue afiseaza doar numerele
// pare intre 1 si 32 (inclusiv).
// while (i <= 32) {
//   i++;

//   if (i % 2 !== 0) {
//     continue;
//   }

//   console.log(i);
// }

// Folosind metoda prompt de doua ori cere utilizatorului un
// numar si o limita superioara apoi afiseaza toti multiplii de
// numar intre 5 si limita superioara introduse.
var userInput = prompt('Intro un numar');
var userInput2 = prompt('Introdu o limita superioara');
while (userInput <= userInput2) {
  userInput++;

  console.log(userInput);
}
