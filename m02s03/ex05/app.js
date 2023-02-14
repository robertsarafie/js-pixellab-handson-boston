/**
 * Folosind evenimentul resize al obiectului window, afiseaza o alerta care
 * sa contina mesajul: “Fereastra si-a schimbat dimensiunea.”
  Folosind evenimentul resize si proprietatea innerWidth al obiectului window,
  afiseaza intr-un paragraf in DOM noua latime a ferestrei dupa fiecare
  eveniment de resize.
  Folosind evenimentul resize si proprietatea innerWidth al obiecutului
  window, afiseaza in alt paragraf mesajul: “Fereastra si-a schimbat
  dimensiunea orizontala.”

 *Folosind evenimentul resize al obiectului window si proprietatile
  innerWidth si innerHeight, la fiecare redimensionare a ferestrei,
  afiseaza intr-un paragraf mesajul: “Fereastra are acum suprafata de xxx pixeli.”.
  Folosind evenimentul de DOMContentLoaded si o functie reutilizabila
  (calculateWindowSurface()) afiseaza suprafata ferestrei si
  la momentul incarcarii site-ului.
 */

const container = document.getElementById('container');
const logMessage = (message = '') => {
  const p = document.createElement('p');
  p.innerText = message;

  container.prepend(p);
};

let initialWindowWidth = window.innerWidth;
let initialWindowHeight = window.innerHeight;

logMessage(initialWindowWidth);
logMessage(calculateWindowSurface(initialWindowWidth, initialWindowHeight));

window.addEventListener('resize', () => {
  const newWidth = window.innerWidth;
  const newHeight = window.innerHeight;
  const condition = newWidth !== initialWindowWidth;
  let message = newWidth;
  let message2 = newWidth || newHeight;

  if (newWidth !== initialWindowWidth) {
    message = `Fereastra si-a schimbat dimensiunea: ${newWidth}`;
    initialWindowWidth = newWidth;
  }

  if (condition || newHeight !== initialWindowHeight) {
    message2 = `Fereastra are acum suprafata de ${newWidth} x ${newHeight} pixeli.`;
    initialWindowWidth = newWidth;
    initialWindowHeight = newHeight;
  }

  logMessage(message);
  logMessage(message2);
});

function calculateWindowSurface(initialWindowWidth, initialWindowHeight) {
  return initialWindowWidth * initialWindowHeight;
}
// Aici e bine asa? Daca pun cu window.innerWidth inauntrul functiei imi spune ca vrea ',' din cauza la punctul de dupa window

document.addEventListener('DOMContentLoaded', () => {
  const p3 = document.createElement('p');

  const windowSurface = calculateWindowSurface(
    initialWindowWidth,
    initialWindowHeight,
  );
  console.log(windowSurface);

  p3.innerText = windowSurface;
  container.prepend(p3);
});
