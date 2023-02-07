/**
 * Folosind evenimentul resize al obiectului window, afiseaza o alerta care
 * sa contina mesajul: “Fereastra si-a schimbat dimensiunea.”
  Folosind evenimentul resize si proprietatea innerWidth al obiectului window,
  afiseaza intr-un paragraf in DOM noua latime a ferestrei dupa fiecare
  eveniment de resize.
  Folosind evenimentul resize si proprietatea innerWidth al obiecutului
  window, afiseaza in alt paragraf mesajul: “Fereastra si-a schimbat
  dimensiunea orizontala.”
 */

const container = document.getElementById('container');
const logMessage = (message = '') => {
  const p = document.createElement('p');
  p.innerText = message;

  container.prepend(p);
};

let initialWindowWidth = window.innerWidth;

logMessage(initialWindowWidth);

window.addEventListener('resize', () => {
  const newWidth = window.innerWidth;
  let message = newWidth;

  if (newWidth !== initialWindowWidth) {
    message = `Fereastra si-a schimbat dimensiunea: ${newWidth}`;
    initialWindowWidth = newWidth;
  }

  logMessage(message);
});
