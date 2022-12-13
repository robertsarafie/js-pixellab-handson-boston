var i = 1;

// do {
//   console.log(i);
//   i++;
// } while (i <= 100);

// do {
//   console.log(i);
//   i++;
// } while (i < 100);

// do {
//   i++;
// } while (i < 100);

// do {
//   i++;

//   console.log(i);

//   if (i === 50) {
//     break;
//   }
// } while (i < 100);

// Modifica exemplul astfel incat bucla sa numere de la 1 la 52
// do {
//   console.log(i);
//   i++;
// } while (i <= 52);

// Modifica exemplul astfel incat bucla sa numere de la 1 la 51.
// do {
//   console.log(i);
//   i++;
// } while (i < 52);

// Folosind keywordul break opreste bucla atunci cand numarul este egal
// cu 12 (dar afiseaza-l)
// do {
//   i++;

//   console.log(i);

//   if (i === 12) {
//     break;
//   }
// } while (i < 100);

// Folosind keywordul continue afiseaza doar numerele impare intre 8 si 32.
var i = 8; // am incercat la while cu 8 < i < 32, dar se pare ca e gresit, nu stiu cum ar fi metoda perfecta
do {
  console.log(i);
  i++;

  if ((i = i + 2) !== 0) {
    continue;
  }
} while (i < 32);

// Folosind metoda prompt de trei ori cere utilizatorului un numar,
// o limita inferioara si o limita superioara apoi afiseaza toti multiplii
// de numar intre limita inferioara si limita superioara introduse.
